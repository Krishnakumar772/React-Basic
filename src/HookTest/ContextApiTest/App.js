import React from 'react'
import ComponentA from './ComponentA'


  
 export const userContext= React.createContext();
  export const channelContext=React.createContext();

function App() {
  return (
    <div>
    <channelContext.Provider value={"Hello ji this is ishant Khan"}>
    <userContext.Provider value="namste ji m delhi se hu">
      <h1>Hello ji this is Krish</h1>
      <ComponentA />
      </userContext.Provider>
      </channelContext.Provider>
    </div>
  )
}

export default App
