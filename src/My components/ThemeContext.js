import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}



export const ThemeProvider = (props) => {
    const [darkTheme, setDarkTheme] = useState(false);

    function toggleTheme(){
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }


    return (
        <ThemeContext.Provider value = {darkTheme}>
            <ThemeUpdateContext.Provider value = {toggleTheme}>
                { props.children }
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}
