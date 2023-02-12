import React, { useState,useEffect } from 'react'
 import axois from 'axios'

function Datafatching() {
const [post,setPost]=useState([])
const [id,setId]=useState(1);
const [idFromButton,setIdFromButton]=useState(1);

useEffect(() => {
    axois.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
    .then(response => {
        console.log(response)
       setPost(response.data)
    })
    .catch(error => {
        console.log(error)
    })
},[idFromButton])

const clickHandler = () => {
    setIdFromButton(id)
}
  return (
    <div>
      <h1>Hello Ji this is Rohit Kumar</h1>
      <input type="text"  value={id} onChange={(e) => setId(e.target.value)}/>
      <button onClick={clickHandler}>ftech api</button>
      <div>{post.title}</div>
      {/* <ul>
        {
            posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))
        }
      </ul> */}
    </div>
  )
}

export default Datafatching
