import React, { Component } from "react";
import PubNub from 'pubnub';
import { PubNubProvider, usePubNub } from 'pubnub-react';


// Create a new instance of PubNub to set it up with personalized keys
const pubnub = new PubNub({
  publishKey: 'pub-c-22ec4f77-ccd2-4814-8829-ef38cedbad62',
  subscribeKey: 'pub-c-22ec4f77-ccd2-4814-8829-ef38cedbad62',
  uuid: 'Mario'
});

class App extends Component {
  state = {
    message: "",
    messages: []
  }


  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  
  addMessageToWindow(message){
    let messages = [...this.state.messages]
    messages.push(message)
    this.setState( {messages } )
  }
  
  handleSubmit() {
    this.addMessageToWindow(this.state.message)
  }

  render() {
    const {messages} = this.state
    return (
      <PubNubProvider client={pubnub}>
        <div>
          <input
            onChange={this.onChange.bind(this)}
            type="text"
            name="message"
          />
          <button onClick={this.handleSubmit.bind(this)} >
            Send
          </button>
        </div>
        <div>
          {messages.map((message, index) => {
            return (
              <div key={`message-${index}`}>
                {message}
              </div>
            );
          })}
        </div>
      </PubNubProvider>
    );
  }
}

export default App;
