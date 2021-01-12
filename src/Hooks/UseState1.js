import React, { useState } from 'react'

function UseState1() {

    const [answer] = useState("Yes")

    return (
        <div>
            <h1>Is state important? {answer}</h1>
        </div>
    )
}

export default UseState1
