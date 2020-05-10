import React, {useContext} from 'react';
import {ThemeContext} from './contexts/ThemeContext';



function PageContent(props){


    const {darkMode} = useContext(ThemeContext);
    const styles = {
        backgroundColor: darkMode ? "#000" : "#fff",
        width: "100vw",
        height: "100vh"
    }

    return(
        <div style={styles}>
            {props.children}
        </div>
    )
}

export default PageContent;
