// when we want to click on button ui is slow updateing
// useMemo is a hook that will only recompute the cache value




        // useMemo

        // useMemo Hook rerurn memoized value
        // useMemo will only recompute the memoized value when dependecy is change
        // useMemo hook can be use optimazation performace
        // when applicaion has load may be 100000 and 200000 
      //   const MemoizedValue=useMemo(() =>compute(a,b) [a,b])
       // callBack caches the provided  instance itself wheras useMemo invokes the provided function caches its result

import React, { useMemo, useState } from 'react'

function App3() {
    const [counterOne,setCounterOne]=useState(0);
    const [counterTwo,setCounterTwo]=useState(0);


    const incremantOne = () => {
        setCounterOne(counterOne+1);
    }

    const incremantTwo = () => {
        setCounterTwo(counterTwo+1)
    }
    const isEven =useMemo(() => {
    let i=0;
    while(i<2000000000) i++
    return counterOne%2===0;

}, [counterOne])

   
  return (
    <div style={{textAlign:"center"}}>
      {/* <h1>Hello ji this is Krishna</h1> */}
      <div>
      <button onClick={incremantOne}>IncreamentOne---{counterOne}</button>
      <span>{isEven ? "Even":"Odd"}</span>
      </div>

      <div>
        <button onClick={incremantTwo}>IncreamentTwo ---{counterTwo}</button>
      </div>
    </div>
  )
}

export default App3
