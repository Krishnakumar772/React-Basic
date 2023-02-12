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
const intialState = {
firstCounter:0,
secondCounter:10,
}

const reducer =(state,action) => {
  switch(action.type){
    case "increament":
        return {...state ,firstCounter:state.firstCounter+action.value}

       case 'decreament':
        return {...state,firstCounter:state.firstCounter-action.value}

        case "increament2":
            return {...state,secondCounter:state.secondCounter+action.value}
    
           case 'decreament2':
            return {...state,  secondCounter:state.secondCounter-action.value}
    

        case 'reset':
       return intialState

       default:
        return state

  }
}

function Book2() {
const [count ,dispatch]=useReducer(reducer,intialState);

  return (
    <div>
      <h1>the count function {count.firstCounter}</h1>
      <h2>the second counter {count.secondCounter}</h2>
      <button onClick={() => dispatch({type:"increament",value:1})} >Increament</button> <br />
      <button onClick={() => dispatch({type:'decreament',value:1})}>Decreament</button> <br />

      
      <button onClick={() => dispatch({type:"increament2",value:5})} >Increament-5</button> <br />
      <button onClick={() => dispatch({type:'decreament2',value:5})}>Decreament-5</button> <br />
      <button onClick={()  => dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default Book2;