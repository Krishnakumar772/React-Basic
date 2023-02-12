// the  Effect Hook let you perform side effect in functional components
//it is a close repalcemnt for componentDidMount compoentDidUpdate and componentWillUnmount


import React, { useState,useEffect } from 'react'

export default function App() {

    const [count,setCount]=useState(0);
    const [name,setName]=useState('');


    useEffect(() => {
        document.title=`you have cllickes ${count}`
        console.log(' useEffect Hook: updated document title')
    },[count])
  return (
    <div>
        <h1> this is Krishna  -----{count}</h1>
        <input 
        type="text"
        value={name} 
        onChange={(e) => setName(e.target.value)}

        />

        <button onClick={() => setCount(count+1)}>Click</button>
        
    </div>
  )
}
