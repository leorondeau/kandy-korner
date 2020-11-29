import React from "react"
import "./Location.css"


// console.log("this.props" , this.props)
export const Location = ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <address className="location__address">Address: {location.address}</address>
        <div className="square__footage">SF: {location.squareFootage}</div>
        <div className="handicap__accessible">Handicap Accessible: {location.handicapAccessible}</div>
    </section>
)