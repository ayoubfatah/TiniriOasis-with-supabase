import styled from "styled-components"
import UserAvatar from "../features/authentication/UserAvatar"
import HeaderMenu from "./HeaderMenu"


const StyledHeader  = styled.header`
background-color: var(--color-grey-0) ;
padding : 1.2rem 4.3rem;
border-bottom: 1px solid var(--color-grey-100);
display:flex ;
align-items:center;
gap:2rem;
justify-content:end ;

`


export default function Header() {
  return (
    <StyledHeader>
    <UserAvatar />
     <HeaderMenu />
    </StyledHeader>
  )
}
