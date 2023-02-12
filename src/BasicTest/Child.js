import React, { Component } from 'react'

export class Child extends Component {
  render() {
    return (
      <div>
        <button onClick={() =>this.props.greetParent()}>Click</button>
      </div>
    )
  }
}

export default Child