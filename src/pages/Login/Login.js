import React, { useContext } from 'react'
import './Login.css'
import { useRef, useState } from 'react'
import { useNavigate, Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../../App'

export const Protected =()=>{
  return(
    localStorage.getItem("isAuthenticated") ? <Outlet/> : <Navigate to={'/'} />
    )
  }
  
  const Login = () => {
    const username = useRef('');
    const password = useRef('');
    const error = useRef(null);
    
    const [context, setContext] = useContext(UserContext);

    const navigate = useNavigate();



  const handleClick = ()=>{
    if(username.current.value === 'foo' && password.current.value === 'bar'){
      setContext(true);
      error.current.style.display = 'none';
      navigate('home');
    }else{
      error.current.style.display = 'block';
    }
  }

  return (
    <div className='Login'>
      <div className="username">
        <label htmlFor="Username">Username: </label>
        <input type="text" name='Username' ref={username}/>
      </div>
      <div className="password">
        <label htmlFor="Password">Password: </label>
        <input type="password" name='Password' ref={password}/>
      </div>
      <div className='submit'>
        <button onClick={handleClick}>Login!</button>
      </div>
      <div className="error" ref={error}>
        Invalid Credentials!
      </div>
    </div>
  )
}

export default Login