import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
const apiUrl = import.meta.env.VITE_API_URL;
import { useParams } from 'react-router-dom';
function ChatRoomList() {
  const { userId } = useParams();
  const handlePostRequest = async () => { 
    
    try { const response = await axios.post(apiUrl+'/api/chatroom/tgetchatroomsbyuser'
,{_id:userId}
    );
    console.log(response)
    console.log(userId)
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