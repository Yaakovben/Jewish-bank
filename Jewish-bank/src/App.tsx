import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import Home from './components/pages/Home'
import AuthRouter from './components/auth/AuthRouter'
import PagesRouter from './components/pages/PagesRouter'
import LoginGurd from './gurds/LoginGurd'

export default function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/auth/*' element={<AuthRouter/>}/>

        <Route path='/pages/*' element={
       
          <PagesRouter/>
         
          }/>

      </Routes>
    </div>
  )
}
