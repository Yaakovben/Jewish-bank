import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const naviggate = useNavigate();
    const [username,setUsername]= useState<string>("")
    const [password,setPassword]= useState<string>("")
    

    const handleLogin = ()=>{
        if(username &&  password && localStorage.getItem("username")=== username &&
         localStorage.getItem("password")=== password
        ) {
            localStorage.setItem("isLogin","true")
            naviggate('/pages')
        }
        else{
            alert("Please provide and matchin user name and password")
        }
    };




  return (
    <div>
        <h1>Login</h1>
        <div className='form'>
            <input type='text' placeholder='user name'
             value={username} 
             onChange={e =>setUsername(e.target.value)} >
             </input>
            <input type='password' placeholder='password'
             value={password} 
             onChange={e => setPassword(e.target.value)} ></input>
            <button onClick={handleLogin}>Submit</button>
            <p>Don't have acount yet ? {" "}
                <Link to={"/auth/register"}>Create acount</Link>
            </p>

        </div>

    </div>
  )
}
