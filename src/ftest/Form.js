import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         Comment:"",
         topic:""
      }
    }
    changeUserName = (event) => {
        this.setState({
            username:event.target.value
        })
    }

changeComment = (event) => {
   this.setState({
    Comment:event.target.value
   }) 
}
changeTopic = (event) => {
  this.setState({
    topic:event.target.value
  })
}
handleSubmit = (event) => {
  alert(`${this.state.username} and ${this.state.Comment} and ${this.state.topic}`);
  event.preventDefault();
}


  render() {
    return (
      <div>
        <h1>React Form</h1>
        <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input type="text" value={this.state.username} onChange={this.changeUserName}/>
        </div>
        <div>
            <label>Comment</label>
            <textarea  value={this.state.Comment} onChange={this.changeComment}/>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.changeTopic}>
           <option value="react">React</option>
           <option value="vue">Vue</option>
           <option value="anguler">Anguler</option>
          </select>
        </div>
        <button>Click</button>
        </form>
      </div>
    )
  }
}

export default Form