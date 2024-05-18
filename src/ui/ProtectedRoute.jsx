import React, { useEffect } from 'react'
import { useUser } from '../features/authentication/useUser'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const FullScreen = styled.div`
display:flex ;
justify-content:center;
align-items: center;
height:100vh;
background-color:var(--color-grey-50);

`

export default function ProtectedRoute({children}) {
  //1 load authenticated user 
  const navigate = useNavigate()
  const {user , isLoading  , isAuthenticated } = useUser()
  //3 if there is no authenticated  user redirect to log in page 
 useEffect(()=>{
     if(!isAuthenticated && !isLoading) navigate("/login")
     },[isAuthenticated])
    
    
    //2 show a spinner
    
    if(isLoading) return <FullScreen><Spinner /></FullScreen>
  //4 if there is a user render the app 
if(isAuthenticated) {

    return (
        children 
    )
}
}
