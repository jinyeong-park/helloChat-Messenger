import React, { useState, useEffect } from 'react';
import '../styles/Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert} from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/4.5/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h2>Room name</h2>
          <p>Last seen at ...</p>
        </div>

        <div className="chat__headerRight">
          {/* icons */}
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>

        </div>

      </div>
      <div className="chat__body">
        {/* <p className="chat__message"> */}
        <p className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">Jenny</span>
          Hello guys!
          <span className="chat__timestamp">7:10 pm
          </span>
        </p>
        <p className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">Jenny</span>
          Hello guys!
          <span className="chat__timestamp">7:10 pm
          </span>
        </p>

      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input type="text" placeholder="Type a message" type="text"></input>
          {/* when clicking input => send message but make it invisible*/}
          <button>Send a message</button>
        </form>
        <MicIcon />
      </div>

    </div>
  )
}

export default Chat
