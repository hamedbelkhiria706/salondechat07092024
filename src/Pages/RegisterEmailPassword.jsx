 
import React,{useState} from 'react'
import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL;
/*
axios.defaults.withCredentials = true; 
axios.defaults.xsrfCookieName = 'XSRF-TOKEN'; 
axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';*/
function RegisterEmailPassword() {
  const [email,setEmail]=useState('')
      const [password,setPassword]=useState('')
      const [isValid, setIsValid] = useState(false);
      const [error, setError] = useState('');
      const [data,setData]=useState('')
      const [result,setResult]=useState('')
      const handlePostRequest = async () => { 
        try { const response = await axios.post(apiUrl+'/api/users/register',
        // 
   { email: email, password: password });
    setData(response.data);
    console.log(data);
  setResult('Inscription faite avec succès.');
  }
     catch (error) { console.log('Error making POST request:', error);
setResult('Inscription déjà faite.');

      } };
      const validatePassword = (password) => {
          // Regex for password validation
          const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
          
          if (passwordRegex.test(password)) {
              setIsValid(true);
              setError(''); // Clear error message if valid
          } else {
              setIsValid(false);
              setError('Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.');
          }
        };
        
      const handleSubmit=(e)=>{
          e.preventDefault();
          console.log(email)
          console.log(password)
          handlePostRequest()
          console.log(data)
      }
    return (
      <main  >
          <h1>Inscription par login et mot de passe</h1>
          <form onSubmit={handleSubmit}>
          <h2>Email:</h2>
          <input type="email" required onChange={(e)=>setEmail(e.target.value)}></input>
          <br/>
          <h2>Mot de passe:</h2>
          <input type="password" onChange={(e)=>{
              
              setPassword(e.target.value);
              validatePassword(e.target.value);
          }}  required
                style={{ borderColor: isValid ? 'green' : 'red' }}
                ></input>
          <br/> {/* confirmer email sans conf compte */}
          {!isValid && error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="sumbit" disabled={!isValid}>Envoyer</button>
          {result}
          </form>
      </main>
    )
}

export default RegisterEmailPassword