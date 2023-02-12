import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parent:"Krishna"
      }
    //  this.greetParent=this.greetParent.bind(this);
    }

    greetParent =(child) =>{
        alert(`Hello ${this.state.parent} and ${child}`);
    }
  render() {
    return (
      <div>
<Child  greetHandler={this.greetParent}/>

      </div>
    )
  }
}

export default Parent