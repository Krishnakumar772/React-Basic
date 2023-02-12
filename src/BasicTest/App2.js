import React from 'react'

function App2(props) {
  // in The Child comonent we need to pass props or anyhing as a paramemter
  // and can be access as a child component
  const {name,tech,AGE}=props 
  return (
    <div>
    
<h1>Hello my name is {name} and my tech {tech} and the age {AGE}</h1>
    </div>
  )
}

export default App2
