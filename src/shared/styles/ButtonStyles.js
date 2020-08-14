import styled from "styled-components";

export const ButtonStyles = styled.button`
    color:  ${({ theme }) => theme.text};
    padding: 2rem;
    background-color:   ${({ theme }) => theme.backgroundOpacity};
    border: 0
`
