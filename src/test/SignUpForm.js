import React, { Component } from 'react'

export class SignUpForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         FirstName:'',
         Email:"",
         Age:"",
         Password:"",
         ConfirmPassword:""
      }
    }

    handleFristName = event => {
  this.setState({
    FirstName:event.target.value
  })
    }


    handleYourEmail = event => {
        this.setState({
            Email:event.target.value
        })
    }

    handleAgeChange = event =>{
        this.setState({
            Age:event.target.value
        })
    }


    handlePassword = event => {
        this.setState({
            Password:event.target.value
        })
    }

    handleConfirmPassword = event  =>{
        this.setState({
            ConfirmPassword:event.target.value
        })
    }
  
    handleSubmit = ()  => {
        alert(` ${this.state.FirstName} and ${this.state.Email} and ${this.state.Age}
        ${this.state.Password}  and ${this.state.ConfirmPassword}
        `)
    } 


  render() {
    return (
      <div className='testform'>
       <div className='app'> 
      <h5>SignUp Form</h5>
      </div>
      <form onSubmit={this.handleSubmit}>
<div className='appTest'>
    <label>FirstName:</label>
    <input type="text" 
    value={this.state.FirstName} 
     placeholder={"Enter your FirstName"}
     onChange={this.handleFristName}
        
     />
</div>
<div className='appComment'>
    <label>Your Email:</label>
    <input type="email"
    value={this.state.Email} 
    onChange={this.handleYourEmail}
        placeholder="Enter Your Email"
    />
</div>
<div className='appComment'>
    <label>Age:</label>
    <input type="number" value={this.state.number} 
    onChange={this.handleAgeChange} 
    placeholder="Enter Your Age"
    required
/>
</div>
<div className='appComment'>
    <label>Password:</label>
    <input type="Password" 
    value={this.state.Password} 
    onChange={this.handlePassword}
        placeholder="Enter Your Password"
        required
    />
</div>

<div className='appComment'>
    <label>Confirm Password:</label>
    <input type="password" 
     value={this.state.ConfirmPassword} 
        onChange={this.handleConfirmPassword}
        placeholder="Enter Your Confirm Passw"
        required
     />
</div>
<div className='rember'>
<label>Remember Me</label>
<input  type={"checkbox"}/>
</div>
<div className='btntxt' >

    <button  className='btn'  type='submit'>Create New</button>
</div>



      </form>
      </div>
    )
  }
}

export default SignUpForm