import React from 'react'

export function HigherOrder1(component) {

    const Component = component
    return function (props) {
        return (
            <Component {...props} />
        )
    }
}

