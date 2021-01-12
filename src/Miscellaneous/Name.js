import React from 'react'
import { withToggler } from './withToggler'

function Name(props) {
    return (
        <div>
            <button onClick={props.toggle}>{props.isShown ? "Hide Name" : "Show Name"}</button>
            <div style={{ display: props.isShown ? "block" : "none" }}>
                <h5>Name: Karl Guzman</h5>
            </div>
        </div>
    )
}

export default withToggler(Name)
