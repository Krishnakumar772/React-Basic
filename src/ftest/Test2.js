import React, { Component } from "react";


class Test2 extends Component{
    
    render(){
      
        return(
            <diV>
                <h1>{this.props.name} and {this.props.heroName}</h1>
                <p>{this.props.children}</p>
            </diV>
        )
    }
    
}
export default Test2;
