import React from 'react'
import { Test5 } from './Test5';

/*
function Test1(){
    return(
        <div>
            <h1>I am a FullStack Developer</h1>
            <Test5 name ="Anuj" />
        </div>
        
    )
}
*/




const Test1 =(props) => {
    return(
        <div>
        <h1>currently i am working in pabay software i am {props.name}</h1>
          {props.children}
        </div>
    )
}

export default Test1;
