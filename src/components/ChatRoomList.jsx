import React from 'react'

function ChatRoomList() {

  const handlePostRequest = async () => { 
    try { const response = await axios.post(apiUrl+'/api/users/chatroom');
    }catch(exception){

    }

console.log(data);
}
  return (
    <div>
      <h1>
      Liste de chat rooms
      </h1>
      <h2>Chatroom 1</h2>
      <h2>Chatroom 2</h2>
      <h2>Chatroom 3</h2>
      </div>
  )
}

export default ChatRoomList