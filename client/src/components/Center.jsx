import React from 'react'
import { Link } from 'react-router-dom'
import LoginButton from './LoginButton'
const Center = () => {
  return (
    <div className='bg-white w-screen h-5/6 flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-mono font-bold'>Your Typing Partner</h1>
         <div className='font-mono text-xl text-center m-3'>How fast you can type? Improve your typing speed with <span className='text-blue-500 font-semibold'>SpeedTypo</span>.</div>
      <LoginButton/>
    </div>
  )
}

export default Center
