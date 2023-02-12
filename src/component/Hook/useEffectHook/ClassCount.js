import React, { Component } from 'react'

export class ClassCount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:''
      }
    }
   

    componentDidMount() {
        document.title=`you have cliked ${this.state.count+1} times`
    }


    componentDidUpdate(prevProps,prevState) {
        if(prevState.count !== this.state.count){
            console.log('updated Document Title')
            document.title=`Clicked ${this.state.count} times`
        }
        
    }
  render() {
    return (
      <div>
        <h1>Hello ji this is mohit Kumar {this.state.count}</h1>
        <input  type="text" 
         value={this.state.name} 
         onChange={(e) => this.setState({name:e.target.value})} /> 
        <button onClick={() => this.setState({count:this.state.count+1})}>Click</button>
      </div>
    )
  }
}

export default ClassCount