import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
import { darkTheme, lightTheme } from "../../styles/themes";

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: white;
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  }`;

const ToggleTheme = ({ theme, setTheme }) => {

    const changeTheme = () => {
        if (theme === lightTheme) {
            setTheme(darkTheme)
        } else {
            setTheme(lightTheme)
        }
    }

    return (
        <Button onClick={changeTheme}>
            Switch Theme
        </Button>
    );
};

ToggleTheme.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default ToggleTheme;
