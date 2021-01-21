import React from 'react';
import '../styles/Chat.css';
import { Avatar } from '@material-ui/core';

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h2>Room name</h2>
          <p>Last seen at ...</p>
        </div>

        <div className="chat__headerRight">
          {/* icons */}

        </div>

      </div>
      <div className="chat__body"></div>
      <div className="chat__footer"></div>

    </div>
  )
}

export default Chat
