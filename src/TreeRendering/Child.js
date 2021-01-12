import React from 'react'
import GrandChild from './GrandChild'

function Child() {
    return (
        <div>
            {console.log("Child")}
            <p>I am a Child</p>
            <GrandChild />
            <GrandChild />
        </div>
    )
}

export default Child
