import React, { useEffect, useState } from 'react';
// Import any necessary libraries for charts or UI components
import '../styles/UserDashboard.css';  
import ChatHistory from './MessageItem';  
import Statistics from './Statistics';  
import {useNavigate} from 'react-router-dom'
const UserDashboard = () => {
    const [chatData, setChatData] = useState([]);
    const navigate=useNavigate()    
     
    useEffect(() => {
         
        async function fetchChatHistory() {
            // Replace with your API call
           // const response = await fetch('/api/chat-history');  
           // const data = await response.json();
          const data=[{
            message:{text:"sdfsdf",user:"sami"},isOwner:true,showUsername:true}]
            setChatData(data);
        }

        fetchChatHistory();
    }, []);

    return (
        <div className="user-dashboard-container">
            <h1>Interface Utilisateur</h1>
            <div className="dashboard-stats">
                <Statistics />
            </div>

            <div className="chat-history">
                <h2>Historique de chat</h2>
                {chatData.length > 0 ? (
                    chatData.map((chatData1,index)=><>
                    
                    <ChatHistory 
                        key={index}
            message={chatData1.message}
            isOwner={chatData1.isOwner}
            showUsername={chatData1.showUsername}
                        
                        /></>)
                ) : (
                    <p>Pas d'historique de chat dispo.</p>
                )}
            </div>

            <div className="profile-settings">
                <h2>Préférences de profil</h2>
                <p>Gérer votre compte et préférences</p>
                <button onClick={() => navigate('/editprofile')}>
                    Changer infos de profil
                </button>
            </div>
        </div>
    );
};

export default UserDashboard;
