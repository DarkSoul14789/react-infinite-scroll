import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../App';

const ProtectedRoute = () => {
  const [context, setContext] = useContext(UserContext);
  
  const useAuth = () => {
    const user = { loggedIn: context };
    return user && user.loggedIn;
  }
  const isAuth = useAuth();
  return (
    isAuth ? <Outlet/> : <Navigate to='/' />
  )
}

export default ProtectedRoute