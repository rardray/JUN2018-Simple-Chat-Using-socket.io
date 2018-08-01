import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {author: '', message: ''}
    }
    handleChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]:  value
        })
        console.log(this.state)
    }

    handleSubmit = e => {
        e.preventDefault()
        const { username, message } = this.state
        this.props.handleComment(username, message)
        this.setState({message: ''})
    }
    render() {
        return (
            <div className = 'card-footer'>
            <input name = 'username' type = 'text' placeholder = 'Username' className= 'form-control' value = {this.state.username} onChange = {(e) => this.setState({username: e.target.value})}/>
            <br/>
            <input name = 'message' value = {this.state.message} onChange = {this.handleChange} type = 'text' placeholder = 'message' className = 'form-control'/>
            <br/>
            <button onClick = {this.handleSubmit} className = 'btn btn-primary form-control'>Send</button>
        </div>
        )
    }
}
export default Input