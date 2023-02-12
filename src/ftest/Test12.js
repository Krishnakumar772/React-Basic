import React from 'react'

export default function Test12() {
    function clickHandler(){
        console.log("Hello world");
    } 
  return (
    <div>
        <h1>Hello world</h1>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}
