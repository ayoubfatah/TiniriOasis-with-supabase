import { useState } from "react";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUser } from "./useUser";
import { useUpdateUserData } from "./useUpdateUserData";

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {user} = useUser();

  const {email , user_metadata: { fullName: currentFullName } }= user ?? {}

  const {updateUser , isUpdating} = useUpdateUserData()

  const [fullName, setFullName] = useState(currentFullName)
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if(!fullName) return 
    updateUser({fullName,avatar},{
      onSuccess:()=>{
        setAvatar(null)
        e.target.reset(); //e.target is the form and reset will rest the values of it 
      }})
  }
  function handelCancel() {
   setFullName(currentFullName)
   setAvatar(null)

  }


  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
        />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput

         disabled={isUpdating}
          id="avatar"
          accept="image/*"
          onChange={(e) => 
            {
              console.log(event.target.files[0]);
              setAvatar(e.target.files[0])}}
        />
      </FormRow>
      <FormRow>
        <Button onClick={handelCancel} disabled={isUpdating}  type="reset" variation="secondary">
          Cancel
        </Button>
        <Button>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
