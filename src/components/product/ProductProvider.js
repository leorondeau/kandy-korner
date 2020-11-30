import React, { useState } from "react"
import { Product } from "./Product"

export const ProductContext = React.createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])
    // console.log("props In Provider" , props)
    // console.log("product" , products)

    const getProducts = () => {
        return fetch ("http://localhost:8088/products")
        .then(res => res.json())
        .then(setProducts)
    }

    const addProduct = product => {
        return fetch ("http://localhost:8088/products" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    .then(getProducts)
}

// console.log("props.children In Provider" , props.children)
console.log("products in ProductProvider" , products)
return (
    <ProductContext.Provider value = {{
        products , addProduct , getProducts
    }}>
            {props.children}
        </ProductContext.Provider>
    )
}


