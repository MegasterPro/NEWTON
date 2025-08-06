import React from 'react';
import '../../css/Connexion.css';

export default function VerifyEmail() {
  return (
    <div className="connexion-dark-container">
      <div className="connexion-dark-card animate-slide-in">
        <h2 className="connexion-dark-title">📨 Vérification en attente</h2>
        <p className="connexion-dark-text">
          Un lien de vérification vous a été envoyé par e-mail. <br />
          Veuillez cliquer dessus pour activer votre compte.
        </p>
        <p className="connexion-dark-text">
          Si vous n’avez rien reçu, vérifiez votre dossier spam ou
          <a href="/resend-verification" className="connexion-dark-link"> cliquez ici pour le renvoyer</a>.
        </p>
      </div>
    </div>
  );
}
