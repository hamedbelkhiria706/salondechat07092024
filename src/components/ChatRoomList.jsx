import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
const apiUrl = import.meta.env.VITE_API_URL;
function ChatRoomList() {

  const handlePostRequest = async () => { 
    try { const response = await axios.post(apiUrl+'/api/users/chatroom/tgetchatrooms');
    console.log(response)
    }catch(exception){
      console.log(exception)
    }

 
}
  return (
    <div>
      <h1>
      Liste de chat rooms
      </h1>
      <Button onClick={handlePostRequest}>Test</Button>
      <ul>
        <li></li>
      </ul>
      <h2>Chatroom 1</h2>
      <h2>Chatroom 2</h2>
      <h2>Chatroom 3</h2>
      </div>
  )
}

export default ChatRoomList