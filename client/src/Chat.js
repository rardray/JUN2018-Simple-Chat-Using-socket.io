import React, { Component } from "react";
import io from "socket.io-client";
import Input from "./Input";
import Conversation from "./Conversation";

const PORT = process.env.PORT || 3001;

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], notice: "" };
    this.socket = io("http://localhost:" + PORT);
    this.socket.on("RECEIVE_MESSAGE", function(data) {
      getData(addMessage);
    });
    const getData = this.getData;
    const addMessage = this.addMessage;
  }
  getData = callback => {
    fetch("/messages")
      .then(res => res.json())
      .then(messages => callback(messages));
  };
  addMessage = data => {
    this.setState({ messages: data });
  };
  componentWillMount() {
    this.getData(this.addMessage);
  }
  handleComment = (value, value2) => {
    fetch("/messages/add", {
      method: "POST",
      body: JSON.stringify({ author: value, message: value2 }),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(() => this.socket.emit("SEND_MESSAGE"))
      .catch(err => err);
  };
  render() {
    return (
      <div className="containter">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title">Chat</div>
                <hr />
                <div className="messages">
                  {this.state.messages.map(el => {
                    return (
                      <Conversation
                        value={el.author}
                        value2={el.message}
                        value3={el.author.charAt(0)}
                        id={el._id}
                      />
                    );
                  })}
                </div>
              </div>
              <Input handleComment={this.handleComment} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
