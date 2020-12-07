import React, { useContext , useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { Product } from "./Product"
import "./Product.css"
import { ProductTypeContext } from "./ProductTypeProvider"

// console.log("ProductContext" , ProductContext)
// console.log("ProductTypeContext" , ProductTypeContext)

export const ProductList = () => {
    
    const { products , getProducts } = useContext(ProductContext)
    const { productTypes , getProductTypes} = useContext(ProductTypeContext)
    // console.log("proTYPE" , productType)
    // console.log("ProductContext in ProductList" , ProductContext)
    // console.log("useContext in ProductList" , useContext(ProductContext))
    // console.log("products in ProductList" , products)
    // console.log("getProducts in productList" , getProducts)
    useEffect(() => {
        getProductTypes()
        .then(getProducts)
    }, [])

    useEffect(() => { 

    }, [products])

    return (
        <div className="products">
            {/* {console.log("products/productTypes" , products, productTypes)} */}
            {   
                products.map(pro => {
                    const productTypeObj = productTypes.find(pt => pro.productTypeId === pt.id)  
                    // console.log("productTypeObj" , productTypeObj)
                // debugger
               return <Product key={pro.id}  
                               productType={productTypeObj}
                               product={pro} /> 
            })
        }
        </div>
    )
} 
// console.log("pro in ProductList" , pro.id)