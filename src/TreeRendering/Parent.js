import React, { memo } from 'react'
import Child from './Child'

function Parent() {
    return (
        <div>
            {console.log("Parent")}
            <p>I am a Parent</p>
            <Child />
            <Child />
        </div>
    )
}

export default memo(Parent)
