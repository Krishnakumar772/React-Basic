import React, { Component } from 'react'

export class SignUpForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         FirstName:"",
         LastName:'',
         Email:"",
         Password:''
      }
    }

    changeFirstNameHandler = (event) => {
        this.setState({
            FirstName:event.target.value
        })
    }

    changeLastNameHandler = event => {
        this.setState({
            LastName:event.target.value
        })
    }


    changeEmailHandler = event => {
        this.setState({
            Email:event.target.value
        })
    }
    changePasswordHandler = event => {
        this.setState({
            Password:event.target.value
        })
    }
    
    ChangeConfirmPasswordHandler = event => {
        this.setState({
            ConfirmPassword:event.target.value
        })
    }

    handleSubmit = event => {
        alert(` FirstName:${this.state.FirstName} and LastName:${this.state.LastName} and Email: ${this.state.Email} and Password: ${this.state.Password} and ConfirmPassword: like ${this.state.ConfirmPassword}`)
        event.preventDefault();
    }


  render() {
    return (
      <div>
      <h1>SignUpForm</h1>
      <form onSubmit={this.handleSubmit}>
      <div>
        <label>FirstName:</label>
        <input type="text" 
        value={this.state.FirstName}
         onChange={this.changeFirstNameHandler} 
         placeholder="Your FirstName" required />
         
      </div>

      <div>
        <label>LastName:</label>
        <input type="text" 
        value={this.state.LastName}
         onChange={this.changeLastNameHandler} 
         placeholder="Your LastName"  required/>
      </div>
   <div>
    <label>Email:</label>
    <input type="email"  
    value={this.state.Email} 
    onChange={this.changeEmailHandler}
    placeholder="Enter your Email"
    required
     />
   </div>
   <div>
    <label> Password</label>
    <input type="password"
     placeholder='Enter your Password' 
    value={this.state.Password}
    onChange={this.changePasswordHandler}
    required/>
<div>
    <label>Confirm Password</label>
    <input type="password" 
        placeholder='Enter Your Password'
        value={this.state.ConfirmPassword}
        onChange={this.ChangeConfirmPasswordHandler}
    />
</div>
<div>
    <input  type="checkbox" /><label>I agree of the term of Use</label>
</div>
<button>Click</button>
   </div>
      </form>

      </div>
    )
  }
}

export default SignUpForm