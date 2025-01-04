import React,{useState} from 'react'

function LoginEmailMDP() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email)
        console.log(password)
    }
  return (
    <div>
        <h1>Connexion par login et mot de passe</h1>
        <form onSubmit={handleSubmit}>
        <h2>Email:</h2>
        <input type="email" onChange={(e)=>setEmail(e.target.value)}></input>
        <br/>
        <h2>Mot de passe:</h2>
        <input type="password" onChange={(e)=>setPassword(e.target.value)}></input>
        <br/>
        <button type="sumbit">Envoyer</button>
        </form>
    </div>
  )
}

export default LoginEmailMDP