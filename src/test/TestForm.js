import React, { Component } from 'react'
import './App.css';

export class TestForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: "",
            "comment": "",
            "topic": ""
        }
    }

    handleUserName = event => {
        this.setState({
            userName: event.target.value
        })
    }
    handleCommentChange = event => {
        this.setState({
            comment: event.target.value
        })
    }

    changeTopicHandler = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
       
        alert(`${this.state.userName} and ${this.state.comment} and ${this.state.topic}`);
        event.preventDefault();
    }
    render() {
        return (
            <div className='testform'>
            <div >
                <div className='app'>TestForm</div>
                <form onSubmit={this.handleSubmit}>
                    <div className='appTest'>
                        <label>userName</label>
                        <input type="text" value={this.state.userName} onChange={this.handleUserName} />
                    </div>

                    <div className='appComment'>
                        <label>comment</label>
                        <textarea value={this.state.comment} onChange={this.handleCommentChange} />
                    </div>
                    <div className='appTopic'>
                        <lebal>Topic</lebal>
                        <select value={this.state.topic} onChange={this.changeTopicHandler}>
                            <option value="React">React</option>
                            <option value="Anguler">Anguler</option>
                            <option value="Vue">Vue</option>
                        </select>
                    </div>
               <div className='btntxt'>
               <button  className="btn"type="submit">Submlit</button>
               </div>
                    
                </form>
            </div>
            </div>
        )
    }
}

export default TestForm