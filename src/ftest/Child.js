import React from 'react'

export default function Child(props) {
  return (
    <div>
     <h1>Hello this is Krishna</h1>
        <button onClick={() => props.greetHandler("Anuj")}>Click</button>
    </div>
  )
}
