import React, { useState, useEffect } from 'react';
import { usePubNub } from 'pubnub-react';
import ChatForm from "./chatForm"
import "./chat.css" 

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
      <div style={pageStyles}>
        <div style={chatStyles}>
          <div style={channelStyle}>
            {channels.map((cha, index) => {
              return (
                <div key={index}>
                  <td>
                    <button onClick={handleChannel}>
                      {cha}
                    </button>
                  </td>
                </div>
              );
            })}
          </div>
          <div style={listStyles}>
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
      </div>
    );
  }

  const channelStyle = { 
    display: 'inline-flex'
  }

  const pageStyles = {
    alignItems: 'center',
    background: '#282c34',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
  };
  
  const chatStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: '50vh',
    width: '50%',
  };
  
  const headerStyles = {
    background: '#323742',
    color: 'white',
    fontSize: '1.4rem',
    padding: '10px 15px',
  };

  const listStyles = {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    overflow: 'auto',
    padding: '10px',
  };

  export default Chat