import React, { useState, useEffect } from 'react';
import { usePubNub } from 'pubnub-react';
import ChatForm from "./chatForm"
import NameForm from "./nameForm"

function Chat(props) {
    const {name, setName} = props
    const pubnub = usePubNub();
    const [channels] = useState(["channel-1", "channel-2", "channel-3", "channel-4"]);
    const [messages, addMessage] = useState({
      'channel-1': [], 
      'channel-2': [], 
      'channel-3': [], 
      'channel-4': []
    });

    const [message, setMessage] = useState('');
    const [channel, setChannel] = useState("channel-1")

    const handleMessage = (event) => {
      const time = new Date().toLocaleTimeString();
      const publisher = <h4>{event.publisher}</h4>
      const message = event.message + " " + time;
      if (typeof message === 'string' || message.hasOwnProperty('text')) {
        const text = message.text || message;
        if(event.channel) {
          addMessage(messages => ({...messages,  [event.channel]: [...messages[event.channel], publisher, text]}));
        }
      }
    };
  
    const sendMessage = message => {
      if (message) {
        pubnub
          .publish({ channel: channel, message })
          .then(() => setMessage(''));
      }
    };
 
    useEffect(() => {
      pubnub.addListener({ message: handleMessage  });
      pubnub.subscribe({ channels });
    }, [pubnub, channels]);

    const handleChannel = event => {
      setChannel(event.target.innerText)
    }

    return (
      <div>

      <div style={pageStyles}>
      <div style={sideBar}>
              <div style={channelStyle}>
                <NameForm
                  name={name}
                  setName={setName}
                  />
              {channels.map((cha, index) => {
                return (
                  <div style={buttonPadding} key={index}>
                    <button 
                      style={buttonStyles}
                      onClick={handleChannel}>
                      {cha}
                    </button>
                  </div>
                );
              })}
              </div>
      </div>
      <div>
        <div style={{padding:"5%"}}>
          <div style={listStyles}>
          <h1 style={{padding:"1rem", color:"black"}} >You are in {channel}</h1>
            {messages[channel].map((message, index) => {
              return (
                <div key={`message-${index}`}>
                  {message}
                </div>
              );
            })}
          <div >
            <ChatForm
              message={message}
              setMessageForm={setMessage}
              sendMessage={sendMessage}
              />
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }

  const sideBar = {
    position: "absolute",
    height: "100%",
    width: "15%",
    backgroundColor: "#dc8135",
  }

  const buttonStyles = {
    backgroundColor: "#4f5165",
    borderRadius: "10px",
    fontSize: '1.1rem',
    padding: '10px 15px',
  };

  const buttonPadding = {
    overflowX: "hidden",
    overflowY: "auto",
    padding: "0.5em"
  }

  const channelStyle = { 
    display: 'block',
    padding: "0.5rem"
  }

  const pageStyles = {
    alignItems: 'center',
    background: '#343a40',
    justifyContent: 'center',
    minHeight: '100vh',
  };
    
  const listStyles = {
    backgroundColor: '#ffffff',
    height: "80%",
    width: "80%",
    left: "17%",
    top: "auto",
    position: "absolute",
    overflowX: "hidden",
    overflowY: "auto"
  };

  export default Chat