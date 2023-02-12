import React, { useState } from 'react'
// useState with previous state
function HookCounterOne() {
    const initialValue=0;

    const [count,setCount]=useState(0);

    const increamentFive = () => {
        for(let i=0;i<5;i++)
        setCount(prevCount =>prevCount+1)
    }
  return (
    <div>
      <h1>Hello Ji This is Krishna ------{count}</h1>
      <button  onClick={() => setCount(count+1)}>Increament</button>
      <button onClick={() => setCount(count-1)}>Decreament</button>
      <button onClick={() => setCount(initialValue)}>Reset </button>
      <button onClick={increamentFive}>Increament Five</button>
    </div>
  )
}

export default HookCounterOne
