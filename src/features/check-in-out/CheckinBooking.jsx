import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Checkbox from "../../ui/Checkbox";

import { useMoveBack } from "../../hooks/useMoveBack";
import useBooking from "../bookings/useBooking";
import useSettings from "../settings/useSettings";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import useCheckIn from "./useCheckIn";
import ConfirmDelete from "../../ui/ConfirmDelete";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const moveBack = useMoveBack();
  const [confirmedPaid , setConfirmedPaid] = useState(false)
  const [addBreakFast , setAddBreakFast] = useState(false)
  const {booking  , isLoading} = useBooking() ?? {}
 const  {settings,isLoading:isSettings }= useSettings()
 const {mutate , isLoading : isChecking}=useCheckIn()

 console.log(settings);
  const {
    id:bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
    isPaid,
  } = booking ?? {};
  const breakFastTotal = settings?.breakFastPrice * numNights * numGuests
  
  useEffect(()=>{
    setConfirmedPaid(booking?.isPaid  ?? false)  
  },[booking?.isPaid])
  function handleCheckin() {
    if(!confirmedPaid)return
    if(addBreakFast){
      mutate({bookingId , breakfast:{
        hasBreakfast: true,
        extrasPrice: breakFastTotal , 
        totalPrice: breakFastTotal + totalPrice ,
      }})

    }
    else{
      mutate({bookingId , breakfast:{}})
    }    
  }

if(isLoading || isChecking || isSettings) return <Spinner />
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      {!hasBreakfast && <Box>
        <Checkbox  id="breakfast" onChange={()=>{
          setAddBreakFast(e => !e)
          setConfirmedPaid(false)
        }}   checked={addBreakFast} >Want  to add breakfast for ${breakFastTotal} ? </Checkbox>
      </Box>}
      <Box> 
        <Checkbox  disabled={confirmedPaid} id="confirm" onChange={()=>setConfirmedPaid(e => !e)}  checked={confirmedPaid}  >I confirm that {guests.fullName} has paid the total amount  {addBreakFast? `${formatCurrency(breakFastTotal + totalPrice)} (${formatCurrency(totalPrice)}+${formatCurrency(breakFastTotal)}) `   : formatCurrency(totalPrice)} </Checkbox>
      </Box>
     
      <ButtonGroup>
        <Button disabled={!confirmedPaid} onClick={handleCheckin}>Check in booking #{bookingId}</Button>
        <Button variation="secondary" onClick={moveBack}>
           Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
