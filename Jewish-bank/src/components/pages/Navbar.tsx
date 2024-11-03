import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='nav'>
         <NavLink to={"/pages"} end>Home</NavLink>
         <NavLink to={"/pages/cradit"}>Cradit</NavLink>
         <NavLink to={"/pages/transactions"}>transactions</NavLink>
         <NavLink to={"/pages/logout"}>Logout</NavLink>

    </div>
  )
}
