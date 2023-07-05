import React, { useState } from 'react';
import './Chatbox.css';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleToggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const messageInput = e.target.elements.message;
    const message = messageInput.value.trim();
    if (message !== '') {
      setMessages((prevMessages) => [...prevMessages, message]);
      messageInput.value = '';
    }
  };

  return (
    <div className={`chatbox-container ${isOpen ? 'open' : ''}`}>
      {isOpen ? (
        <div className="chatbox-content">
          <div className="chatbox-header">
            <h3>Welcome to TourBuddy</h3>
            <button className="close-button" onClick={handleToggleChatbox}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="chatbox-messages">
            {messages.map((message, index) => (
              <div className="message" key={index}>
                {message}
              </div>
            ))}
          </div>
          <form className="chatbox-form" onSubmit={handleSendMessage}>
            <input type="text" name="message" placeholder="Type your message..." />
            <button type="submit">Send</button>
          </form>
        </div>
      ) : (
        <div className="chatbox-tab" onClick={handleToggleChatbox}>
          <button className="open-button">
          <i class="fa-solid fa-envelope"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
