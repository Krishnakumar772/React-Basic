import axios from 'axios'
import React, { Component } from 'react'

export class Test1 extends Component {
  constructor(props) {
    super(props)
     this.state = {
       post:[],
       errorMsg:"",
    }
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(resp => {
      console.log(resp)
      this.setState({post:resp.data})
    })
    .catch(error => {
   console.log(error)
   this.setState({errorMsg:"Error retrive data"})
    })
  }
  render() {

    const{post,errorMsg}=this.state;
    return (
      <>
      <div>TestHttp</div>
      <div>
      {
        post.length?post.map(posts => <div>{posts.title}</div>):null

      }
      {errorMsg? <div>{errorMsg}</div>:""}
      </div>
      </>
    )
  }
}

export default Test1