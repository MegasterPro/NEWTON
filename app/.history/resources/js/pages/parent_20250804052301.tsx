import React, { useState } from 'react';
import './Parent.css';

const Parent = () => {
  const studentName = "Moussa Diop"; // À rendre dynamique
  const [question, setQuestion] = useState('');

  const handleSendRequest = () => {
    alert("Votre requête de bulletin a été envoyée automatiquement à l'établissement.");
  };

  const handleSendQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Votre question a été envoyée à l'établissement.");
    setQuestion('');
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Lycée Malick Sy</h1>
        <button className="logout-button">Se déconnecter</button>
      </div>

      <div className="section">
        <h2>Bienvenue, tuteur de {studentName} 👋</h2>
        <p>
          Cet espace parent vous permet de suivre la scolarité de votre enfant. 
          Vous pouvez soumettre une demande de bulletin, poser des questions à l'établissement 
          et recevoir les dernières annonces.
        </p>
        <button className="button" onClick={handleSendRequest}>Demander le bulletin 📄</button>
      </div>

      <div className="section">
        <h2>Poser une question à l'école 📨</h2>
        <form onSubmit={handleSendQuestion}>
          <label htmlFor="question">Votre message</label>
          <textarea
            id="question"
            rows={4}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Exemple : Puis-je avoir une réunion avec le professeur principal ?"
            required
          />
          <button className="button" type="submit">Envoyer</button>
        </form>
      </div>

      <div className="section">
        <h2>Annonces importantes 📢</h2>
        <ul>
          <li>📌 Reprise des cours le lundi 15 septembre.</li>
          <li>🎓 Réunion parents-professeurs prévue le 22 septembre.</li>
          <li>📷 Photos de classe le 30 septembre à 8h00.</li>
        </ul>
      </div>
    </div>
  );
};

export default Parent;
