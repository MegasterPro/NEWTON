import React, { useState } from 'react';
import axios from 'axios';
import '../../css/Connexion.css';

export default function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Exemple après un login réussi
axios.post('/api/login', { email, password })
.then((response) => {
  const { token, user } = response.data;
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  window.location.href = '/parent'; // ou navigate('/parent')
})
.catch((error) => {
  alert(error.response.data.message || 'Erreur');
});


  return (
    <div className="connexion-dark-container">
      
      <div className="connexion-dark-card animate-slide-in">
      <h2 className="connexion-dark-title">🎓 Espace Parent</h2>

        <form onSubmit={e => { e.preventDefault(); login(); }} className="connexion-dark-form">
          <input
            type="email"
            placeholder="Adresse e-mail"
            className="connexion-dark-input"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="connexion-dark-input"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="connexion-dark-button">Se connecter</button>
        </form>

        <p className="connexion-dark-footer">
          Nouveau ici ? <a href="/register">Créer un compte</a>
        </p>
      </div>
    </div>
  );
}