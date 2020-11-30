import React from "react"
// import { Customer } from "../customer/Customer"
import "./Product.css"

export const Product = ({ product , productType }) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__price">Price: {product.price} </div>
        <div className="product__TypeId">{productType.type}</div>
    </section>
)
// console.log("product in Product" , product)
