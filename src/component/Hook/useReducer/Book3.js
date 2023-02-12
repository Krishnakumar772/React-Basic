// when we want to add multiple reducer


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

function Book3() {
const [count ,dispatch]=useReducer(reducer,intialState);
 const [counttwo,dispatchtwo] =useReducer(reducer,intialState)
  return (
    <>
    <div>
      <h1>the count function {count}</h1>
      <button onClick={() => dispatch("increament")} >Increament</button> 
      <button onClick={() => dispatch('decreament')}>Decreament</button> 
      <button onClick={()  => dispatch("reset")}>Reset</button>
    </div>
    

    <div>
      <h2>the counttwo function {counttwo}</h2>
      <button onClick={() => dispatchtwo("increament")} >Increament</button> 
      <button onClick={() => dispatchtwo('decreament')}>Decreament</button> 
      <button onClick={()  => dispatchtwo("reset")}>Reset</button>
    </div>


</>
    
  )
}

export default Book3
