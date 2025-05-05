import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
// import { useParams } from 'react-router-dom'; // Si userId vient des paramètres d'URL

const apiUrl = import.meta.env.VITE_API_URL;

// Supposons que le token et userId sont passés en props
function CreateChatroom({ token, userId }) {
    const [roomName, setRoomName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    // const { userId } = useParams(); // Alternative si userId vient de l'URL

    const handleRoomNameChange = (event) => {
        setRoomName(event.target.value);
        // Réinitialiser les messages d'erreur/succès lors de la saisie
        setError(null);
        setSuccess(null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Empêche le rechargement de la page
        if (!roomName.trim()) {
            setError("Le nom du salon ne peut pas être vide.");
            return;
        }

        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const payload = {
                name: roomName,
                // Ajoutez d'autres données nécessaires, par exemple l'ID du créateur
                // createdBy: userId, // Assurez-vous que le backend attend cela
            };

            // Adaptez l'URL et la méthode (POST, etc.) selon votre API
            const endpoint = apiUrl + '/api/chatroom/create'; // Exemple d'URL

            // Inclure le token si l'API l'exige
            const headers = token ? { Authorization: `Bearer ${token}` } : {};

            const response = await axios.post(endpoint, payload, { headers });

            // Supposons que la réponse contient la salle créée ou un message de succès
            console.log("Réponse de création:", response.data);
            setSuccess(`Salon "${roomName}" créé avec succès !`);
            setRoomName(''); // Vider le champ après succès

        } catch (err) {
            console.error("Erreur lors de la création du salon:", err);
            // Essayer d'afficher un message d'erreur plus spécifique si possible
            const errorMessage = err.response?.data?.message || "Une erreur est survenue lors de la création du salon.";
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Créer un salon de chat</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="roomNameInput">
                    <Form.Label>Nom du Salon :</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Entrez le nom du nouveau salon"
                        value={roomName}
                        onChange={handleRoomNameChange}
                        disabled={loading}
                        required // Ajoute la validation HTML5 de base
                    />
                </Form.Group>

                {/* Affichage des messages d'erreur ou de succès */}
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}

                <Button variant="primary" type="submit" disabled={loading}>
                    {loading ? (
                        <>
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            <span className="ms-2">Création...</span>
                        </>
                    ) : (
                        'Créer le Salon'
                    )}
                </Button> 
            </Form>
        </div>
    );
}

export default CreateChatroom;
