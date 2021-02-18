import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';
import Chat from "./components/chat"
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const pubnub = new PubNub({
    publishKey: 'pub-c-22ec4f77-ccd2-4814-8829-ef38cedbad62',
    subscribeKey: 'sub-c-14b19f88-6f6f-11eb-a2ab-226faaaba132',
    uuid: name 
  });

  const handleName = () => {
    setName("")
  }
  
  return (
      <PubNubProvider client={pubnub}>
        <form onSubmit={handleName}>
          {/* <h1>Hello {this.state.username}</h1> */}
          <p>Enter your name, and submit:</p>
          <h1>
            Introduce a name
          </h1>
          <input
            type="text"
            value={name}
            onChange={e =>  {
              e.preventDefault();
              setName(e.target.value)
            }}
            />
          <button type="submit">
            Submit name
          </button>
        </form>
        <Chat />
      </PubNubProvider>
  );
}


export default App;