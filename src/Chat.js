import React, { Component } from 'react';
import io from 'socket.io-client'
class Chat extends Component {
    constructor(props) {
        super(props)
        this.state ={username: '', message: '', messages: []}
        this.socket = io('localhost:8080')
        this.socket.on('RECEIVE_MESSAGE', function(data) {
            addMessage(data)
        })
        const addMessage= data => {
            console.log(data)
            this.setState(prevState => {
                return {messages: [...prevState.messages, data]}
            })
        }
    }
    
    handleChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]:  value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.socket.emit('SEND_MESSAGE',{
            author: this.state.username,
            message: this.state.message
        })
        this.setState({message: ''})
    }
    render() {
        return (
        <div className = 'containter'>
            <div className = 'row'>
                <div className = 'col-4'>
                    <div className = 'card' >
                        <div className = 'card-body'>
                            <div className = 'card-title'>Chat</div>
                                <hr/>
                                    <div className = 'messages'>
                                    {this.state.messages.map(el => {
            return (
                <div>{el.author}: {el.message} </div>
            )
        })}
                                    </div>
                                </div>
                                <div className = 'card-footer'>
                                    <input name = 'username' type = 'text' placeholder = 'Username' className= 'form-control' value = {this.state.username} onChange = {(e) => this.setState({username: e.target.value})}/>
                                    <br/>
                                    <input name = 'message' value = {this.state.message} onChange = {this.handleChange} type = 'text' placeholder = 'message' className = 'form-control'/>
                                    <br/>
                                    <button onClick = {this.handleSubmit.bind(this)} className = 'btn btn-primary form-control'>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Chat;