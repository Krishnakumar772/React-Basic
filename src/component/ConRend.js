//condition rendering is same way as a jacascript condition
// if lese
//Element variable
//Tenary Condition Opt
//Short circuit Opt

import React, { Component } from 'react'

export class ConRend extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {
    //short circuit opt
    return this.state.isLoggedIn && <div>Welcome Rajat</div>
   // return this.state.isLoggedIn ?<div>Welcome Krishna</div> :<div>Welcome Rohit</div>
    /*
    let message

if(this.state.isLoggedIn){
  message=<h1>Welcome Krishna</h1>
}else{
  message=<h1>Welcome Robin Sir</h1>
}
return(<div>
  {message}
</div>)
  /*
    if(this.state.isLoggedIn){
        return(<div>welcome Krishna</div>)
    }else{
        return(<div>Welcome Sir</div>)
    }*/
  /*
    return (
      <div>
        <h1>welcome Krishna</h1>
        <h1>welcome Sir</h1>
      </div>
    )
    */
   
  }
}

export default ConRend