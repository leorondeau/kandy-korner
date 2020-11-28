import React from "react"
// import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"

export const ApplicationViews = (props) => {
    return (
        <>
            {/* Exact needed or it will also match the other routes because
      they all have "/ in the path" */}
            <LocationProvider>
                {/* <Route exact path="/"> */}
                    <LocationList />
                {/* </Route> */}
            </LocationProvider>
            </>
            )
        }