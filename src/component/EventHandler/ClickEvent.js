/*--------------------------------Event Handling--------------------------------------*/
// React Event name using camel case rather then lower case
// insted of single double quote we use curly bracess
//   in clickHanddler we can not use () like clickHanddler()

import React from 'react'

 const ClickEvent = () => {
  function clickHandler(){
    console.log('Hello I am React Developer');
  }
  return (
    <div>
    <h1>i am krishna Kumar</h1>
        <button onClick={clickHandler}>Click</button>
       
    </div>
  )
}
export default ClickEvent;
