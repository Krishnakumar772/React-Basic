import React, { Component } from 'react'

class ClassEvent extends Component {
    clickHandler(){
        console.log("this is Krishna");
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassEvent