import React,{useState} from 'react'
import User from './User';

export default function Test123() {
    const [test,setTest]=useState([]);
 
    function addUser(){
        console.log('Hello World');
        setTest([...test, <User />])
    }
    

  return (
    <div>
  <h1>Hello World</h1>
  {test}
    <button onClick={addUser}>Click</button>
    </div>
  )
}






// import React,{Component} from "react";
// import User from "./User";

// export default class Test123 extends React.Component {

//     state = {
//       users: []
//     }
  
//     addUser = () => {
//       this.setState({
//         users: [...this.state.users, <User />]
//       })
//     }
  
//     render() {
//       return (
//         <div>
//           <button onClick={this.addUser}>Add User</button>
//           {this.state.users}
//         </div>
//       );
//     }
// }
