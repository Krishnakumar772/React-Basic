import React, { useState } from 'react'
import useCounter from './Hook/useCounter'

function CounterOne() {
   const [count,increamnetCount,decreamentCount,reset]=useCounter(0,1)
  return (
    <div>
      <h1>count------{count}</h1>
      <button onClick={increamnetCount}>Inreament</button>
      <button onClick={decreamentCount}>Decreament</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterOne
