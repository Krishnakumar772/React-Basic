// useReducer is a hook that is used for state management
//useReducer is related to reducer function
//useReducer accept two parameter the first value intial value and second value reducer function
//useReducer(reducer,initialvalue)
//reducer(currentState,action)

// when you have more complex state 
// for example if got multiple state,multiple way th changing


// const [state ,dispatchfun]=useReducer(reducer,intialState)
// dispatchfun -> a function that can be used to dispatch new function


import React, { useReducer } from 'react'
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

function Book1() {
const [count ,dispatch]=useReducer(reducer,intialState);

  return (
    <div>
      <h1>the count function {count}</h1>
      <button onClick={() => dispatch("increament")} >Increament</button> <br />
      <button onClick={() => dispatch('decreament')}>Decreament</button> <br />
      <button onClick={()  => dispatch("reset")}>Reset</button>
    </div>
  )
}

export default Book1
