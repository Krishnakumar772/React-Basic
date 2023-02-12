import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);


const logMousePosition = (e) => {
    console.log('mouse Event');
    setX(e.clientX);
    setY(e.clientY);
}


    useEffect(() => {
        console.log('Mouse Event');
        window.addEventListener('mousemove' , logMousePosition)
    },[])
  return (
    <div>
      <h1>Hello ji this is krishna</h1>

      Hooks --x {x}  ---Y {y}
    </div>
  )
}

export default HookMouse
