import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();
    const handleLogout = ()=>{
        localStorage.removeItem("isLogin")
        navigate("/auth/register")
        
        
    };
  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )



}

