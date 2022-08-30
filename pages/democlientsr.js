import React from 'react'
import { useSession, getSession } from "next-auth/react"
import Login from '../components/Login'
const demo = ({session}) => {
    
    
   if(!session) return <Login />
  
  return (
    <div>Hello World</div>
  )
}

export default demo

export async function getServerSideProps(context){
    const session = await getSession(context);
    return {
      props: {session}
    }
  
  }