import React, { Component } from 'react';

class Test4 extends Component{
    render(){
        return(
            <div>
            <h1>i am using{this.props.tech} i am a{this.props.destation}</h1>
            {this.props.children}

    </div>
        )
    }
}
export default Test4;