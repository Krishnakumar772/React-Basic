import React from 'react'
import App1 from './App1'


// context provide a way to pass data through the component tree without having 
//to pass props down  manualy at every lavel

// say supose we have app component which is root component and another 
//compoent we have a child component a,b,c,d,e,f
//b nested d
//c nested e nested f
// we want to pass data a and d and f


// we have three step in context api
// we need to create context api
// we need to provide the value 
// we need consume the value
export const userContext=React.createContext();
export const channelContext=React.createContext();

function App() {
  return (
  <div>
  <channelContext.Provider value="this is krishna">
     

    <userContext.Provider value={"This is Arun"}>
      <App1 />
      </userContext.Provider>
      </channelContext.Provider>
    </div>
  )
}

export default App
