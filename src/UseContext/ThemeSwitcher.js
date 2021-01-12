import React from 'react'
import './ThemeSwitcher.css'
import Header from './Header'
import Button from './Button'
import { ThemeContextProvider } from './ThemeContext'

function ThemeSwitcher() {
    return (
        <ThemeContextProvider>
            <Header />
            <Button />
        </ThemeContextProvider>
    )
}

export default ThemeSwitcher
