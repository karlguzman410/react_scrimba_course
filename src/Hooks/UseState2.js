import React, { useState } from 'react'

function UseState2() {

    const [count, setCount] = useState(0)

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Add 1!</button>
            <button onClick={decrement}>Subtract 1!</button>
        </div>
    )
}

export default UseState2
