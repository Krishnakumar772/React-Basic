import React, { Component } from 'react'

export class About extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  handleSubmit = () => {
    this.setState({
  count:this.state.count+1
    })
  }
  render() {
    return (
      <div>
      <h1>Hello World{this.state.count}</h1>
      <button onClick={() =>this.handleSubmit()}>Click</button>
      </div>
    )
  }
}

export default About