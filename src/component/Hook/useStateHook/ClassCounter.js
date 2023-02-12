import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

     countHandler = () => {
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <div>
        <h1>Hello ji this is krishnns</h1>
        <button onClick={ this.countHandler}>Click  ---{this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounter