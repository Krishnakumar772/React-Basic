import React, { useState } from 'react'
import useInput from './Hook/useInput';

function UserForm() {
  
   // const [lastName,setLastName]=useState('');


   const [firstName,bindFirstName,resetFirstName]=useInput('')
    const [lastName,bindLastName,resetLastName]  =useInput('')

    const submitHandler = e => {
     e.preventDefault()
     alert(` Hello ${firstName}   and ${lastName}`)
     resetFirstName();
     resetLastName();
    }

  return (
    <div>
      <h1>Hello ji this is Krishna</h1>
      <form onSubmit={submitHandler}> 
    <div>
        <label>First Name</label>
        <input 
         {...bindFirstName}
        type="text"  
       
            // value={firstName}
            // onChange={e =>setFirstName(e.target.value)}
        />
        </div>
       
        <div>
        <label>Last Name</label>

<input 
{...bindLastName}
            type="text"  
            // value={lastName}
            // onChange={e =>setLastName(e.target.value)}
        />
        </div>
        
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UserForm
