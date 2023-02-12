


//the useeffect hook allow to side effect in your component

// we can use fatching data from api directily updated the dom and set timer
//useEffect runs on every render when want click button first is render and second is trigger 
// and then second is render third is trigger

// if we want to runs only first paramter, we can use an empty array in second paramerter

// import React, { Component } from 'react'

// export class UseEff extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        count:0
//     }
//   }

//    incrementcount = () => {
// this.setState({
//   count:this.state.count+1
// })
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello ji this is krishna</h1>
//         <h2>the count value is {this.state.count}</h2>
//         <button onClick={() =>this.incrementcount()}>Click</button>
//       </div>
//     )
//   }
// }

// export default UseEff


// i want to add timer

// import React, { useEffect, useState } from 'react'

// export default function UseEff() {

//   const [count,setCount]=useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count+1)
//     }, 1000)
//   },[]);

//   return (
//     <div>
//     <h1>Heloo ji i want to add timer {count}</h1>
//       <h1>Hello ji this</h1>
//     </div>
//   )
// }

/************************Third Example *********************************************/

// import React,{useState,useEffect} from 'react'

// export default function UseEff() {
//   const [count,setCount]=useState(0);
//   const [calculation,setCalcultion]=useState(0);

//   useEffect(() => {
//     setCalcultion(() =>count*2)
//   },[count])

//   return (
//     <div>
//     <h1>this is first render{count}</h1>
//      <h1>Hello ji this is krishna</h1>
//      <button onClick={() => setCount(count+1)}>Click</button>
//      <h2>this is second render{calculation}</h2>
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react'

export default function UseEff() {
  const [count,setCount]=useState(0);

  useEffect(() =>{
    let timer=setTimeout(() => {
      setCount((count)=> count+1)
    },100)
  return () => clearTimeout(timer)
  },[])
  return (
    <div>

      <h1>Hello ji this ji krishna {count}</h1>

    </div>
  )
}
