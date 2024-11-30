import React from 'react'
import {Link} from "react-router-dom"
function Profile() {
  return (
     
<main>
<div className="container mt-5">
<h1>Profile</h1>
<Link to="/exportdata">Exporter les données</Link>
</div>
    </main>
  )
}

export default Profile