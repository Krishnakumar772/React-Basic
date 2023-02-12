import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const intialState={
    loading:true,
    error:'',
    post:{}
}


const reducer =(state,action) => {
    switch(action.type){
        case "FETCH_SUCCESS":
            return {
               loding:false,
               error:'',
               post:action.payload
            }

            case "Fetch_Error":
                return {
                    loading:true,
                    post:{},
                    error:"Somthing went wrong"
                }

                
    }
}



function DataFetchOne() {
    const [state,dispatch]=useReducer(reducer,intialState);


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/3")
        .then(resp => {
            dispatch({type:'FETCH_SUCCESS', payload:resp.data})
        })
        .catch(error => {
            dispatch({type:"Fetch_Error"})
        })
    })
    
  return (
    <div>
       {state.loading? "Loading":state.post.title}
                {state.error ? state.error:null}
            
    </div>
  )
}

export default DataFetchOne
