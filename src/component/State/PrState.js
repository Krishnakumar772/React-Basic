/*---------------------props and state----------------------------------*/
/*--------props-----------*/                  /*-------state----------------*/
// props get pass to the component           // state is manged within the component 
//Function Parameter                         //Varibles declared in the function body
//props are immutable                        //state can be changed
//props-Functional Componet                  //useState Hook - Functiional Component                  //this.state- Class Componenet
//this.props-class Component
// in functional component props               // state can be access using usesatate hook as functional component
// can be access as parameter


// Strict mode is a tool for hightlighting  potinal problem in an application


import React, { Component } from 'react'

export default class PrState extends Component {
  constructor(){
    super()
    this.state={
      message:"Welcome London"
    }
  }

  changeMessage(){
    this.setState({
      message:"Welcome to React"
    })
  }
  render() {
    return (
      <div>
      <div>{this.state.message}</div>
      <button onClick={() => this.changeMessage()}>Click</button>
      </div>
    )
  }
}
