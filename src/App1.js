import React from 'react';
import App2 from './BasicTest/App2';
import MethodProps from './BasicTest/MethodProps';

//when we want to pass lot of data  in the parent component we need to pass children props as a paramter
//IN The parment component we need to pass props as attribute
export default function App1(){


  return(
    <div>
      
      <App2  
      name="Anuj Tomar"
      tech="BCA"
      AGE="23"
    / >
     
       
    </div>
  )
}




