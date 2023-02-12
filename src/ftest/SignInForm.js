import React, { Component } from 'react'

 class SignInForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName:"",
         "Password":""
      }
    }

    changeUserName= (event) => {
        this.setState({
            userName:event.target.value
        })
    }

    changePassword = (event) => {
        this.setState({
            Password:event.target.value
        })
    }
    handleSubmit = () => {
        alert(`my username ${this.state.userName} and Passwprd ${this.state.Password}`)
    }
  render() {
    return (
      <div onSubmit={this.handleSubmit}>
      <h1>Sign-In-Form</h1>
      <div>
        <form>
        <div>
            <label>UserName:</label>
            <input type="text" value={this.state.userName} onChange={this.changeUserName} required />
            </div>

            <div>
                <label>Password</label>
                <input type="password" value={this.state.Password}  onChange={this.changePassword} required/>
            </div>
            <button>Sign</button>
        </form>
      </div>
      </div>
    )
  }
}

export default SignInForm