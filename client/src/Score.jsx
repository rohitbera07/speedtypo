import React from 'react'
import Hero from './components/hero'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Chart from './components/Chart';
const Score = () => {

  const location = useLocation();
const { wpm, accuracy, totalTyped } = location.state || {};
  return (
    <div className=' w-screen h-screen'>
    <Hero/>
     <div className='font-mono w-screen h-5/6 flex justify-center flex-wrap'>
     <div className='w-5/6 m-6 h-2/6  bg-white flex gap-4 text-2xl justify-evenly items-center flex-wrap'>
     <p>WPM: {wpm}</p>
    <p>Accuracy: {accuracy} %</p>
    <p>Characters: {totalTyped}</p></div>
     <div className='w-5/6 m-5 h-3/6 bg-white flex justify-center items-center'><Chart/></div>
     </div>
     <Link to={"/typing"}><button className='bg-green-600 text-yellow-50 w-20 h-8 rounded absolute md:top-4 sm:bottom-4 right-6 shadow-md'>Try again</button></Link>
    </div>
  )
}

export default Score
