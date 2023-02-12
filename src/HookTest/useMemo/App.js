import React,{useState,useMemo} from 'react'

function App() {
    const [counterOne,setCounterOne]=useState(0);
    const [counterTwo,setCounterTwo]=useState(0);


    const handleCounterOne = () => {
        setCounterOne(counterOne+1)
    }

    const handleCounterTwo = () => {
        setCounterTwo(counterTwo+1)
    }

    
const isEven =useMemo(() => {
    let i=0;
    while(i<2000000000) i++
    return counterOne%2===0;
},[counterOne])

// //     const isEven = () => {
// //         let i=0;
// // while(i<20000000) i++

// // return counterOne%2===0
// let i=0;
//     while(i<2000000000) i++
//     return counterOne%2===0;
// //     }


  return (
    <div> 


{/* <h6>counterTwo---------{counterTwo}</h6> */}
     <button onClick={handleCounterOne}>CounterOne---{counterOne}</button>
     <h1> { isEven ?"Even":"Odd"}</h1>
   
     <button onClick={handleCounterTwo}>counterTwo----{counterTwo}</button>
    </div>
  )
}

export default App
