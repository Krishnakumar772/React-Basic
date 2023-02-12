import React, { Component } from 'react'

export class Test7 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
              count:0
      }
    }

     increamentCount(){
this.setState({
    count:this.state.count+1
})
    }
  render() {
    return (
      <div>
      {this.state.count}
        <h1>currently i am working in PABAY software</h1>
        <button onClick={() =>this.increamentCount()} >Click</button>
      </div>
    )
  }
}

export default Test7