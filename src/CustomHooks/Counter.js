import React from 'react'
//custom hook import
import useCounter from './useCounter'

function Counter() {
    //custom hook useCounter
    //property called 'count' and 'increment'
    const { count, increment } = useCounter()

    return (
        <div>
            <h1>Count: {count}</h1>
            <button
                onClick={increment}>
                Add 1
            </button>
        </div>
    )
}

export default Counter
