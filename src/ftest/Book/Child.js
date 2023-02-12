import React, { Component } from 'react'

 class Child extends Component {
    handleSubmit = event => {
        this.props.childHandleClick(event.target.myname.value);
        event.preventdefault();
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input type="text" name="myname"placeholder="Enter your name"/>
            <br /> <br/> <br />
            <input type="submit" value="submit"/> <br /> <br /> <br />
        </form>
      </div>
    )
  }
}

export default Child