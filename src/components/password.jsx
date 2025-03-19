import React from "react";
import "../styles/global.css";
import {Link} from 'react-router-dom'
import {useRef,useState} from "react";

const password = () => {
 
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState('');

  const cp=useRef("")
  const np=useRef("")
  const cnp=useRef("")

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
  const handleChange = () => {
    const password = np.current.value;
    validatePassword(password);
  };
  const passwordreset=()=>{
    var x1=cp.current.value
    var x2=np.current.value
    var x3=cnp.current.value
    if(x2!=x3){
      alert('mot de passe et confirmation ne correspondent pas')
    }
    else{
      cp.current.value=""
      np.current.value=""
      cnp.current.value=""
      alert('mot de passe changé')
    }
  }
  return (
    <main>
      <div className="container mt-5">
        <h1>Modifier le Mot de Passe</h1>

        <form>
          <div className="form-group">
            <label for="current-password" >Mot de passe actuel</label>
            <input
              type="password"
              className="form-control"
              id="current-password" ref={cp}
              placeholder="Entrez votre mot de passe actuel"
              required
            />
          </div>
          <div className="form-group">
            <label for="new-password" >Nouveau mot de passe</label>
            <input
              type="password"
              className="form-control"
              id="new-password" ref={np} onChange={handleChange}
              placeholder="Entrez un nouveau mot de passe"
              required
              style={{ borderColor: isValid ? 'green' : 'red' }}
              />
              {!isValid && error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
          <div className="form-group">
            <label for="confirm-password">
              Confirmer le nouveau mot de passe
            </label>
            <input
              type="password"
              className="form-control" onChange={handleChange}
              id="confirm-password" ref={cnp}
              placeholder="Confirmez le nouveau mot de passe"
              required
            />
          </div>
          <button type="button" onClick={()=>{passwordreset()}} disabled={!isValid} className="btn btn-primary">
            Mettre à jour le mot de passe
          </button>
        </form>
        <Link to="/profile" className="btn btn-secondary mt-3">
          Retour au profil
        </Link>
        
        <Link to="/editprofile" className="btn btn-secondary mt-3">
          Changer profile
        </Link>
      </div>
    </main>
  );
};
export default password;
