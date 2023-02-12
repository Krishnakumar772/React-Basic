import React, { Component } from 'react'

export class TestCount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    changeCount = () => {
       // this.state.changeCount=this.state.changeCount+1
       console.log(this.state.count)
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <div>

<h1>Count {this.state.count}</h1>
<button onClick={() =>this.changeCount()}>Click</button>
      </div>
    )
  }
}

export default TestCount