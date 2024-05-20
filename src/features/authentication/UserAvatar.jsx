import styled from "styled-components";
import { useUser } from "./useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;



export default function UserAvatar() {
  const avatarImg = "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
  const {user} = useUser()
  const {fullName , avatar} = user.user_metadata
  console.log(user);
  return (
  
  <StyledUserAvatar>
    <Avatar  src={Avatar } alt={`avatar of ${fullName}`} /> 
    <span>{fullName}</span>
  </StyledUserAvatar>
  )
}
