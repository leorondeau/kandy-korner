import React, { useContext, useState , useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../locations/LocationProvider"



export const EmployeeForm = (props) => {

    const { employees , getEmployees , updateEmployee , addEmployee } = useContext(EmployeeContext)
    const { locations , getLocations } = useContext(LocationContext)

    const [ employee, setEmployee] = useState({})
console.log("employee" , employee)
    const editMode = props.match.params.hasOwnProperty("employeeId")

    const handleControlledInputChange = (event) => {

        const newEmployee = Object.assign({} , employee)
        newEmployee[event.target.name] = event.target.value
        setEmployee(newEmployee)
    }

    const getEmployeeInEditMode = () => {
        if(editMode) {
            const employeeId = parseInt(props.match.params.employeeId)
            const selectedEmployee = employees.find(e => e.id === employeeId) || {}
            setEmployee(selectedEmployee)
        }
    }

    useEffect(() => {
        getLocations()
        getEmployees()
    }, [])

    useEffect(() => {
        getEmployeeInEditMode()
    },[employees])

    const constructNewEmployee = () => {
        const locationId = parseInt(employee.locationId)
        const manager = employee.manager
        const fullTime = employee.fullTime
        const hourlyRate = employee.hourlyRate

        if(locationId == 0 ) {
            window.alert("Please fill out all fields")
        } else {
            if(editMode) {
                updateEmployee({
                    id: employee.id,
                    name: employee.name,
                    locationId: locationId,
                    manager: manager,
                    fullTime: fullTime,
                    hourlyRate: hourlyRate
                    
                })
                .then(() => props.history.push("/employees"))
            } else {
                addEmployee({
                    name: employee.name,
                    locationId: locationId,
                    manager: manager,
                    fullTime: fullTime,
                    hourlyRate: hourlyRate
                })
                .then(() => props.history.push("/employees"))
            }
        }
        }

        return (
            <form className="employeeForm">
                <h2 className="employeeForm__title">{editMode ? "Update Employee" : "Add Employee"}</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Employee name</label>
                        <input type="text" name="name" required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Employee name"
                        value={employee.name}
                        onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                <div className="form-group">
                    <label htmlFor="locationId">Location: </label>
                    <select name="locationId" className="form-control"
                        proptype="int"
                        value={employee.locationId}
                        onChange={handleControlledInputChange}>

                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="manager">Manager</label>
                        <select name="manager" className="form-control"
                            proptype="boolean"
                            value={employee.manager}
                            onChange={handleControlledInputChange}>
                            <option value="0">Manager</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>                        
                        </select>
                    </div>
            </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="fullTime">Full time</label>
                        <select name="fullTime" className="form-control"
                            proptype="boolean"
                            value={employee.fullTime}
                            onChange={handleControlledInputChange}>
                            <option value="0">Full Time</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>                
                        </select>
                    </div>
            </fieldset> 
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly rate $ </label>
                    <input type="int" name="hourlyRate" className="form-control"
                        proptype="int"
                        value={employee.hourlyRate}
                        onChange={handleControlledInputChange}>
                    </input>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewEmployee()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Add employee"}
            </button>
        </form>
    )
}