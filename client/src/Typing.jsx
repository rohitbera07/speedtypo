import React from 'react'
import Hero from './components/hero'
import Textbox from './components/Textbox'


const Typing = () => {
  return (
    <div className='w-screen h-screen'>
      <Hero/>
      <div className=' flex items-center justify-center w-screen h-4/5 p-4'>
          <Textbox/>    
      </div>
      
    </div>
  )
}

export default Typing
