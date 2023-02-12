import React, { Component } from 'react'

export class Form1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName:"",
         email:"",
         password:"",
         confirmpassword:"",
         address:""
      }
    }

    changeUserHandler = (event) => {
        this.setState({
            userName:event.target.value
        })
    }

    changeEmailHandler = event => {
        this.setState({
            email:event.target.value
        })
    }

    changePasswordHandler = event => {
        this.setState({
            password:event.target.value
       
        })
    }

    confirmPasswordHandler = event => {
        this.setState({
            confirmpassword:event.target.value
        })
    }


    confirmAddressHandler = event => {
        this.setState({
            address:event.target.value
        })
    }


    submitHandler = event => {
        alert(`userName:${this.state.userName} Email:${this.state.email} Password:${this.state.password} ConfirmPassword: ${this.state.confirmpassword}  address: ${this.state.address}`)
        event.preventDafult();
    }

    
  render() {
    return (
      <div>
        <h1>Form</h1>
        <form onSubmit={this.submitHandler}>
        <div>
            <label>userName:</label>
            <input type="text" value={this.state.userName} onChange={this.changeUserHandler} required />
        </div>

        <div>
            <label>email:</label>
            <input type="email" value={this.state.email} onChange={this.changeEmailHandler} required />
        </div>
        <div>
            <label>password</label>
            <input type="password" value={this.state.password} onChange={this.changePasswordHandler} required />
        </div>
 
<div>
    <label>confirmpassword</label>
    <input type="password" value={this.state.confirmpassword} onChange={this.confirmPasswordHandler} />
</div>
<div>
    <label>Address</label>
    <input type="address" value={this.state.address} onChange={this.confirmAddressHandler} />
</div>
<button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form1