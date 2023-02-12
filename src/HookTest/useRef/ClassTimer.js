import React, { Component } from 'react'

export class ClassTimer extends Component {
    interval
    constructor(props) {
      super(props)
    
      this.state = {
         timer:0
      }
    }


    componentDidMount(){
        this.interval=setInterval(() => {
            this.setState(
                prevState=> ({timer:prevState.timer+1})
            )
        })
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
  render() {
    return (
        <>
        <h1>Class Timer-----------{this.state.timer}</h1>
        <button onClick={() =>clearInterval(this.interval)}>Click</button>
      <div>ClassTimer</div>

</>
    )
  }
}

export default ClassTimer