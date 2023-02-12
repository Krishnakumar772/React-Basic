import React, { useContext } from 'react'
import { countContext } from './App'




        
function ComponentA() {
const createContext= useContext(countContext)
  return (
    <div>
      <h1>Component A  {createContext.countState}</h1>
      <button onClick={() => createContext.countDispatch("increament")} >Increament</button> 
      <button onClick={() => createContext.countDispatch('decreament')}>Decreament</button> 
      <button onClick={()  => createContext.countDispatch("reset")}>Reset</button> 
    </div>
  )
}

export default ComponentA
