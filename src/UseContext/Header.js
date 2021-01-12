import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Header() {

    const context = useContext(ThemeContext)

    return (
        <header className={`${context.theme}-theme`}>
            <h2>{context.theme === "light" ? "light" : "Dark"} Theme</h2>
        </header>
    )
}

export default Header
