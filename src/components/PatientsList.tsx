import { usePatientStore } from "../store"
import { PatientsDetails } from "./PatientsDetails"

export const PatientsList = () => {

    const patients = usePatientStore(state => state.patients)


    return (
        <div className=" md:w-1/2 lg:h-3/5 md:h-screen overflow-y-scroll">
            {patients.length ? (
                <>
                    <h2 className=" font-black text-3xl text-center">Listado de pacientes</h2>
                    <p className=" text-xl text-center mt-5 mb-10">Administra tus <span className=" text-indigo-600 font-bold">Pacientes y Citas</span></p>
                    {patients.map(e => (
                        <PatientsDetails key={e.id} patient={e}/>
                    ))}
                </>
            ) : (
                <>
                    <h2 className=" font-black text-3xl text-center">No hay pacientes</h2>
                    <p className=" text-xl text-center mt-5 mb-10">Comienza agregando pacientes <span className=" text-indigo-600 font-bold">y aparecerán en este lugar</span></p>
                </>
            )}
        </div>
    )
}
