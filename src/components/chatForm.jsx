import Picker from 'emoji-picker-react';
import React, { useState, useRef } from 'react';
import { FaSmileBeam } from "react-icons/fa"
import { RiSendPlaneFill } from "react-icons/ri"
import "./styles/chatForm.css"


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
    <div className="chatForm">
      <div className="emojiBox">
        {hidden ? <Picker onEmojiClick={onEmojiClick} /> : null}
      </div>
      <div className="chatBox">
        <div
          className="emojiButton"
        >
          <FaSmileBeam
            style={{ justiftyContent: "center", alignItems: "center" }}
            size={30}
            color="white"
            onClick={showEmojis}
          />
        </div>
        <input
          className="inputField"
          ref={ref}
          id="text"
          type="text"
          placeholder="Send message"
          value={message}
          onKeyPress={e => {
            if (e.key !== 'Enter') return;
            sendMessage(message);
          }}
          onChange={e => setMessageForm(e.target.value)}
        />
        <div
          className="sendButton"
        >
          <RiSendPlaneFill
            size={30}
            color="white"
            style={{ justiftyContent: "center", alignItems: "center" }}
            onClick={e => {
              e.preventDefault();
              sendMessage(message);
            }}
          />
        </div>
      </div>
    </div>
  );
}




export default ChatForm;