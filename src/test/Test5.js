import React, { Component } from "react";


class Test5 extends Component{
    
    render(){
        const {name,tech}=this.props
        return(
            <h1>Hello Good Morning i am{name} and i have learn{tech}</h1>
        )
    }
}
export default Test5