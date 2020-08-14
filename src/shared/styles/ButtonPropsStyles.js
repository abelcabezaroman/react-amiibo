import styled from "styled-components";

export const ButtonStyles = styled.button`
    color:  ${({ theme }) => theme.text};
    background-color:   ${({ theme }) => theme.backgroundOpacity};
    border: 0
`
