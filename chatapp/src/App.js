import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';
import Chat from "./components/chat"
// require('dotenv').config()

const pubnub = new PubNub({
  publishKey: 'pub-c-22ec4f77-ccd2-4814-8829-ef38cedbad62',
  subscribeKey: 'sub-c-14b19f88-6f6f-11eb-a2ab-226faaaba132',
  uuid: 'Mario' 
});

function App() {
  return (
      <PubNubProvider client={pubnub}>
        <Chat />
      </PubNubProvider>
  );
}


export default App;