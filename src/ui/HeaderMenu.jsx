import styled from "styled-components"
import Logout from "../features/authentication/Logout"
import ButtonIcon from "./ButtonIcon"
import { HiOutlineUser } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"
import DarkModeToggle from "./DarkModeToggle"


const StyledHeaderMenu = styled.ul`
display: flex;
gap: 1rem ;

`


const StyledList = styled.li`
display: flex ; 
align-items:center ;
color:var(--color-brand-600);
`
export default function HeaderMenu() {
    const navigate = useNavigate()
  return (
   <StyledHeaderMenu>
    <StyledList>
     <ButtonIcon>
             <HiOutlineUser  onClick={()=>navigate("/account")}/>
        </ButtonIcon>
    </StyledList>
    <StyledList>
     <DarkModeToggle />
    </StyledList>
    <StyledList>
         <Logout />
    </StyledList>
 
   </StyledHeaderMenu>
  )
}
