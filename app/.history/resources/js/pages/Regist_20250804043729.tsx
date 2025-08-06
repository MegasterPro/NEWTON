import React, { useState } from 'react';
import axios from 'axios';
import '../../css/Register.css'; // on peut fusionner les deux CSS si tu préfères



export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const register = async () => {
    if (password !== passwordConfirm) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const res = await axios.post('http://localhost:8000/api/register', {
        name,
        email,
        password,
        password_confirmation: passwordConfirm
      });
      setSuccess("Inscription réussie. Vérifiez votre email.");
      setError('');
    } catch (error) {
      setError(error.response?.data?.message || "Une erreur est survenue.");
    }
  };

  return (
    <div className="register-dark-container">
      <div className="register-dark-card animate-slide-in">
        <h2 className="register-dark-title">📝 Création de compte parent</h2>

        {error && <div className="register-dark-error">{error}</div>}
        {success && <div className="register-dark-success">{success}</div>}

        <form onSubmit={e => { e.preventDefault(); register(); }} className="register-dark-form">
          <input
            type="text"
            placeholder="Nom complet"
            className="register-dark-input"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Adresse e-mail"
            className="register-dark-input"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="register-dark-input"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            className="register-dark-input"
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
            required
          />
          <button type="submit" className="register-dark-button">S'inscrire</button>
        </form>

        <p className="register-dark-footer">
          Déjà inscrit ? <a href="/connexion">Se connecter</a>
        </p>
      </div>
    </div>
  );
}