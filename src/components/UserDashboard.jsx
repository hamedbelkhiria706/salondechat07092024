import React, { useEffect, useState } from 'react';
// Import any necessary libraries for charts or UI components
 
import MessageItem from './MessageItem'; // Renamed for clarity
import Statistics from './Statistics';  
import { useNavigate } from 'react-router-dom';

// Предположим, что у вас есть доступ к ID пользователя, например, из контекста или props
// const userId = getCurrentUserId(); // Замените это реальной логикой получения ID пользователя

const UserDashboard = () => {
    const [chatData, setChatData] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state
    const [error, setError] = useState(null); // Added error state
    const navigate = useNavigate();    
    
    // Placeholder for actual user ID, this should come from auth context or props
    const userId = "currentUserId"; // Replace with actual dynamic user ID

    useEffect(() => {
        async function fetchChatHistory() {
            setLoading(true);
            setError(null);
            try {
                // Replace with your actual API call
                // const response = await fetch(`/api/chat-history/${userId}`); // Example with dynamic userId
                // if (!response.ok) {
                //     throw new Error(`HTTP error! status: ${response.status}`);
                // }
                // const data = await response.json();

                // Using mock data for now, ensure it has unique IDs if possible
                const mockData = [
                    { id: "chat1", message: { text: "Bonjour tout le monde!", user: "Alice" }, isOwner: false, showUsername: true },
                    { id: "chat2", message: { text: "Salut Alice!", user: "Bob" }, isOwner: true, showUsername: false }
                ];
                setChatData(mockData);
            } catch (e) {
                setError(e.message);
                console.error("Failed to fetch chat history:", e);
            } finally {
                setLoading(false);
            }
        }

        fetchChatHistory();
    }, [userId]); // Added userId as a dependency if the fetch depends on it

    return (
        <div className="user-dashboard-container">
            <h1>Interface Utilisateur</h1>
            <div className="dashboard-stats">
                <Statistics />
            </div>
            
            <div className="chat-history">
                <h2>Historique de chat</h2>
                {loading && <p>Chargement de l'historique...</p>}
                {error && <p>Erreur de chargement de l'historique: {error}</p>}
                {!loading && !error && chatData.length > 0 ? (
                    chatData.map((chatItem) => (
                        <MessageItem 
                            key={chatItem.id || chatItem.message.text} // Use a stable unique ID, fallback to text if id is not present in mock
                            message={chatItem.message}
                            isOwner={chatItem.isOwner}
                            showUsername={chatItem.showUsername}
                        />
                    ))
                ) : (
                    !loading && !error && <p>Pas d'historique de chat disponible.</p>
                )}
            </div>

            <div className="profile-settings">
                <h2>Préférences de profil</h2>
                <p>Gérer votre compte et préférences</p>
                <button onClick={() => navigate(`/user/${userId}/editprofile`)}>
                    Changer infos de profil
                </button>
                <p>Abonnement</p>
                <button onClick={() => navigate(`/user/${userId}/abonnement`)}>
                    Abonnement
                </button>
                
            </div>
        </div>
    );
};

export default UserDashboard;
