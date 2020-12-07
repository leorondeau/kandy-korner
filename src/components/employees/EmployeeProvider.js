import React, { useState } from "react"

export const EmployeeContext = React.createContext()

export const EmployeeProvider = (props) => {
    const [employees , setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees")
        .then(res => res.json())
        .then(setEmployees)
    }

    const getEmployeeById = (id) => {
        return fetch (`http://localhost:8088/employees/${ id }?_expand=location`)
        .then(res => res.json())
    }

    const addEmployee = employee => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
        .then(getEmployees)
    }

    const releaseEmployee = employeeid => {
        return fetch(`http://localhost:8088/employees/${employeeid}`, {
            method: "DELETE",
    })
    .then(getEmployees)
        
    }

    const updateEmployee = employee => {
        return fetch (`http://localhost:8088/employees/${employee.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
        .then(getEmployees)
    }


    return (
        <EmployeeContext.Provider value = {{
        employees , addEmployee , getEmployees , releaseEmployee , updateEmployee , getEmployeeById
    }}>
        {props.children}
    </EmployeeContext.Provider>)
}