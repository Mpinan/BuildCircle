import Picker from 'emoji-picker-react';
import React, { useState, useRef } from 'react';


const ChatForm = (props) => {
	const { message, sendMessage, setMessageForm } = props
  const [hidden, setHidden] = useState(false)
  const ref = useRef(null);

  const showEmojis = () => {
    setHidden(!hidden)
  }


	const onEmojiClick = (e, emojiObject) => {
    const cursor = ref.current.selectionStart;
    const text = message.slice(0, cursor) + emojiObject.emoji + message.slice(cursor);
    setMessageForm(text);
	};

    return (     
      <section style={chatStyles}>
        <div>
          {hidden ? <Picker onEmojiClick={onEmojiClick} /> : null }
        </div>
        <div style={footerStyles}>
          <button onClick={showEmojis}>
            Emojis
          </button>
          <input
              ref={ref}
							id="text"
							style={inputStyles}
              type="text"
              placeholder="Type your message"
              value={message}
              onKeyPress={e => {
                if (e.key !== 'Enter') return;
                sendMessage(message);
              }}
              onChange={e => setMessageForm(e.target.value)}
              />
          <button
							style={buttonStyles}
              onClick={e => {
                e.preventDefault();
                sendMessage(message);
              }}
              >
            Send Message
          </button> 
        </div>      
      </section>  
    );
}

const chatStyles = {
  position: "absolute",
  display: 'inline-block',
  flexDirection: 'column',
  width: '100%',
  bottom: "0"
};

const footerStyles = {
  display: 'flex',
};

const inputStyles = {
	flexGrow: 1,
	fontSize: '1.1rem',
	padding: '10px 15px',
};

const buttonStyles = {
  fontSize: '1.1rem',
  padding: '10px 15px',
};



export default ChatForm;