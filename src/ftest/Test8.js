import React, { Component } from 'react'

class Test8 extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         Message:"i am Krishna"
      }
    }

    clickHandler(){
        this.setState({
            Message:"Thankyou for suggest"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={() =>this.clickHandler()}>Click</button>
            </div>
        )
    }
}

export default Test8;