import React from 'react'

function CallOut(props) {
    return (
        <div style={{ border: "1px solid black", backGroundColor: "light blue", margin: "auto", width: "60%", textAlign: "center" }}>
            {props.children}
        </div>
    )
}

export default CallOut
