import React from 'react'
import './Login.css'
import { useRef } from 'react'

const Login = () => {
  const username = useRef('');
  const password = useRef('');
  const error = useRef(null);

  const handleClick = ()=>{
    if(username.current.value === 'foo' && password.current.value === 'bar'){
      console.log('Logged in');
      error.current.style.display = 'none';
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