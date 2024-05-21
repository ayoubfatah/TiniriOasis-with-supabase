import styled from "styled-components";
import { useDarkMode } from "../contextApi/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

const BlackTitle = styled.h1`
  color:black;
`
const WhiteTitle = styled.h1`
  color:white;
`

function Logo() {
  const {isDarkMode} =  useDarkMode()

  return (
    <StyledLogo>
      {isDarkMode ? <WhiteTitle>Tiniri Oasis</WhiteTitle> : <BlackTitle>Tiniri Oasis</BlackTitle>}
    </StyledLogo>
  );
}

export default Logo;
