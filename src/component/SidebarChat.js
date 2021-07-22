import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import db from '../firebase';
import '../styles/sidebarchat.css';
function SidebarChat({ startChat, id, name }) {
  const [seed, setSeed] = useState('');
  const [message, setMessage] = useState('');
  const handleChat = () => {
    const roomName = prompt('Enter chat name please');
    if (roomName) {
      db.collection('rooms').add({
        name: roomName,
      });
    }
  };

  useEffect(() => {
    db.collection('rooms')
      .doc(id)
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setMessage(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return !startChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/:${seed}.svg`}
        />
        <div className="sidebarChat__info">
          <h3>{name}</h3>
          <p>{message[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div
      style={{ marginLeft: '10px' }}
      onClick={handleChat}
      className="sidebarChat"
    >
      <h2>Start new chat</h2>
    </div>
  );
}

export default SidebarChat;
