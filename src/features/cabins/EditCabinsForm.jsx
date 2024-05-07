import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addCabin, editCabin } from "../../services/apiCabins";
import useEditCabin from "./useEditCabin";

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

function EditCabinsForm({ cabinDefaultValues = {} }) {

  const{register , handleSubmit , reset , getValues , formState} = useForm(
    {defaultValues: cabinDefaultValues
    }
  )
   const {errors} = formState;

   const {mutate , isEditing } = useEditCabin()

  function onSubmit(obj){
  const imageType = typeof obj.image === "string" ? obj.image : obj.image[0]
    console.log(obj);
    mutate({newCabinData:{...obj , image : imageType} , id: obj.cabinId} , {onSuccess: ()=> reset() })
  } 

function onError(){
  // console.log(error);
  toast.error("please make sure to fill the form " )
}
  return (
    <Form onSubmit={handleSubmit(onSubmit , onError)}>
      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input disabled={isEditing} type="text" id="name"   {...register("name" ,{required : "cabin's name is required"})} />
        <Error>{errors?.name?.message}</Error>
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input disabled={isEditing} type="number" id="maxCapacity"  {...register("maxCapacity" , {required : "capacity value is required" , min:{value: 1 , message: "capacity should be at least 1 "}}  )} />
         {errors?.maxCapacity?.message && <Error>{errors?.maxCapacity?.message}</Error> }

      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input disabled={isEditing} type="number" id="regularPrice"  {...register("regularPrice",{required : "the price is required" ,min:{value: 99 , message: "price should be at least 99$ "}})} />
        {errors?.regularPrice?.message &&  <Error>{errors?.regularPrice?.message}</Error>}
        
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input  disabled={isEditing} type="number" id="discount" defaultValue={0}  {...register("discount", {required: "Set a discount",
        validate: (value) => +value <= getValues().regularPrice || "Discount shouldn't be bigger than the regular price"
  })} />
        {errors?.discount?.message &&  <Error>{errors?.discount?.message}</Error> }

      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea disabled={isEditing} type="number" id="description" defaultValue=""  {...register("description", {required : "this field is required"})} />
        {errors?.description?.message &&  <Error>{errors?.description?.message}</Error> }

      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput type="file" disabled={isEditing} id="image" accept="image/*" {...register("image" )} />
        {errors?.image?.message &&  <Error>{errors?.image?.message}</Error> }

      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isEditing}>Edit cabin</Button>
      </FormRow>
    </Form>
  );
}

export default EditCabinsForm;
