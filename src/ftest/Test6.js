import React, { Component } from "react";


class Test6 extends Component{
  constructor(){
    super()
    this.state={
      message:"Krama Technolgogy"
    }
  }
  

   changeMassage(){
   this.setState({
    message:"PABAY SOFTWARE"
   })
  }
  render(){
    return(
      <div>
        <h1>currently i am working in   {this.state.message} </h1>
        <button onClick={() => this.changeMassage()}>Click</button>
      </div>
    )
  }
}

export default Test6;