import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";
import FormRowVertical from "../../ui/FormRowVertical.jsx";

import { useLogin } from "./useLogin.js";

function LoginForm() {
  const [email, setEmail] = useState("ayoubfatah@gmail.com");
  const [password, setPassword] = useState("ayoubfatah");
  

  const {mutate , isLoading } = useLogin()

  function handleSubmit(e) {
    e.preventDefault()
    if(!email || !password) return
    mutate({email , password})
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
        disabled={isLoading}
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
        disabled={isLoading}
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button  size="large">{!isLoading ? "Login" : <SpinnerMini />  }</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
