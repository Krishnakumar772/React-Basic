import React, { useState } from 'react'

export default function HookSign() {
    const [name,setName]=useState("");
    const [age,setAge]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [ConfirmPassword,setConfirmPassword]=useState('');

    const changeName = event => {
        setName(event.target.value)
    }

    const changeAge = event => {
        setAge(event.target.value)
    }

    const chnageEmail = event => {
        setEmail(event.target.value)
    }
    const changePassword =event => {
        setPassword(event.target.value)
    }
    const changeConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }
    const handleSubmit = event => {
        if(password != ConfirmPassword){
            alert("The Password is not coorrect")
        }else{
            alert(`'A form was submitted with Name' Name ${name}, Age  ${age} and Email ${email}`)
        }
    }
    

  return (
    <div className='testform'>
      <div className='app'> 

    <h1>SignUp</h1>
    </div>
    
    <form onSubmit={(event) =>handleSubmit(event)}>
    <div className='appTest'>
        <label>Name:</label>
    
    <input type="text"  value={name} onChange={() =>changeName()}/>
    </div>
    <div className='appTest'>
        <lebal>age</lebal>
        <input type="text" value={age}   onChange={(event) =>changeAge(event)}  />
    </div>

    <div className='appTest'>
<label>email</label>
<input type='email' value={email} onChange={(event) =>chnageEmail(event)} />
    </div>
    <div className='appTest'>
   <label>Password</label>
   <input type="password" value={password} onChange={(event) =>changePassword(event)} />
    </div>
    <div className='appTest'>
        <label>Confirm Password</label>
        <input type="text" value={ConfirmPassword}  onChange={(event) =>changeConfirmPassword(event) }/>
    </div>
    <div  className='btntxt'>
    <button  className="btn" type='submit'>Submit</button>
    </div>

    </form>
    </div>
  )
}
