import React,{useCallback, useState} from 'react'
const funCount=new Set();
function App() {
    const [count,setCount]=useState(0);
    const [num,setNum]=useState(0);


const incrementCount = useCallback(() => {
    setCount(count+1)
},[count])



const DecrementCount = useCallback(() => {
    setCount(count-1)
},[count])
   


const increamentNum = useCallback(() => {
    setNum(num+1)
},[num])
    


funCount.add(incrementCount);
funCount.add(DecrementCount);
funCount.add(increamentNum);
console.log(funCount.size)
alert(funCount.size)

  return (
    <div>
    <h1>count------------{count}</h1>
  <button onClick={incrementCount}>IncreamentCount</button>
  <button onClick={DecrementCount}>DecreamentCount</button>
  <button onClick={increamentNum}>IncreamentNum</button>

    </div>
  )
}

export default App
