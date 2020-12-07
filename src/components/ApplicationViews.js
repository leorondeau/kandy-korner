import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { ProductProvider } from "./product/ProductProvider"
import { ProductList } from "./product/ProductList"
import { ProductTypeProvider } from "./product/ProductTypeProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeForm } from "./employees/EmployeeForm"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeDetail } from "./employees/EmployeeDetail"


export const ApplicationViews = (props) => {
    return (
        <>
            {/* Exact needed or it will also match the other routes because
      they all have "/ in the path" */}
            <LocationProvider>
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <ProductProvider>
                <ProductTypeProvider>
                    <Route path="/products">
                        <ProductList />
                    </Route>
                </ProductTypeProvider>
            </ProductProvider>
            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees" render={
                        props => <EmployeeList {...props} />
                    } />

                    <Route path="/employees/:employeeId(\d+)" render={
                        props => <EmployeeDetail {...props} />
                    } />
                    <Route exact path="/employees/create" render={
                        props => <EmployeeForm {...props} />
                    } />

                    <Route path="/employees/edit/:employeeId(\d+)" render={
                        props => <EmployeeForm {...props} />
                    } />


                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}