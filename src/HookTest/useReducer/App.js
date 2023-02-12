import React,{useState,useReducer} from 'react'

const initialState=0;

const reducer= (count,action) => {
    switch(action){
        case "increament":
            return count+1

            case "decerament":
                return count-1

                case 'reset':
                    return initialState

                    default:
                        return count
    }
}


function App() {
const [count,dispatch]=useReducer(reducer,initialState)
    

  return (
    <div>
    count ------{count}
    <div>
      <button onClick={() => dispatch('increament')}>Increament</button>
      <button onClick={() => dispatch('decerament')}>Decreament</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
      </div>
    </div>
  )
}

export default App
