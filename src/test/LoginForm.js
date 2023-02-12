import React, { Component } from 'react'

export class LoginForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName:"",
         Password:""
      }
    }

    handleuserName = event =>{
        this.setState({
            userName:event.target.value
        })
    }


    handlePassword = event =>{
        this.setState({
            Password:event.target.value
        })
    }

    handleSubmit = () =>{
        alert("successfully Login");
    }

  render() {
    return (
      <div className='testform'>
      <div className='app'> 
      <h5>LoginForm</h5>
      </div>
     <form onSubmit={this.handleSubmit}>
      <div className='appTest'>
        <label>userName:</label>
        <input type="text" value={this.state.userName} onChange={this.handleuserName} required/>
      </div>
<div className='appComment'>
<label>Password</label>
<input type="password" value={this.state.Password} onChange={this.handlePassword} required/>
</div>
<div className='btntxt'>
<button className="btn" type='submit'>Login</button>
</div>
</form>

      </div>
    )
  }
}

export default LoginForm