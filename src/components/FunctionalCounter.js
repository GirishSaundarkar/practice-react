import React, { useState } from 'react'

function FunctionalCounter() {
    let [count, setCount] = useState(0)
    return (
        <>
            <center>
                <h1>Functional Counter App</h1>
                <h1>count : {count}</h1>
                <button onClick={() => { setCount(count + 1) }}>Increment</button>
                <button onClick={() => { setCount(count - 1) }}>Decrement</button>
            </center>
        </>
    )
}

export default FunctionalCounter;