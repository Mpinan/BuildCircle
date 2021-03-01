import React, { useState, useEffect } from 'react';
import { usePubNub } from 'pubnub-react';
import ChatForm from "./chatForm"
import NameForm from "./nameForm"
import "./styles/chat.css"

function Chat(props) {
  const { name, setName } = props
  const pubnub = usePubNub();
  const [channels] = useState(["General", "Meetings", "News", "Private"]);
  const [messages, addMessage] = useState({
    'General': [],
    'Meetings': [],
    'News': [],
    'Private': []
  });

  const [message, setMessage] = useState('');
  const [channel, setChannel] = useState("General")

  const handleMessage = (event) => {
    const time = new Date().toLocaleTimeString();
    const publisher = <h4>{event.publisher}</h4>
    const message = event.message + " " + time;
    if (typeof message === 'string' || message.hasOwnProperty('text')) {
      const text = message.text || message;
      if (event.channel) {
        addMessage(messages => ({ ...messages, [event.channel]: [...messages[event.channel], publisher, text] }));
      }
    }
  };

  const currentDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '-' + dd + '-' + yyyy;

    return today
  }

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
    setChannel(event.target.innerText)
  }

  return (
    <div className="pageContainer">
      <div className="sideBar">
        <div className="channelStyle">
          <NameForm
            name={name}
            setName={setName}
          />
          <div>
            {channels.map((cha, index) => {
              return (
                <div key={index}>
                  <ul>
                    <li>
                      <a
                        onClick={handleChannel}>
                        {cha}
                      </a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="pageStyles">
        <div className="messageBox">
          <div style={{padding: "1rem", backgroundColor: "#60656f", borderBottom: "1px solid black"}}>
            <h1>You are in {channel} channel.</h1>
            <h3>{currentDate()}</h3>
          </div>
          {messages[channel].map((message, index) => {
            return (
              <div key={`message-${index}`}>
                {message}
              </div>
            );
          })}
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

export default Chat