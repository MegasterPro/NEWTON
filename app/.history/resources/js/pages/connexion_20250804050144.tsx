import React, { useState } from 'react';
import '../../css/Connexion.css';

export default function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = () => {
    Inertia.post('/login', { email, password }, {
      onError: (errors) => {
        if (errors.email || errors.password) {
          setError('Identifiants invalides.');
        }
      },
    });
  };

  return (
    <div className="connexion-dark-container">
      <div className="connexion-dark-card animate-slide-in">
        <h2 className="connexion-dark-title">🎓 Espace Parent</h2>
        
        {error && <div className="connexion-dark-error">{error}</div>}
        
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
          <button type="submit" className="connexion-dark-button">Connexion</button>
        </form>

        <p className="connexion-dark-footer">
          Vous n’avez pas de compte ? <a href="/register">Créer un compte</a>
        </p>
      </div>
    </div>
  );
}
