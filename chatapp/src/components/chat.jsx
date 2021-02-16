import React, { useState, useEffect } from 'react';
import { usePubNub } from 'pubnub-react';
import ChatForm from "./chatForm"

function Chat() {
    const pubnub = usePubNub();
    const [channels] = useState(['channel-1', 'channel-2', 'channel-3', 'channel-4']);
    const [messages, addMessage] = useState([]);
    const [message, setMessage] = useState('');
    const [channel, setChannel] = useState("channel-1")
  
    const handleMessage = event => {
      const message = event.message;
      console.log(event)
      console.log(message, "i am a message")
      // if (typeof message === 'string' || message.hasOwnProperty('text')) {
        // const text = message.text || message;
        addMessage(messages => [...messages, message]);
      // }
    };
  
    const sendMessage = message => {
      if (message) {
        pubnub
          .publish({ channel: channel, message })
          .then(() => setMessage(''));
      }
    };
  
    useEffect(() => {
      pubnub.addListener({ message: handleMessage });
      pubnub.subscribe({ channels });
    }, [pubnub, channels]);

    const handleChannel = event => {
      console.log(event.target.innerText)
      setChannel(event.target.innerText)
    }


  
    return (
      <div>
        <div >
          {channels.map((cha, index) => {
            return (
              <div onClick={handleChannel} key={index}>
                {cha}
              </div>
            );
          })}
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
        <div>
          <ChatForm
            message={message}
            setMessageForm={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    );
  }

  export default Chat