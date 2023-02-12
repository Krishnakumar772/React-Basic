// in the parent component create a call back function this call back function will retrive the data from the child component
//pass the call back function to the child as a props from the parent component 


import React, { Component } from 'react'
import Child from './Child'

 class ChildToParent extends Component {
    constructor() {
      super()
    
      this.state = {
         name:""
      }
    }
    handleClick= (childData) => {
        this.setState({
           name:childData 
        })
    }
  render() {
   // const {name}=this.state;
    return (
      <div>
      <Child childHandleClick={this.handleClick}/>
      {this.state.name}
      </div>
    )
  }
}

export default ChildToParent