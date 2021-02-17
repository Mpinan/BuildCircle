import Picker from 'emoji-picker-react';

const ChatForm = (props) => {
	const { message, sendMessage, setMessageForm } = props
	// const [currentMessage, setEmoji] = useState("")
	

	const onEmojiClick = (e, emojiObject) => {
		console.log(document.getElementById("text").value)
		document.getElementById("text").value += emojiObject.emoji
	};
    return (       
        <div style={footerStyles}>
					<div>
      			<Picker 
							onEmojiClick={onEmojiClick} />
    			</div>
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