import React, { Component } from 'react'
// Binding in the render mathod like {this.clickHandler.bind(this)}
//arrow function in the render method
//binding the event handler in the constructor
// class property as a arrow function

 class BindEvent extends Component {
    constructor() {
      super()
    this.state = {
         message:"Hello"
      }
      this.clickEvent=this.clickEvent.bind(this)
    }
/*
    clickEvent(){
        this.setState({
            message:"Good Morning"
        })
        
       console.log(this);
    }
    */
   clickEvent = () =>{
    this.setState({
        message:"Good Evening"
    })
   }
  render() {
    return (
      <div>
      <div>{this.state.message}</div>
{/*<button onClick={this.clickEvent.bind(this)}>Click</button> */}
{/*<button onClick={() => this.clickEvent()}>Click</button>*/}
<button onClick={this.clickEvent}>Click</button>

      </div>
    )
  }
}

export default BindEvent