import React, { useContext } from 'react';
import { contextObj } from '../App';

function A() {
    let val = useContext(contextObj)
    return (
        <>
            <h1>Component A --{val}</h1>
        </>
    )
}

export default A