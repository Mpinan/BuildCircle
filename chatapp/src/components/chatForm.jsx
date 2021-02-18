import Picker from 'emoji-picker-react';
import React, { useState } from 'react';


const ChatForm = (props) => {
	const { message, sendMessage, setMessageForm } = props
  const [hidden, setHidden] = useState(false)

  const showEmojis = () => {
    setHidden(!hidden)
  }
	
	const onEmojiClick = (e, emojiObject) => {
		document.getElementById("text").value += emojiObject.emoji
	};

    return (     
      <section>
        <div>
          {hidden ? <Picker onEmojiClick={onEmojiClick} /> : null }
        </div>
        <div style={footerStyles}>
          <button onClick={showEmojis}>
            Emojis
          </button>
          <input
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