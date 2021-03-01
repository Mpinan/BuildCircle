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
    const time = new Date().toLocaleTimeString()
    const publisher = <ul className="messagePublisher">
      <li>{event.publisher}</li>
      <li className="listTime">{time}</li>
    </ul>
    const message = event.message
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
        <NameForm
          name={name}
          setName={setName}
        />
        <div>
          {channels.map((cha, index) => {
            return (
              <div key={index}>
                <ul>
                  <li
                    onClick={handleChannel}>
                    {cha}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pageStyles">
        <div className="messageTitle">
          <h1>You are in {channel} channel.</h1>
          <h3>{currentDate()}</h3>
        </div>
        <div className="messageBox">
          {messages[channel].map((message, index) => {
            return (
              <div className="message" key={`message-${index}`}>
                {/* <h4>{new Date().toLocaleTimeString()}</h4> */}
                {message}
              </div>
            );
          })}
        </div>
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