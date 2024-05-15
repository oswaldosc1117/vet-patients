import { toast } from "react-toastify"
import { Patient } from "../types"
import { PatientDetailsItems } from "./PatientDetailsItems"
import { usePatientStore } from "../store"

type PatientsDetailsProps = {
    patient: Patient
}

export const PatientsDetails = ({patient}: PatientsDetailsProps) => {

    const deletePatient = usePatientStore((state) => state.deletePatient)
    const editPatient = usePatientStore((state) => state.editPatient)

    const handleClick = () => {

        deletePatient(patient.id)
        toast.error('Paciente Eliminado Correctamente')

    }


    return (
        <>
            <div className=" mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
                <PatientDetailsItems label="ID" data={patient.id}/>
                <PatientDetailsItems label="Nombre" data={patient.name}/>
                <PatientDetailsItems label="Propietario" data={patient.caretaker}/>
                <PatientDetailsItems label="Email" data={patient.email}/>
                <PatientDetailsItems label="Fecha de alta" data={patient.date.toString()}/>
                <PatientDetailsItems label="Síntomas" data={patient.symptoms}/>

                <div className=" flex justify-between flex-col md:flex-row gap-3 mt-10">
                    <button
                        type="button"
                        className=" py-2 px-5 bg-indigo-600 hover:bg-indigo-700 font-bold text-white uppercase rounded-lg"
                        onClick={() => editPatient(patient.id)}
                    >
                        Editar
                    </button>

                    <button
                        type="button"
                        className=" py-2 px-5 bg-red-600 hover:bg-red-700 font-bold text-white uppercase rounded-lg"
                        onClick={handleClick}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </>
    )
}
