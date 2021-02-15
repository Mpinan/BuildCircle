import React, { Component } from "react";
import PubNub from 'pubnub';
import { PubNubProvider, usePubNub } from 'pubnub-react';


// Create a new instance of PubNub to set it up with personalized keys
const pubnub = new PubNub({
  publishKey: 'pub-c-22ec4f77-ccd2-4814-8829-ef38cedbad62',
  subscribeKey: 'pub-c-22ec4f77-ccd2-4814-8829-ef38cedbad62'
});

class App extends Component {
  state = {
    message: "",
    messages: []
  }



  render() {
    return (
      <PubNubProvider client={pubnub}>
        <div>
          <input
            type="text"
          />
          <button>
            Send
          </button>
        </div>
      </PubNubProvider>
    );
  }
}

export default App;
