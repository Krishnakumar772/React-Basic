import React, { useContext } from 'react'
import { countContext } from './App'





function ComponentF() {
const createContext= useContext(countContext)
  return (
    <div>
      <h1>Component F  {createContext.countState}</h1>
      <button onClick={() => createContext.countDispatch("increament")} >Increament</button> 
      <button onClick={() => createContext.countDispatch('decreament')}>Decreament</button> 
      <button onClick={()  => createContext.countDispatch("reset")}>Reset</button> 
    </div>
  )
}

export default ComponentF