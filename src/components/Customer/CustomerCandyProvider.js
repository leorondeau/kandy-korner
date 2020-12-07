import React, { useState , useEffect } from "react"

export const CustomerCandyContext = React.createContext()

export const CustomerCandyProvider = (props) => {
    const [customerCandys , setCustomerCandys] = useState([])

    const getCustomerCandy = () => {
        return fetch ("http://localhost:8088/customercandy")
            .then(res => res.json())
            .then(setCustomerCandys)
    }

    const addCustomerCandy = location => {
        return fetch("http://localhost:8088/customercandy" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
    })
    .then(getCustomerCandy)
}

    return (
        <LocationContext.Provider value={{
            customerCandys , addCustomerCandy , getCustomerCandy
        }}>
            {props.children}
            </LocationContext.Provider>
    )   
}