import styled from 'styled-components';
import Form from '../../ui/Form';

import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import useSettings from './useSettings';
import useEditSettings from './useEditSettings';

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;


 
function UpdateSettingsForm() {
  const {isLoading , settings ={} } = useSettings()
  const {updateSetting , isUpdating } = useEditSettings()


  
  const {id , minBookingLenght , maxBookingLenght , maxNumOfGuestsPerBooking , breakFastPrice} = settings
  
  function handleUpdate(e , name){
    console.log({[name] : e});
    updateSetting({[name] : e})
  } 

  if (isLoading) return <Spinner />
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Label  htmlFor="min-nights" >Minimum nights/booking</Label>
        <Input type='number' id='min-nights'   defaultValue={minBookingLenght}   onBlur={(e)=>handleUpdate(+e.target.value , "minBookingLenght")} disabled={isUpdating} />

      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Label htmlFor="max-nights">Maximum nights/booking</Label>
        <Input type='number' id='max-nights'  defaultValue={maxBookingLenght}  onBlur={(e)=>handleUpdate(+e.target.value , "maxBookingLenght")} disabled={isUpdating} />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <label htmlFor="max-guests">Maximum guests/booking</label>
        <Input type='number' id='max-guests'  defaultValue={maxNumOfGuestsPerBooking}  onBlur={(e)=>handleUpdate(+e.target.value , "maxNumOfGuestsPerBooking")} disabled={isUpdating} />
      </FormRow>
      <FormRow label='BreakfastPrice'>
        <label  htmlFor="breakfastPrice" >Breakfast price</label>
        <Input type='number' id='breakfastPrice'   defaultValue={breakFastPrice} onBlur={(e)=>handleUpdate(+e.target.value , "breakFastPrice")} disabled={isUpdating}  />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
