import React, { useState } from 'react'


// only call hook at the top lavel
//Don`t call Hooks inside loops condition, or nested function
// only Call Hook from React Function
//The useState Hook return an array with two elemnt
//the first elemnt is the current value of the state
// the second value function to update the state 


function HookCounter() {
    const [count,setCount]=useState(0);

    return (
    <div>
      <h1>Hello London</h1>
      <button  onClick={() => setCount(count+1)}>Click----{count}</button>
    </div>
  )
}

export default HookCounter
