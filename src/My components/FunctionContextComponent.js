import React from 'react'
import { useTheme, useThemeUpdate } from "./ThemeContext";


export const FunctionContextComponent = () => {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const themeStyles = {
        backgroundColor : darkTheme ? '#333' : '#CCC',
        color : darkTheme ? '#CCC' : '#333',
        margin : '2rem',
        padding : '2rem',
        textAlign : 'center'
    }

    return (
        <div style = {{textAlign:'center'}}>
            <button onClick = {toggleTheme} className='hook-button'>Toggle Theme</button>
            <div style={themeStyles} >Function Theme</div>
        </div>
    )
}
