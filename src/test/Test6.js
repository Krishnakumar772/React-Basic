import React, { Component } from 'react'

export class Test6 extends Component {
    constructor(){
        super()
        this.state={
            message:"Krishna"
        }
    }
    chnageMessage = () =>{
        this.setState({
            message:"This is Rohit"
        })
    }
  render() {
    return (
      <div>
        <h1>Hello{this.state.message} </h1>
        <button onClick={() =>this.chnageMessage()}>Click</button>
      </div>
    )
  }
}

export default Test6