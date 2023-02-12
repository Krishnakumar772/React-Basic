//when the fill in data in form the data is lost to avoid this situation we can use event prevent default

import React, { Component } from 'react'
import './styling/AppStyle.css';

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName:"",
         comment:"",
         topic:"",
         
      }
    }

    handleChangeEvent = (event) => {
        this.setState({
            userName:event.target.value
        })
    }


    handlecommentEvent = (event) =>{
        this.setState({
            comment:event.target.value
        })
    }

    changeTopic = event => {
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit = event =>{
        alert(`${this.state.userName} and ${this.state.comment} and ${this.state.topic}`)
        event.preventDefault();
    }

  render() {
    return (
      <div className='primary'>
        <h1>Form Handling</h1>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>UserName:</label>
                <input type="text" value={this.state.userName}  onChange={this.handleChangeEvent}/>
            </div>

            <div>
                <lebal>comment</lebal>
                <textarea value={this.state.comment} onChange={this.handlecommentEvent}></textarea>

            </div>
            <div>
                <lebal>topic:</lebal>
                <select value={this.state.topic} onChange={this.changeTopic}>
                    <option value='React'>React</option>
                    <option value='Anguler'>Anguler</option>
                    <option value="Wue">Wue</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form