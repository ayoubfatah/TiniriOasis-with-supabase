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

`

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user, isLoading, isAuthenticated } = useUser();
  
  useEffect(() => {
      if (!isAuthenticated && !isLoading) {
          navigate("/login");
      }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
      return <FullScreen><Spinner /></FullScreen>; 
  }

  if (isAuthenticated) {
      return children;
  }

}