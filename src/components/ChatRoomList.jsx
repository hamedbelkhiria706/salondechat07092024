import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'; // Importer un Spinner pour l'état de chargement
import Alert from 'react-bootstrap/Alert'; // Importer Alert pour les erreurs
import { useParams } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;

function ChatRoomList({ token }) { // Garde token au cas où il serait utile plus tard
    const { userId } = useParams();
    const [chatRooms, setChatRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Encapsuler la fonction de fetch dans useCallback
    const fetchChatRooms = useCallback(async () => {
        setLoading(true); // Commencer le chargement
        setError(null); // Réinitialiser les erreurs précédentes
        try {
            // Si le token est nécessaire pour l'authentification:
            // const headers = { Authorization: `Bearer ${token}` };
            // const response = await axios.post(apiUrl + '/api/chatroom/tgetchatroomsbyuser', { _id: userId }, { headers });

            // Si le token n'est pas nécessaire:
            const response = await axios.post(apiUrl + '/api/chatroom/tgetchatroomsbyuser', { _id: userId });

            if (response && response.data) {
                // Supposons que response.data est un tableau d'objets chatroom [{_id: '1', name: 'Room 1'}, ...]
                setChatRooms(response.data);
            } else {
                setChatRooms([]); // Réponse vide ou inattendue
            }
        } catch (exception) {
            console.error("Erreur lors de la récupération des chat rooms:", exception); // Garder console.error pour le débogage dev
            setError("Impossible de charger la liste des chat rooms. Veuillez réessayer."); // Message pour l'utilisateur
            setChatRooms([]); // Vider les chatrooms en cas d'erreur
        } finally {
            setLoading(false); // Fin du chargement (succès ou erreur)
        }
    }, [userId]); // Ajouter userId comme dépendance de useCallback

    // Utiliser useEffect pour appeler fetchChatRooms au montage et si fetchChatRooms change (donc si userId change)
    useEffect(() => {
        fetchChatRooms();
    }, [fetchChatRooms]); // fetchChatRooms est maintenant une dépendance stable grâce à useCallback

    const renderContent = () => {
        if (loading) {
            return <Spinner animation="border" role="status">
                <span className="visually-hidden">Chargement...</span>
            </Spinner>;
        }

        if (error) {
            return <Alert variant="danger">{error}</Alert>;
        }

        if (chatRooms.length === 0) {
            return <p>Aucune chat room trouvée pour cet utilisateur.</p>;
        }

        return (
            <ul>
                {/* Utiliser un ID unique comme clé si disponible (ex: e._id) */}
                {/* Afficher une propriété pertinente (ex: e.name) */}
                {chatRooms.map((room) => (
                    <li key={room._id || room.id}> {/* Assurez-vous que room a une propriété _id ou id */}
                        {room.name || `Chat Room ID: ${room._id || room.id}`} {/* Affichez le nom ou un fallback */}
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div>
            <h1>Liste de chat rooms</h1>
            {/* Afficher le nombre seulement si pas d'erreur et pas en chargement initial */}
            {!loading && !error && <h2>Nombre : {chatRooms.length}</h2>}

            {/* Bouton pour recharger manuellement */}
            <Button onClick={fetchChatRooms} disabled={loading} className="mb-3">
                {loading ? 'Chargement...' : 'Recharger'}
            </Button>

            {/* Afficher le contenu (chargement, erreur, liste ou message vide) */}
            {renderContent()}

        </div>
    );
}

export default ChatRoomList;
