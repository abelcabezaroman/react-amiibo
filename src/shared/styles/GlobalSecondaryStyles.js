import { createGlobalStyle } from "styled-components"

export const GlobalSecondaryStyles = createGlobalStyle`
  body {
    background-color: blue;
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
        color: ${({ theme }) => theme.text};

  }
  
  a{
    color: ${({ theme }) => theme.text};
  }
  `
