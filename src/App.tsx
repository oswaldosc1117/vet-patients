import { ToastContainer } from "react-toastify"
import PatientsForm from "./components/PatientsForm"
import { PatientsList } from "./components/PatientsList"
import "react-toastify/ReactToastify.css"


function App() {

    return (
        <>
            <div className=" container mx-auto mt-20">
                <h1 className=" font-black text-5xl text-center md:w-2/3 md:mx-auto">
                    Seguimiento de Pacientes <span className=" text-indigo-700">Veterinarios</span>
                </h1>

                <div className=" mt-12 md:flex">
                    <PatientsForm/>
                    <PatientsList/>
                </div>
            </div>

            <ToastContainer/>
        </>
    )
}

export default App
