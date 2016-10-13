import React from 'react';
import MessageInput from './MessageInput';

const Footer = ({ messageInputValue, changeMessageInputValue, handleMessageInputKeyUp }) => {
  return (
    <div>
      Footer
      <MessageInput
        messageInputValue = { messageInputValue }
        changeMessageInputValue = { changeMessageInputValue }
        handleMessageInputKeyUp = { handleMessageInputKeyUp }
      />
    </div>
  );
};

export default Footer;
