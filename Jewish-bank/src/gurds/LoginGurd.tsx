import React from 'react'
import { Navigate } from 'react-router-dom'

export default function LoginGurd({Children}:any) {
    const isLogin = localStorage.getItem("isLogin")
    if(isLogin){ 
        console.log("⛔");
        return <Navigate to="/"/>
    }
    return Children
 
}

