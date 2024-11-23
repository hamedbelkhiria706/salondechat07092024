import React from 'react'

function QuiSommesNous() {
  return (
    <div className="col-md-7 flex-column">
                      <div className="w-100 p-md-5 p-4">
                        <h2>Qui sommes-nous ?</h2>
                        <p>
                          Notre projet a été fondé avec une mission claire :
                          rendre la communication simple, rapide et accessible à
                          tous. Nous croyons que la communication instantanée
                          devrait être fluide, sécurisée et à la portée de tous.
                        </p>
                        <hr />
                        <h2>Nos valeurs</h2>
                        <ul>
                          <li>
                            <strong>Innovation</strong> : Nous sommes
                            constamment à la recherche de nouvelles façons
                            d'améliorer l’expérience de chat pour nos
                            utilisateurs.
                          </li>
                          <li>
                            <strong>Sécurité</strong> : Protéger les données de
                            nos utilisateurs est notre priorité numéro un.
                          </li>
                          <li>
                            <strong>Accessibilité</strong> : Nous croyons que
                            tout le monde, quelle que soit sa situation, doit
                            avoir accès à des outils de communication puissants
                            et fiables.
                          </li>
                        </ul>
                        <hr />
                        <h2>Notre équipe</h2>
                        <p>
                          Notre équipe est composée de développeurs, designers,
                          et experts en sécurité dédiés à fournir une
                          application de chat qui évolue avec les besoins des
                          utilisateurs. Ensemble, nous avons pour but de faire
                          de [Nom de l’App] la meilleure plateforme de chat
                          disponible.
                        </p>
                        <button className="btn btn-primary">
                          [Rejoignez notre communauté]
                        </button>
                      </div>
                    </div>
  )
}

export default QuiSommesNous