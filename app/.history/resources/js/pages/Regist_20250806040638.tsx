import React, { useState } from 'react';
import axios from 'axios';
import '../../css/Register.css'; // fusionnable avec Connexion.css si styles similaires

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = async () => {
    try {
      const res = await axios.post('http://localhost:8000/register', form);

      setSuccess("Inscription réussie. Vérifiez votre e-mail.");
      setError('');

      // 🔐 Redirection vers la page de vérification
      window.location.href = "/verify-email";
    } catch (err) {
      if (err.response?.data?.errors) {
        const firstError = Object.values(err.response.data.errors)[0][0];
        setError(firstError);
      } else {
        setError(err.response?.data?.message || "Une erreur est survenue.");
      }

      setSuccess('');
    }
  };

  return (
    <div className="register-dark-container">
      <div className="register-dark-card animate-slide-in">
        <h2 className="register-dark-title">📝 Création de compte parent</h2>

        {error && <div className="register-dark-error">{error}</div>}
        {success && <div className="register-dark-success">{success}</div>}

        <form 
          onSubmit={e => { e.preventDefault(); register(); }} 
          className="register-dark-form"
        >
          <input
            type="text"
            name="name"
            placeholder="Nom complet"
            className="register-dark-input"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Adresse e-mail"
            className="register-dark-input"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            className="register-dark-input"
            value={form.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password_confirmation"
            placeholder="Confirmer le mot de passe"
            className="register-dark-input"
            value={form.password_confirmation}
            onChange={handleChange}
            required
          />
          <button type="submit" className="register-dark-button">S'inscrire</button>
        </form>

        <p className="register-dark-footer">
          Déjà inscrit ? <a href="/login">Se connecter</a>
        </p>
      </div>
    </div>
  );
}
