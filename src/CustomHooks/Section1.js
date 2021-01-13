import React from 'react'
import useToggler from './useToggler'

function Section1() {

    const [on, toggle] = useToggler()

    return (
        <div>
            <h3>Click heart to favorite</h3>
            <h1>
                <span onClick={toggle}>
                    {on ? "❤️" : "♡"}
                </span>
            </h1>
        </div>
    )
}

export default Section1
