import React, { useState } from 'react'

function RenderPropExample1(props) {
    return (
        <div>
            <p>Render Prop Example 1</p>
            {props.greeting(true)}
        </div>
    )
}

export default RenderPropExample1
