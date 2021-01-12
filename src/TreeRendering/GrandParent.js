import React, { memo } from 'react'
import Parent from './Parent'

function GrandParent() {
    return (
        <div>
            {console.log("GrandParent")}
            <p>I am a GrandParent</p>
            <Parent />
            <Parent />
        </div>
    )
}

export default memo(GrandParent)
