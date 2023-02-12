//the useCallback hook is used when you have component in which 
//the child is rendring again add again without need
//useCallbak hook return mamoized callback function 
// callback that only change when one dependcy change
//This is useful when passing callback to optimized child component



import React, { useState ,useCallback} from 'react'
const funcount=new Set();


export default function App2() {
    const [count,setCount]=useState(0);
    const [num,setNum]=useState(0);

    const incremantCount =useCallback(() => {
        setCount(count+1)
    },[count])
    const decreamncount = useCallback(() => {
        setCount(count-1)
    },[count])

    const incremantnum= useCallback(() => {
        setNum(num+1)
    },[num])
    funcount.add(incremantCount);
    funcount.add(decreamncount);
    funcount.add(incremantnum)
    alert(funcount.size)
    
  return (
    <div>

    count   ---{count}
    <button onClick={incremantCount}>Increament</button>
    <button onClick={decreamncount}>Decreament</button>
    <button onClick={incremantnum}>Increament</button>

    </div>
  )
}
