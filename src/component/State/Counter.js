/*---------------------------------------setState----------------------------------------------*/
// when we want state update dirctly ui is not re render
// it wont rerender
// always make use of setState and never modified the state directly
// code has to excute after the state has been updated
// when you have to updated state based on the privious value, 
// pass in a function as an argument instead of reguler object


import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    changeState(){
       // this.state.count=this.state.count+1
      /* this.setState({
        count:this.state.count+1
       },() =>{
        console.log("callback value", this.state.count)
       })
        console.log(this.state.count);
    }
    setstate is a asysyncrous
    */
   this.setState((prevState) =>({
count:prevState.count+1
   }))
  }
    changeState5(){
      this.changeState();
      this.changeState();
      this.changeState();
      this.changeState();
      this.changeState();
    }
  render() {
    return (
        <div>
      <div>Hello This is Krishna {this.state.count}</div>
      <button onClick={() => this.changeState5()}>Click</button>
      </div>
    )
  }
}

export default Counter