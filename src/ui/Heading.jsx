import styled, { css } from "styled-components";

const Heading = styled.h1`
 ${(props) => props.as === "h1" && css`font-size : 30px;`}
 ${(props) => props.direction === "center" && css`text-align : center;`}
 ${(props) => props.as === "h2" && css`
font-size : 30px;
background-color: transparent; `}
 ${(props) => props.as === "h3" && css`
font-size : 18px;
background-color: transparent; `}

`;


export  default Heading;
 