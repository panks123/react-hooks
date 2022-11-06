import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeState = (props)=>{
    const [darkTheme, setDarkTheme] = useState(true)

    const toggleTheme = ()=>{
        setDarkTheme(prevDarkTheme=> !prevDarkTheme)
    }

    return (
        <ThemeContext.Provider value={ {darkTheme, toggleTheme} }>
            { props.children }
        </ThemeContext.Provider>
    )
}

export default ThemeState;