import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cradit from './Cradit'
import Transactions from './Transactions'
import Navbar from './Navbar'
import Logout from '../auth/Logout'

export default function PagesRouter() {
  return (
    <div className='main'>
      <div className='left'>
        <Navbar/>
      </div>
      <div className='right'>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/cradit' element={<Cradit/>}/>
          <Route path='/transactions' element={<Transactions/>}/>
          <Route path='/logout' element={<Logout/>}/>
        </Routes>
      </div>
    </div>
  )
}
