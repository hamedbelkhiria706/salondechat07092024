import React, { useRef } from "react";  
import "../styles/global.css";

const EditProfile = () => {
    const formRef = useRef();  
    const submitted = (e) => {
        e.preventDefault();  
        alert('Mis à jour');  

         
        if (formRef.current) {
            formRef.current.reset();  
        }
    };

    return (
        <main>
            <div className="container mt-5">
                <h1 className="text-center">Modifier le Profil</h1>
                <div className="row mt-4">
                    <div className="col-12 col-md-8 offset-md-2">
                        <form ref={formRef} onSubmit={submitted}> {/* Attach ref to the form */}
                            <div className="form-group">
                                <label htmlFor="firstName">Prénom</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    required
                                    placeholder="Entrez votre prénom"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Nom de Famille</label>
                                <input
                                    type="text"
                                    required
                                    className="form-control"
                                    id="lastName"
                                    placeholder="Entrez votre nom de famille"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    required
                                    placeholder="Entrez votre adresse email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bio">Bio</label>
                                <textarea
                                    className="form-control"
                                    id="bio"
                                    required
                                    rows="3"
                                    placeholder="Parlez-nous de vous-même"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">
                                Enregistrer les Modifications
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default EditProfile;
