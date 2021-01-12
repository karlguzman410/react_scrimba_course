import React from 'react'

function Children(props) {
    return (
        <div style={{ border: "1px solid" }}>
            {props.children}
        </div>
    )
}

export default Children
