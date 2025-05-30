import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from '../api/axiosInstance';
import { useAuth0 } from '@auth0/auth0-react';
 const paragraphs = [
  "the quick brown fox jumps over the lazy dog every single morning before sunrise. it’s become a daily ritual, admired by the nearby animals, who watch in awe as the fox displays such energy and grace.",
  
  "a gentle breeze rustled through the tall pine trees, carrying the scent of fresh earth and wildflowers. birds chirped cheerfully overhead, while a deer cautiously stepped into the clearing, its ears twitching at every sound in the peaceful forest.",
  
  "the engineer adjusted the circuit board, watching tiny leds blink in response. lines of code streamed across the screen, each command triggering precise actions. in this quiet lab, innovation sparked with every keystroke, bringing the prototype closer to reality.",
  
  "success doesn’t come overnight. it grows with each effort, each failure, and every lesson learned. small steps taken daily lead to big changes over time. stay consistent, stay focused, and believe in the process—even when the results seem distant."
];


const Textbox = () => {
  const [paragraph,setParagraph] = useState('')
  const [userInput, setUserInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [hasStarted, setHasStarted] = useState(false);
  const [testEnded, setTestEnded] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth0();
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    setParagraph(paragraphs[randomIndex]);
  }, [])
  useEffect(() => {
  if (timeLeft === 0) {
    const totalTyped = userInput.length;
    const correctChars = paragraph.split("").filter((char, i) => char === userInput[i]).length;
    const accuracy = totalTyped === 0 ? 0 : Math.round((correctChars / totalTyped) * 100);
    const words = userInput.trim().split(/\s+/).length;
    const timeTaken = 30;
    const wpm = (Math.round((words / timeTaken) * 30))*2;

    const sendScoreToBackend = async () => {
      try {
        await axios.post('http://localhost:5000/scores', {
          userId: user.name,
          wpm: wpm, 
          accuracy: accuracy
        }, {
  withCredentials: true});
        console.log("Score saved!");

        // Navigate after saving
        navigate('/score', {
          state: {
            wpm,
            accuracy,
           totalTyped
          }
        });

      } catch (error) {
        console.error("Failed to save score:", error);
      }
    };

    sendScoreToBackend(); 

  }
}, [timeLeft]); 

const handleReset = ()=>{
    setUserInput("");
    setTimeLeft(30);
    setHasStarted(false);
    setTestEnded(false);
  }
const handleChange = (e) => {
    if(!hasStarted)
    {
      setHasStarted(true);
    }
    setUserInput(e.target.value);
  };
   useEffect(()=>{
    if(hasStarted && timeLeft > 0){
      const interval = setInterval(()=>{
      setTimeLeft(timeLeft=>timeLeft-1)
    },1000);
     return ()=> clearInterval(interval); 
    }
    if(timeLeft === 0 && !testEnded) {
      setTestEnded(true);
    }
   },[hasStarted,timeLeft])
  return (
    <div className='flex flex-col'>
      <div className="relative w-fit p-4">
      {/* Paragraph Display */}
      <div className="md:text-2xl sm:text-lg font-mono">
        {paragraph.split("").map((char, index) => {
          const typedChar = userInput[index];
          let color = "text-gray-400"; // default faded

          if (typedChar !== undefined) {
            color = typedChar === char ? "text-black" : "text-red-500";
          }
           const isCursor = index === userInput.length;
          return (
            <span key={index} className={`${color} ${isCursor ? "border-b-2 border-blue-500 animate-pulse" : ""}`}>
              {char}
            </span>
          );
        })}
      </div>

      {/* Hidden Input to capture typing */}
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        autoFocus
        disabled={timeLeft === 0}
        className="absolute top-0 left-0 opacity-0 w-full h-full"
      />
    </div>
    <div className='list-none flex justify-around items-center m-5'>
      <li>Time Left : {timeLeft}</li>
      <li><button onClick={handleReset} className='m-4 bg-green-400 h-9 w-24 rounded'>Try Again</button></li>
    </div>
    </div>
  );
    }
  

export default Textbox
