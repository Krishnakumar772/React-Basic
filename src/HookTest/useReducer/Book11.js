import React, { useReducer } from 'react'
const initialState={
    firstCounter:0,
    secondCounter:5,
}

const reducer = (state,action) => {
    switch(action.type){
        case 'increament':
            return {...state,firstCounter:state.firstCounter+action.value}

            case 'decreament':
                return {...state,firstCounter:state.firstCounter-action.value}

                case 'increament5':
                    return  {...state, secondCounter:state.secondCounter+action.value}

                    case 'decreament5':
                        return {...state,secondCounter:state.secondCounter-action.value}


                        case 'reset':

                        return initialState

                        default:
                            return state
    }
}

function Book11() {
    const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <h1>Hello Ji this is Krishna</h1>

<h1>  firstCounter------{count.firstCounter}</h1>
<h2>  secondCounter-----{count.secondCounter}</h2>
      <button onClick={() => dispatch({type:'increament',value:1})}>Increament</button><br/>
      <button onClick={() => dispatch({type:'decreament',value:1})}>Decreament</button><br/>




      <button onClick={()  => dispatch({type:'increament5',value:5})}>Increament 5</button><br/>
      <button onClick={()  => dispatch({type:'decreament5',value:5})}>Decreament 5</button><br/>
      <button  onClick={() => dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default Book11
