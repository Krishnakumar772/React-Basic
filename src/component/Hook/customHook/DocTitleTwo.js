// imagine you have 10 differnt component update the title

import React, { useState } from 'react'
import useDoucmentTitle from './Hook/useDoucmentTitle';

function DocTitleTwo() {
    const [count,setCount]=useState(0);

   useDoucmentTitle(count);
  return (
    <div>
    <button  onClick={() => setCount(count+1)}>count-----{count}</button>
      {/* <h1>Hello ji this is krishna Kumar</h1> */}
    </div>
  )
}

export default DocTitleTwo
