import React, { Component } from 'react'
import ChildMethod from './ChildMethod'

 class MethodasPro extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         ParentName:"Parent"
      }
      this.greetParent=this.greetParent.bind(this);
    }

    greetParent(childName){
        alert(`Hello ${this.state.ParentName} from ${childName}`);
    }
  render() {
    return (
      <div >
      <ChildMethod greetHandler={this.greetParent} />
      </div>

     
    )
  }
}

export default MethodasPro