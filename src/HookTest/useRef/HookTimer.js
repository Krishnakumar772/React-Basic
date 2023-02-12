import React, { useState,useEffect,useRef } from 'react'

function HookTimer() {
const [timer,setTimer]=useState(0);

const inputRef=useRef(null)
 

useEffect(() => {
   inputRef.current=setInterval(() =>{
        setTimer(prevTimer => prevTimer+1)
    },1000)

    return () => {
        clearInterval(inputRef.current);
    }

},[])

  return (
    <div>
    <h1>interval---------------------{timer}</h1>
      <h1>Hello Ji this is Kri</h1>
      <button onClick={() =>clearInterval(inputRef.current) }>Click</button>
    </div>
  )
}

export default HookTimer
