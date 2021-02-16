import React, { useState, useEffect } from 'react';
import { usePubNub } from 'pubnub-react';
import ChatForm from "./chatForm"
import "./chat.css" 
// import Picture from "./picture.png"

function Chat() {
    const pubnub = usePubNub();
    const [channels] = useState(['channel-1', 'channel-2', 'channel-3', 'channel-4']);
    const [messages, addMessage] = useState({
      'channel-1': [], 
      'channel-2': [], 
      'channel-3': [], 
      'channel-4': []
    });
    const [message, setMessage] = useState('');
    const [channel, setChannel] = useState("channel-1")

    // const [files, setFile] = useState([])
    // const [username, setUsername] = useState("")
  
    const handleMessage = event => {
      const message = event.message;
      console.log(event)
      console.log(message, "i am a message")
      if (typeof message === 'string' || message.hasOwnProperty('text')) {
        const text = message.text || message;
        if(event.channel === "channel-1") {
          addMessage(messages => ({...messages,  "channel-1": [...messages["channel-1"], text]}));
        }
        if(event.channel === "channel-2") {
          addMessage(messages => ({...messages,  "channel-2": [...messages["channel-2"], text]}));
        }
        if(event.channel === "channel-3") {
          addMessage(messages => ({...messages,  "channel-3": [...messages["channel-3"], text]}));
        }
        if(event.channel === "channel-4") {
          addMessage(messages => ({...messages,  "channel-4": [...messages["channel-4"], text]}));
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

    // const sendFile = file => {
    //   if (file) {
    //     pubnub.sendFile({
    //       channel: 'my_channel',
    //       message: {
    //         test: "message",
    //         value: 42
    //       },
    //       file: {
    //         uri: file,
    //         name: 'picture.png',
    //         mimeType: 'image/png',
    //       }
    //     })
    //   }
    // }

    // const handleFile = (event) => {
    //   console.log(event.value)
    //   let file = event.value
    //   setFile(files => [...files, file]);
    // }
  
    useEffect(() => {
      pubnub.addListener({ message: handleMessage  });
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
                    <button onClick={handleChannel}>
                      {cha}
                    </button>
                </div>
              );
            })}
          </div>
          <div style={listStyles}>
            {console.log(messages["channel-2"])}
            {messages[channel].map((message, index) => {
              return (
                <div key={`message-${index}`}>
                  {message}
                </div>
              );
            })}
          </div>
          {/* <input
            type="file"
            value={files}
            onChange={e => {sendFile(e.target)}}
          /> */}
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