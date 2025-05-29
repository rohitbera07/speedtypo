import React from 'react'
import LogoutButton from './LogoutButon'
import { useAuth0 } from '@auth0/auth0-react'
const Hero = () => {
   const { isAuthenticated } = useAuth0();
  return (
    <div>
      <div className='bg-slate-300 text-blue-950  antialiased text-2xl p-5 w-screen h-full font-bold'>
      SpeedTypo
    </div>
    <div>
     {
       isAuthenticated ? (<LogoutButton/>):(<span></span>)
      } 
    </div>
   
    </div>
  )
}

export default Hero
