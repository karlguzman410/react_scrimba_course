import React from 'react'
import Counter from './Counter'

function CountDisplay(props) {
    return (
        <Counter
            value={2}
            render={(count, increment, decrement) => (
                <div>
                    <button onClick={increment}>Increase Count</button>
                    <button onClick={decrement}>Decrease Count</button>
                    <p>Current Count: {count}</p>
                </div>
            )}
        />
    )
}

export default CountDisplay
