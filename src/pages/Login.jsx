import styled from "styled-components";
import LoginForm from  "../features/authentication/LoginForm"
import Heading from "../ui/Heading"
const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;


function Login() {
  return <LoginLayout>
    <Heading as="h1"  direction="center">Tiniri Oasis</Heading>
    <Heading as="h3" direction="center" >Log in to your account </Heading>
    <LoginForm></LoginForm>
  </LoginLayout>;
}

export default Login;
