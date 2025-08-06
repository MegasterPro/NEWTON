import React, { useState } from 'react';
import axios from 'axios';
import '../../css/Connexion.css';

export default function Connexion() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [feedback, setFeedback] = useState({ error: '', success: '' });

  // 🔐 Fonction de connexion
  const login = async () => {
    try {
      const response = await axios.post('http://localhost:8000/login', credentials);

      const { token, user } = response.data;

      // 💾 Sauvegarde dans le localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      setFeedback({ success: 'Connexion réussie !', error: '' });

      // ⏩ Redirection
      window.location.href = '/parent';

    } catch (err) {
      const message = err.response?.data?.message || 'Erreur de connexion.';
      setFeedback({ success: '', error: message });
    }
  };

  // 🔄 Gère les changements d’input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  // 🧼 Formulaire JSX
  return (
    <div className="connexion-dark-container">
      <div className="connexion-dark-card animate-slide-in">
        <h2 className="connexion-dark-title">🎓 Espace Parent</h2>

        {feedback.error && <div className="connexion-dark-error">{feedback.error}</div>}
        {feedback.success && <div className="connexion-dark-success">{feedback.success}</div>}

        <form 
          onSubmit={e => { e.preventDefault(); login(); }} 
          className="connexion-dark-form"
        >
          <input
            type="email"
            name="email"
            placeholder="Adresse e-mail"
            className="connexion-dark-input"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            className="connexion-dark-input"
            value={credentials.password}
            onChange={handleChange}
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
