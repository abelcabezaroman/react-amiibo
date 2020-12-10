import React from 'react'
import { ButtonStyles } from '../../styles/ButtonStyles';
import { darkTheme, lightTheme } from "../../styles/themes";

export default function ToggleTheme({ theme, setTheme }){

    const changeTheme = () => {
        if (theme === lightTheme) {
            setTheme(darkTheme)
        } else {
            setTheme(lightTheme)
        }
    }

    return (
        <ButtonStyles onClick={changeTheme}>
            Switch Theme
        </ButtonStyles>
    );
}
