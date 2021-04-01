import React from 'react';
import './Chats.css';
import Chat from "./Chat"

function Chats() {
    return (
      <div className="chats">
        <Chat
          name="Jessica"
          message="honey where u at"
          timestamp="40 seconds ago"
          profilePic="..."
        />
        <Chat
          name="Elon"
          message="What is ur eth addy"
          timestamp="now"
          profilePic="..."
        />
        <Chat
          name="Lala"
          message="coming"
          timestamp="2 minutes ago"
          profilePic="..."
        />
        <Chat
          name="Jessica"
          message="YO"
          timestamp="40 seconds ago"
          profilePic="..."
        />
      </div>
    );
}

export default Chats
 