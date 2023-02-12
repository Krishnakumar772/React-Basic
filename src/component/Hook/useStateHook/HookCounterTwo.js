import React, { useState } from 'react'
// useState does not automaticaly merge and update the object
export default function HookCounterTwo() {
    const [name,setName]=useState({firstName:'',lastName:""})
  return (
    <div>
    <h1>firstName------------------{name.firstName}   </h1>
    <h2>lastName------------------{name.lastName}   </h2>
    <input type="text" 
     value={name.firstName}
     onChange={(e) => setName({...name,firstName:e.target.value})}
      />


     <input type="text" 
     value={name.lastName}
     onChange={(e) => setName({...name,lastName:e.target.value})}
      />

      <h2>{JSON.stringify(name)}</h2>
  
    </div>
  )
}
