const ChatForm = (props) => {
	const { message, sendMessage, setMessageForm } = props
    return (       
        <div>
          <input
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
 
export default ChatForm;