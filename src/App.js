import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';
import Chat from "./components/chat"
import React, { useState } from 'react';
import NameForm from "./components/nameForm"

function App() {
  const [name, setName] = useState('');
  console.log(name)

  const handleName = (name = "Default User") => {
    if(name) {return name}
  }

  const pubnub = new PubNub({
    publishKey: 'pub-c-22ec4f77-ccd2-4814-8829-ef38cedbad62',
    subscribeKey: 'sub-c-14b19f88-6f6f-11eb-a2ab-226faaaba132',
    uuid: handleName(name)
  });


  return (
      <PubNubProvider client={pubnub}>
        <NameForm
          name={name}
          setName={setName}
        />
        <Chat />
      </PubNubProvider>
  );
}



export default App;