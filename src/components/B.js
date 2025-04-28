import React, { useContext } from 'react'
import { contextObj } from '../App';


function B() {
    let val = useContext(contextObj)

    return (
        <h1>Component B -- {val}</h1>
    )
}

export default B