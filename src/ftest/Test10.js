/*
import React from 'react'

 const Test10 = (props) => {
    const {name,heroName}=props
  return (
    <div>

        <h1>hi i am {name} and my Hero{heroName}</h1>
    </div>
  )
}

export default Test10;
*/
import React, { Component } from 'react'

export class Test10 extends Component {
   
render() {
    const {name,heroName}=this.props;
    return (
      <div>
        <h1>currently i am {name}  and my heroName{heroName}</h1>
      </div>
    )
  }
}

export default Test10


