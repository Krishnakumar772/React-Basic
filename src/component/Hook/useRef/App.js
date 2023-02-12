
// The useRef hook allow you to prisist value between render
//it can be use to store multiple value
// it can be used to access to dom elemnt direclty


import React,{useRef,useEffect} from 'react'

function App() {
const inputRef=useRef(null)

    useEffect(() => {
   // focus of input ref
   inputRef.current.focus();

    }, [])
  return (
    <div>
      <h1>Hello ji this is krishna</h1>
      <div>
        <input ref={inputRef} type="text" />
      </div>
    </div>
  )
}

export default App
