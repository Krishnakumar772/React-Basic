import React, { Component } from 'react'

export class Test13 extends Component {
   clickHandler(){
        console.log('Hello wolrd');
    }
  render() {
  
    return (
      <div>
        <h1>I am all Time Happy </h1>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default Test13