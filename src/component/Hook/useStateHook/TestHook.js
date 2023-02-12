import React,{useState} from 'react'

function TestHook() {
    const [name,setName]=useState('')
  return (
    <div>
      <h1>Hello Ji this is Krishna Kumar --{name}</h1>
      
      <input type="Text"  value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default TestHook
