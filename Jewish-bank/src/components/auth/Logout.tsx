import React from 'react'

export default function Logout() {
    const handleLogout = ()=>{
        localStorage.removeItem("IsLogin")
    };
  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )

}

