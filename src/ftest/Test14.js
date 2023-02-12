import React, { Component } from 'react'

 class Test14 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello world"
      }
      // this.clickHandler=this.clickHandler.bind(this);
    }
    /*
    clickHandler(){
        this.setState({
            message:"Good Night"
        })
    }
    */
   clickHandler = () => {
    this.setState({
        message:"Everthing is fine"
    })
   }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/*<button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/*<button onClick={() =>this.clickHandler()}>Click</button>  */}
        <button onClick={() =>this.clickHandler()}>Click</button>
      </div>
    )
  }
}

export default Test14