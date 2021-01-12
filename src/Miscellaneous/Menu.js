import React from 'react'
import Toggler from './Toggler'

function Menu(props) {
    return (
        <Toggler
            render={(isShown, toggle) => (
                <div>
                    <button onClick={toggle}>{
                        isShown ? "Hide" : "Show"} Menu
                        </button>
                    <div style={{ display: isShown ? "block" : "none" }}>
                        <h4>Status: </h4>
                        <h4>Online</h4>
                    </div>
                </div>
            )}
        />
    )
}

export default Menu
