import styled from "styled-components";
import Tag from "../../ui/Tag"
import CheckoutButton from "./CheckoutButton"
import Button from "../../ui/Button"
import { Link, useNavigate } from "react-router-dom";
const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;



export default function TodayItem({activity}) {
  const {id , status , guests , numNights} = activity
  const navigate = useNavigate()
  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="green">Leaving</Tag>}
      <Guest>{guests.fullName}</Guest>
      <div>{numNights}</div>
      {status === "unconfirmed" && <Button size="small" variation="primary" as={Link} to={`/checkIn/${id}`}>Check In</Button>}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}

    </StyledTodayItem>
  )
}

