import React, { useContext }from 'react'
import ThemeContext from './contexts/ThemeContext'
import './UnderstandUseContextHook.css'

const UnderstandUseContextHook = () => {
    const darkThemeContextObj = useContext(ThemeContext)

    const themeStyle = {
        backgroundColor : darkThemeContextObj.darkTheme ? "#333" : "#CCC",
        color : darkThemeContextObj.darkTheme ? "#CCC" : "#333"
    }

  return (
    <>
        <button type='button' onClick={darkThemeContextObj.toggleTheme}>Toggle Theme</button>
        <div className='themeview' style={ themeStyle }>
            { darkThemeContextObj.darkTheme  ? "Dark Theme" : "Light Theme" }
        </div>
    </>
  )
}

export default UnderstandUseContextHook
