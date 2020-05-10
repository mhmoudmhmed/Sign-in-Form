import React, {createContext, useState} from 'react';

// evey context habe two pieces :
// 1- provider where we put the data
// 2- the component (the consumer)

// 1- provider
export const ThemeContext = createContext();

// 2- the component (the consumer)
export function ThemeProvider(props) {

    const [darkMode, isDarkMode] = useState(false)

        //this.state = {isDarkMode : false}

    const changeTheme = () => {
        isDarkMode(!darkMode)
    }

    return(
        <ThemeContext.Provider value={{darkMode , changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}