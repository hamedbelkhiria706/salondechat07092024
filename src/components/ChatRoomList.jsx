import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
const apiUrl = import.meta.env.VITE_API_URL;
import { useParams } from 'react-router-dom';
function ChatRoomList({token}) {
  const { userId } = useParams();
  console.log(token);
  const [tab,setTab]=useState([])
  const handlePostRequest = async () => { 
    
    try { const response = await axios.post(apiUrl+'/api/chatroom/tgetchatroomsbyuser'
,{_id:userId}
    );
     
    if (response && response?.data) {
      console.log(response.data)
    setTab(response.data)
    }
  else{
    setTab([])
  }
    }catch(exception){
      console.log(exception)
    }

 
}
useEffect(()=>{

  handlePostRequest()
  
},
[])

  return (
    <div>
      <h1>
      Liste de chat rooms
      </h1>
      <h2>Nombre : {}</h2>
     {JSON.stringify(tab)}
      <Button onClick={handlePostRequest}>Recharger</Button>
     
      <ul >
         
      {tab.map(function(e,i){
       return <li key={i}> {e}</li>      
      })
      }
      </ul>
       
      </div>
  )
}
/**
 * 
 * 
 */

export default ChatRoomList