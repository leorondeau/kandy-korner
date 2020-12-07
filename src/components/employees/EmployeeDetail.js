import React , { useContext , useEffect , useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

export const EmployeeDetail = (props) => {
    const { releaseEmployee , getEmployeeById , updateEmployee } = useContext(EmployeeContext)

    const [employee , setEmployee] = useState({ location: {}})

    useEffect(() => {
        const employeeId = parseInt(props.match.params.employeeId)
        getEmployeeById(employeeId)
        .then(setEmployee)
    }, [])

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__location">Location: {employee.location.name}</div>
            {/* <div className="employee__fullTime">Full Time: {employee.fullTime}</div> */}
            <div className="employee__hourlyRate">Hourly Rate: $ {employee.hourlyRate}</div>
            <button onClick = {
                () => {

                    releaseEmployee(employee.id)
                    // or releaseemployee(props.match.params.employeeId)
                    .then(() => {
                        props.history.push("/employees")
                    })
                }
            }>
            Release employee
            </button>
            <button onClick={
                () => {
                updateEmployee(props.match.params.employeeId)
                .then(() => {
                props.history.push(`/employees/edit/${employee.id}`)
            })
        }
        }>Edit</button>
        </section>
    )
}