import React,{useEffect,useRef} from 'react'

function InputRef() {
    const inputRef=useRef(null)

    useEffect(() => {
        inputRef.current.focus();
    },[])
  return (
    <div>
    <input type="text" ref={inputRef} />
      <h1>Hello ji this is Rajat Sharma</h1>
    </div>
  )
}

export default InputRef
