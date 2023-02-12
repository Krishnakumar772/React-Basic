import React, { Component } from 'react'
import Child from './Child'

export class MethodProps extends Component {
   //whenever we called child to parent we need to use mathod as a props
   //we pass method in the parent component  and in the p
    constructor(props) {
      super(props)
    
      this.state = {
         parent:"Currently i am working on Pabay Software"
      }
      this.myParent =this.myParent.bind(this);
    }
// we call this is method 
    myParent() {
        alert(`Hello: ${this.state.parent}`)
    }

  render() {
    return (
    <Child greetParent={this.myParent} />

    )
  }
}

export default MethodProps