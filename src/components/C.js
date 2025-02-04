import React, { useContext } from 'react';
import { contextObj } from '../App';


function C() {
    let val = useContext(contextObj)

    return (
        <h1>Component C -- {val}</h1>
    )
}

export default C;