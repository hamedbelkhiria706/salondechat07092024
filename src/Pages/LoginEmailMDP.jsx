import React,{useState} from 'react'
import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL;
import {Link, useNavigate} from 'react-router-dom'

function LoginEmailMDP({connecte,setConnecte,setToken}) {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [apiError, setApiError] = useState('');
    const [apiSuccess, setApiSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const validatePassword = (currentPassword) => {
        // Regex for password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if (passwordRegex.test(currentPassword)) {
            setIsPasswordValid(true);
            setPasswordError('');
        } else {
            setIsPasswordValid(false);
            setPasswordError('Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.');
        }
    };

    const handleLogin = async () => {
        setIsLoading(true);
        setApiError('');
        setApiSuccess('');

        try {
            const response = await axios.post(`${apiUrl}/api/users/login`, { email, password });
            
            // Assuming response.data contains at least a 'token'
            // e.g., response.data = { token: 'xyz...', user: { name: 'Test' } }
            // Adjust based on your actual API response structure
            if (response.data && response.data.token) {
                setToken(response.data.token); 
                setConnecte(true);
                setApiSuccess('Connexion réussie ! Redirection en cours...');
                // Optional: store other user data if present and needed
                // e.g., if (response.data.user) { setUserData(response.data.user); }
                
                setTimeout(() => {
                    navigate('/dashboard'); // Adjust the redirect path as needed
                }, 1500);
            } else {
                // Handle cases where response is successful (2xx) but no token
                console.error("Login successful but no token received in response:", response.data);
                setApiError('Réponse inattendue du serveur après la connexion.');
            }
        } catch (err) {
            console.error('Error making POST request:', err);
            if (err.response && err.response.data && err.response.data.message) {
                setApiError(err.response.data.message);
            } else if (err.response && err.response.status) {
                setApiError(`Erreur ${err.response.status}: ${err.response.statusText || 'Erreur de connexion'}`);
            } else if (err.request) {
                setApiError('Pas de réponse du serveur. Vérifiez votre connexion internet.');
            } else {
                setApiError('Erreur lors de la préparation de la requête de connexion.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic check, though button disabled state should mostly cover this
        if (isPasswordValid && email) {
            handleLogin();
        } else if (!email) {
            setApiError("L'adresse e-mail est requise.");
        } else if (!isPasswordValid) {
            // Password error is already shown by validatePassword
            // No need to set apiError here unless you want to override passwordError display
        }
    };

  return (
    <main>
        <h1>Connexion par login et mot de passe</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="email">Email:</label>
            <input 
                type="email" 
                id="email"
                value={email}
                required 
                onChange={(e)=>{
                    setEmail(e.target.value);
                    setApiError(''); 
                    setApiSuccess('');
                }}
            />
        </div>
        <br/>
        <div>
            <label htmlFor="password">Mot de passe:</label>
            <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e)=>{
                    const newPassword = e.target.value;
                    setPassword(newPassword);
                    validatePassword(newPassword);
                    setApiError('');
                    setApiSuccess('');
                }}  
                required
                style={{ borderColor: password ? (isPasswordValid ? 'green' : 'red') : undefined }}
            />
        </div>
        <br/>
        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        
        {isLoading && <p>Connexion en cours...</p>}
        {apiSuccess && <p style={{ color: 'green' }}>{apiSuccess}</p>}
        {apiError && <p style={{ color: 'red' }}>{apiError}</p>}
        
        <button type="submit" disabled={!isPasswordValid || !email || isLoading}>
            {isLoading ? 'Envoi en cours...' : 'Envoyer'}
        </button>
        </form><br/>
        <Link to='/resetpassword'><span className="flex-grow-1">Redéfinir votre mot de passe</span></Link>
    </main>
  )
}

export default LoginEmailMDP