import React,{useState} from 'react'
import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL;

function ResetPassword() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState('');
    const [data,setData]=useState('');
    const [result,setResult]=useState('')
    const handlePostRequest = async () => { 
      try { const response = await axios.post(apiUrl+'/api/users/resetpassword',
      // 
 { email: email, password: password });
   setData(response.data); // Vous pouvez utiliser response.data si nécessaire
  setResult('Votre mot de passe a été réinitialisé avec succès.')
  console.log('Réponse de la réinitialisation:', response.data);

}
   catch (error) { console.log('Error making POST request:', error);

     setResult('Erreur lors de la réinitialisation du mot de passe. Veuillez vérifier votre e-mail ou réessayer.');
    
    } };
    const validatePassword = (password) => {
       
        // Regex for password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        
        if (passwordRegex.test(password)) {
            setIsValid(true);
            setError(''); // Clear error message if valid
            
            
        } else {
            setIsValid(false);
          setError('Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial (ex: !@#$%^&*).');
          }
         
      };
      
    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(email)
        console.log(password)
        handlePostRequest()
        
    }
  return (
    <main>
        <h1>Réinitialiser mot de passe</h1>
         <p>Veuillez saisir votre adresse e-mail et votre nouveau mot de passe ci-dessous.</p>
        
        
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Adresse e-mail :</label>
          <input id="email" name="email" type="email" required onChange={(e)=>setEmail(e.target.value)} placeholder="exemple@domaine.com" />
        </div> <br/>
        <h2>Mot de passe:</h2>
        <div>
          <label htmlFor="password">Nouveau mot de passe :</label>
          <input 
              id="password"
              name="password"
              type="password" 
              onChange={(e)=>{
                  setPassword(e.target.value);
                  validatePassword(e.target.value);
              }}  
              required
              style={{ borderColor: isValid ? 'green' : 'red' }}
             
              placeholder="Votre nouveau mot de passe"
          />
        </div>
        <br/>
        {!isValid && error && <p style={{ color: 'red' }}>{error}</p>}
        {result && <p style={{ color: result.includes('Erreur') ? 'red' : 'green' }}>{result}</p>}
        <button type="submit" disabled={!isValid}>Envoyer</button>
         </form>
    </main>
  )
}

export default ResetPassword