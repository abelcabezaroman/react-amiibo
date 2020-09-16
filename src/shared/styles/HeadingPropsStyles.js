import styled from "styled-components";

export const HeadingPropsStyles = styled.h1`
    color:  ${props => props.secondary ? 'red' : '#FFFFFF'};
    font-size: 8rem;
    
    ${props => props.secondary ? `
    background-color: #FFFFFF; 
    font-size: 10rem` :
    `background-color: red`}
`
