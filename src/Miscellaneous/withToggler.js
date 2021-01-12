import React from 'react'
import Toggler from './Miscellaneous/Toggler'


export function withToggler(component) {
    return function (props) {
        return (
            <Toggler component={component} {...props} />
        )
    }
}


