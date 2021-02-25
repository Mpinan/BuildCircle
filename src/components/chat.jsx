import React, { useState, useEffect } from 'react';
import { usePubNub } from 'pubnub-react';
import ChatForm from "./chatForm"
import NameForm from "./nameForm"
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

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
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


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
      <div style={pageStyles}>
      <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-left">
        <NavbarBrand href="/">Build Circle Chat</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <div style={channelStyle}>
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
            </NavItem>
          </Nav>
        </Collapse>
        <NameForm
          name={name}
          setName={setName}
        />
      </nav>
      <div >
        <div>
          <h1 style={{padding:"1rem", color:"#fff"}} >You are in {channel}</h1>
          <div style={listStyles}>
            {messages[channel].map((message, index) => {
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
    </div>
    );
  }

  
  const buttonStyles = {
    fontSize: '1.1rem',
    padding: '10px 15px',
  };

  const buttonPadding = {
    padding: "0.5em"
  }

  const channelStyle = { 
    display: 'flex',
    padding: "0.5rem"
  }

  const pageStyles = {
    alignItems: 'center',
    background: '#282c34',
    justifyContent: 'center',
    minHeight: '100vh',
  };
  
  const chatStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: '60vh',
    width: '100%',
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