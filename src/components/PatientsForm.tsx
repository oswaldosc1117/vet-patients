import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { usePatientStore } from "../store"
import { Errors } from "./Errors"
import { DraftPatient } from "../types"

export default function PatientsForm() {

    // const {addPatient} = usePatientStore()
    const addPatient = usePatientStore(state => state.addPatient) // NG - 2.
    const activeId = usePatientStore(state => state.activeId)
    const patients = usePatientStore(state => state.patients)
    const updatePatient = usePatientStore(state => state.updatePatient)

    const {register, handleSubmit, setValue, formState: {errors}, reset} = useForm<DraftPatient>() // NG - 1 y 3.

    useEffect(() => {
        if(activeId){
            const activePatient = patients.filter(patient => patient.id === activeId)[0]

            setValue('name', activePatient.name)
            setValue('caretaker', activePatient.caretaker)
            setValue('email', activePatient.email)
            setValue('date', activePatient.date)
            setValue('symptoms', activePatient.symptoms)
        }
    }, [activeId])
  
    const RegisterPatient = (data: DraftPatient) => {

        if(activeId){
            updatePatient(data)
            toast.info('Paciente Actualizado Correctamente')
        } else {
            addPatient(data)
            toast.success('Paciente Registrado Correctamente')
        }

        reset()
    }


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
    
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
    
            <form 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                noValidate
                onSubmit={handleSubmit(RegisterPatient)}
            >
                    <div className="mb-5">
                        <label htmlFor="name" className="text-sm uppercase font-bold">
                            Paciente 
                        </label>
                        <input  
                            id="name"
                            className="w-full p-3  border border-gray-100"  
                            type="text" 
                            placeholder="Nombre del Paciente"
                            {...register('name', {
                                required: 'Este campo es obligatorio'
                            })} 
                        />

                        {/* Validacion */}
                        {errors.name?.message && (
                            <Errors>{errors.name.message}</Errors>
                        )}
                    </div>
    
                    <div className="mb-5">
                        <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                            Propietario 
                        </label>
                        <input  
                            id="caretaker"
                            className="w-full p-3  border border-gray-100"  
                            type="text" 
                            placeholder="Nombre del Propietario"
                            {...register('caretaker', {
                                required: 'Este campo es obligatorio'
                            })}
                        />

                        {/* Validacion */}
                        {errors.caretaker?.message && (
                            <Errors>{errors.caretaker.message}</Errors>
                        )}
                    </div>
    
                <div className="mb-5">
                    <label htmlFor="email" className="text-sm uppercase font-bold">
                        Email 
                    </label>
                    <input  
                        id="email"
                        className="w-full p-3  border border-gray-100"  
                        type="email" 
                        placeholder="Email de Registro"
                        {...register('email', {
                            required: 'Este campo es obligatorio',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email No Válido'
                            }
                        })}
                    />

                    {/* Validacion */}
                    {errors.email?.message && (
                        <Errors>{errors.email.message}</Errors>
                    )}
                </div>
    
                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Fecha Alta 
                    </label>
                    <input  
                        id="date"
                        className="w-full p-3  border border-gray-100"  
                        type="date"
                        {...register('date', {
                            required: 'Este campo es obligatorio'
                        })}
                    />

                    {/* Validacion */}
                    {errors.date?.message && (
                        <Errors>{errors.date.message}</Errors>
                    )}
                </div>
                
                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                    Síntomas 
                    </label>
                    <textarea  
                        id="symptoms"
                        className="w-full p-3  border border-gray-100"  
                        placeholder="Síntomas del paciente"
                        {...register('symptoms', {
                            required: 'Este campo es obligatorio'
                        })}
                    ></textarea>

                    {/* Validacion */}
                    {errors.symptoms?.message && (
                        <Errors>{errors.symptoms.message}</Errors>
                        // <Errors>{errors.symptoms.message.toString()}</Errors> // NG - 1.
                    )}
                </div>
    
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value='Guardar Paciente'
                />
            </form> 
        </div>
    )
  }

/** NOTAS GENERALES
 * 
 * 1.- Puedo tipar el useform de React Hook Form. De esta manera, al renderizar los mensajes, no es necesario añadir la propiedad .toString() a cada mensaje.
 * 
 * 2.- Hay dos formas de llamar a las funciones del estado global de zustand. Una es con el destructuring tradicional, y la otra es con dicha sintaxis.
 * 
 * 3.- La funcion setValues de React Hook Form permite establecer dinámicamente el valor de un campo registrado y tener las opciones para validar y actualizar el
 * estado del formulario. Al mismo tiempo, intenta evitar reproducciones innecesarias. En este caso, estamos seteando el valor que ya habiamos recopilado de regreso
 * al formulario.
*/