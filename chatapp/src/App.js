import React, { Component } from "react";
import PubNub from 'pubnub';
import { PubNubProvider, usePubNub } from 'pubnub-react';

const pubnub = new PubNub({
  publishKey: 'pub-c-22ec4f77-ccd2-4814-8829-ef38cedbad62',
  subscribeKey: 'pub-c-22ec4f77-ccd2-4814-8829-ef38cedbad62'
});

class App extends Component {
  render() {
    return (
      <div className="App">
        hello world 
      </div>
    );
  }
}

export default App;
