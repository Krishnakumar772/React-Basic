import React, { useReducer } from 'react'
import ComponentA from './ComponentA.js';
import ComponentB from './ComponentB.js';
import ComponentC from './ComponentC.js';


const intialState=0;

const reducer =(state,action) => {
  switch(action){
    case "increament":
        return state+1

       case 'decreament':
        return state-1

        case 'reset':
       return intialState

       default:
        return state

  }
}

export const countContext = React.createContext(); 


export default function App() {

  const [count,dispatch]=useReducer(reducer,intialState)
  return (
    <countContext.Provider value={{countState:count, countDispatch:dispatch}}>
    <div className='app'>
<h1>count -----{count}</h1>
<ComponentA />
<ComponentB />
<ComponentC />
    </div>
    </countContext.Provider>
  )
 
}
