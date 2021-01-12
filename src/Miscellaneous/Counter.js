import React, { useState } from 'react'


function Counter(props) {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + props.value)
    }

    function decrement() {
        setCount(count - props.value)
    }

    return (
        <div>
            {props.render(count, increment, decrement)}
        </div>
    )
}

export default Counter
