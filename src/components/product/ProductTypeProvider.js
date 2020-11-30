import React, { useState } from "react"


export const ProductTypeContext = React.createContext()

export const ProductTypeProvider = (props) => {
    const [productTypes, setProductTypes] = useState([])
    // console.log("props In Provider" , props)
    console.log("setProductTypes" , setProductTypes)

    const getProductTypes = () => {
        return fetch ("http://localhost:8088/productTypes")
        .then(res => res.json())
        .then(setProductTypes)

    }

    const addProductType = productType => {
        return fetch ("http://localhost:8088/productTypes" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productType)
    })
    .then(getProductTypes)
}

// console.log("props.children In Provider" , props.children)
console.log("productsTypes in ProductProvider" , productTypes)
return (
    <ProductTypeContext.Provider value = {{
        productTypes , addProductType , getProductTypes
    }}>
            {props.children}
        </ProductTypeContext.Provider>
    )
}