import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Button() {

    const context = useContext(ThemeContext)

    return (
        <button
            onClick={context.toggleTheme}
            className={`${context.theme}-theme`}> Switch theme
        </button>
    )
}

export default Button
