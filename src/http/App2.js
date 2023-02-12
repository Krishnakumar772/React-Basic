import React, { Component } from 'react'
import axios from 'axios';

class App2 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts:[]
    }
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      console.log(response)
      this.setState({
        posts:response.data
      })
    })
    .catch(error =>{
      console.log(error)
    })
  }

  render() {
    const {posts} =this.state
    return (
      <div>
        
        <p>List of Post This is Krishna</p>
      {
        posts.length?
        posts.map((post,index) =><div key={index}>
       UsersName: {post.name}
   
       </div>)
       
        :null

      }
      </div>
    )
  }
}

export default App2