import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
    const naviggate = useNavigate();
    const [username,setUsername]= useState<string>("")
    const [password,setPassword]= useState<string>("")

    const handleRegister = ()=>{
        if(!username || ! password) return 
        localStorage.setItem("username",username)
        localStorage.setItem("password",password)
        
        naviggate('/auth/login')

    };
  return (
    <div>
        <h1>Register</h1>
        <div className='form'>
            <input type='text' 
            value={username} 
            onChange={e =>setUsername(e.target.value)} 
            placeholder='user name'>
            </input>
            <input type='password' 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            placeholder='password'>      
            </input>
            <button onClick={handleRegister}
            disabled= {!username || !password} >Submit</button>
            <p>You have already acount? {" "}
                <Link to={"/auth/login"}>Sign in</Link>
            </p>

        </div>
    </div>
  )
}
