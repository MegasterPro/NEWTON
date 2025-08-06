import React, { useState } from 'react';
import axios from 'axios';
import '../../css/Connexion.css';

export default function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:8000/login', {
        email,
        password
      });
  
      const { token, user } = response.data;
  
      // ✅ Stocke à la fois le token et les infos utilisateur
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
  
      setSuccess("Connexion réussie !");
      setError('');
  
      // Redirige vers l'espace parent
      navigate('/parent');
  
    } catch (error) {
      setSuccess('');
      setError(error.response?.data?.message || "Erreur de connexion.");
    }
  };
  

  return (
    <div className="connexion-dark-container">
      
      <div className="connexion-dark-card animate-slide-in">
      <h2 className="connexion-dark-title">🎓 Espace Parent</h2>

        {error && <div className="connexion-dark-error">{error}</div>}
        {success && <div className="connexion-dark-success">{success}</div>}

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