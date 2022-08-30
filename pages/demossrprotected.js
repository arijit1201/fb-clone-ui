import React from 'react'
import { useSession, getSession } from "next-auth/react"
import Login from '../components/Login'
const demo = () => {
    
   const {data:session, status} = useSession(); 
   if(!session) return <Login />
  
  return (
    <div>Hello World</div>
  )
}

export default demo
