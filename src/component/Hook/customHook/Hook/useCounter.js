import { useState } from "react";



function useCounter(initialcount=0,value) {
    const [count,setCount]=useState(initialcount);

    const increamnetCount=() => {
        setCount(prevState =>prevState+value)
    }
    
    const decreamentCount = ()  => {
        setCount(prevState =>prevState-value)
    }
    
    const reset = () => {
        setCount(0);
    }
    return [count,increamnetCount,decreamentCount,reset]
}

export default useCounter
