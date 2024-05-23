import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Modal from "../../ui/Modal"
import { useMoveBack } from "../../hooks/useMoveBack";
import useBooking from "./useBooking";
import Spinner from "../../ui/Spinner";
import { HiArrowDownOnSquare, HiArrowUpOnSquare } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import useCheckOut from "../check-in-out/useCheckOut";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Empty from "../../ui/Empty";
import useDeleteBooking from "./useDeleteBooking"
const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const {booking , isLoading} = useBooking()
  console.log(booking , "bookingid");
  const {status , id :bookingId} = booking ?? {}
  const {mutate: checkOut , isLoading:isCheckingOut} = useCheckOut()
  const moveBack = useMoveBack();
  const navigate = useNavigate()
  const {mutate , isDeleting} = useDeleteBooking()
  
  function handleCheckedOut(){
    checkOut(bookingId)
   }
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  if(isLoading ) return <Spinner />
  if(!booking) return <Empty resource="Booking" />
  return (
    <>
    <Modal>

      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking {bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        <Modal.Open opens="delete-booking">
        <Button variation="danger">Delete Cabin</Button>
        </Modal.Open>


        {status === "unconfirmed" && <Button onClick={()=> navigate(`/checkin/${bookingId}`)}>Check in
        </Button>}
        {status === "checked-in" && <Button icon={<HiArrowUpOnSquare/>} disabled={isCheckingOut} onClick={handleCheckedOut}>Check out</Button>}
        <Button variation="secondary" onClick={moveBack}> Back </Button>

      </ButtonGroup>
      <Modal.Window name="delete-booking">
      <ConfirmDelete resourceName={"Booking"} disabled={isDeleting}  onConfirm={()=>  {
        mutate(bookingId)
        navigate("/bookings")
      }  }  />
      </Modal.Window>
      </Modal>
    </>
  );
}

export default BookingDetail;
