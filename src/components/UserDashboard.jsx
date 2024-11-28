import React, { useEffect, useState } from 'react';
// Import any necessary libraries for charts or UI components
import '../styles/UserDashboard.css';  
import ChatHistory from './MessageItem';  
import Statistics from './Statistics';  

const UserDashboard = () => {
    const [chatData, setChatData] = useState([]);
    
     
    useEffect(() => {
         
        async function fetchChatHistory() {
            // Replace with your API call
           // const response = await fetch('/api/chat-history');  
           // const data = await response.json();
          const data=[{message:"1",owner:"2",item:"encours"}]
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
                    <ChatHistory data={chatData} />
                ) : (
                    <p>Pas d'historique de chat dispo.</p>
                )}
            </div>

            <div className="profile-settings">
                <h2>Préférences de profil</h2>
                <p>Gérer votre compte et préférences</p>
                <button onClick={() => alert('En cours d\'implémentation')}>
                    Changer infos de profil
                </button>
            </div>
        </div>
    );
};

export default UserDashboard;
