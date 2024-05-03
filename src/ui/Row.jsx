import styled, { css } from "styled-components";



const Row = styled.div`
 display : flex ;
 ${props => props.type === "horizontal" && css`justify-content:space-between; align-items: center` }
 ${props => props.type === "vertical" && css`flex-direction:row  ; gap:1.7rem` }
`
 
Row.defaultProps = {
    type : "horizontal",
}

export default Row