
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiHome } from "react-icons/hi2";
import { HiHomeModern } from "react-icons/hi2";

import { HiMiniCog8Tooth } from "react-icons/hi2";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { HiMiniUsers } from "react-icons/hi2";
import supabase from "../services/supabase"

const NavList = styled.ul`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.6rem 1.2rem ;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

 console.log(supabase);

export default function MainNav() {
  return (
    <NavList>
    <li><StyledNavLink to="/dashboard"> <HiHome/><span>Home</span></StyledNavLink></li>
    <li><StyledNavLink to="/bookings"><HiOutlineCalendarDays/>  Bookings</StyledNavLink></li>
    <li><StyledNavLink to="/Cabins"> <HiHomeModern /> Cabins</StyledNavLink></li>
    <li><StyledNavLink to="/Users"> <HiMiniUsers/> Users</StyledNavLink></li>
    {/* <li><StyledNavLink to="/Account"><HiMiniUserCircle/>  Account</StyledNavLink></li> */}
    <li><StyledNavLink to="/Settings"><HiMiniCog8Tooth/> Settings</StyledNavLink></li>
    </NavList>
  )
}
