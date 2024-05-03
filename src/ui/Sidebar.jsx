import styled from "styled-components"

import MainNav from "../ui/MainNav"
const StyledSideBar = styled.aside`

background-color: var(--color-grey-0) ;
padding: 3.2rem 2.4rem;
border-right: 1px solid var(--color-grey-100) ;
 grid-row: 1/ -1 ;

`


export default function Sidebar() {
  return (
    <StyledSideBar>
        <h1>Tiniri Oasis</h1>
        <MainNav />
    </StyledSideBar>
  )
}
