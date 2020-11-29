import React, { useState } from "react"
import { Product } from "./Product"

export const ProductContext = React.createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return fetch ("http://localhost:8088/products")
        .then(res => res.json())
        .then(setProducts)
    }

    const addProduct = location => {
        return fetch ("http://localhost:8088/products" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(location)
    })
    .then(getProducts)
}

    return (
        <ProductContext.Provider value = {{
            products , addProduct , getProducts
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}