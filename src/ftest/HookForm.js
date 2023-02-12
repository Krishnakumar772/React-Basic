import React, { useState } from 'react'

export default function HookForm() {
    const [userName,setUserName]=useState('');
    const [age,setAge]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setconfirmPassword]=useState("");


   const changeUserName =(event) =>{
        setUserName(event.target.value);
    }

   const changeAge =event => {
        setAge(event.target.value);
    }
   const handleChangeEmail = event => {
        setEmail(event.target.value);
    }

   const handleChangePassword = event => {
        setPassword(event.target.value);
    }

   const handleChangeConfirmPassword =(event) => {
        setconfirmPassword(event.target.value);
    }

    handleSubmit = event => {
    
        if(password != confirmPassword){
            alert(' The password does not match');
        }else{
            alert(`userName:${userName} AGE:${age} Email:${email}  Passwoed: ${password} confirmpassword: ${confirmPassword}`)
        }
        event.preventDefault();
    }


  return (
    <div>
    <h1>HookForm</h1>
    <form onSubmit={(event) =>handleSubmit()}>
<div>
    <label>UserName:</label>
    <input type="text" value={userName}  onChange={event =>changeUserName()} required />
</div>
<div>
    <label>Age:</label>
    <input type="text" value={age} onChange={event =>changeAge(event)} />
</div>
<div>
    <label>Email:</label>
    <input type="email" value={email} onChange= {event =>handleChangeEmail(event)} />
</div>
<div>
<label>password:</label>
<input type="password" value={password} onChange={event =>handleChangePassword(event) } />
</div>
<div>
<label>ConfirmPassword</label>
<input type="password"  value={confirmPassword} onChange={event =>handleChangeConfirmPassword(event)} />
</div>
<button>Click</button>
</form>
    </div>
  )
}
