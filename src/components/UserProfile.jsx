import React from 'react'
import {Link} from "react-router-dom"
function Profile() {
  return (
     
<main>
<div className="container mt-5">
<h1>Profile</h1>
<Link to="/user/userid/exportdata" className="btn btn-secondary mt-3">Exporter les données</Link><br/>
<Link to="/user/userid/editprofile" className="btn btn-secondary mt-3">
          Editer profil
        </Link><br/>
        <Link to="/password" className="btn btn-secondary mt-3">
          Changer mot de passe
        </Link><br/>
</div>
    </main>
  )
}

export default Profile