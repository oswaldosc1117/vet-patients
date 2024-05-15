type PatientDetailsItemsProps = {
    label: string,
    data: string
}

export const PatientDetailsItems = ({label, data}: PatientDetailsItemsProps) => {

    return (
        <p className=" font-bold text-gray-700 mb-3">{label}: {''}
            <span className=" font-normal normal-case">{data}</span>
        </p>
    )
}
