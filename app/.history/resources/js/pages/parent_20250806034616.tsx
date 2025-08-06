import React, { useEffect } from 'react';
import Headera from '../components/Headera';
import BulletinRequest from '../components/BulletinRequest';
import QuestionForm from '../components/QuestionForm';
import Announcements from '../components/Announcements';
import '../../css/Parent.css';

const Parent = () => {
  // 🔐 Vérification de l'authentification via Sanctum ou autre système
  const checkAuth = async () => {
    try {
      const res = await fetch('http://localhost:8000/me', {
        headers: {
          'Accept': 'application/json',
        },
        credentials: 'include',
      });

      if (!res.ok) {
        window.location.href = '/login';
        return;
      }

      const user = await res.json();
      console.log(user); // Tu peux setState ici si tu veux afficher plus tard
    } catch (error) {
      console.error('Erreur de vérification :', error);
      window.location.href = '/login';
    }
  };

  // 🧠 Appel de checkAuth au montage du composant
  useEffect(() => {
    checkAuth();
  }, []);

  // 🧾 Récupération du nom de l'utilisateur depuis le localStorage
  const storedUser = localStorage.getItem('user');
  const parsedUser = storedUser ? JSON.parse(storedUser) : null;
  const name = parsedUser?.name || "Nom inconnu";

  return (
    <div className="parent-container">
      <Headera onLogout={() => {
        localStorage.clear();
        window.location.href = '/accueil';
      }} />

      <main className="parent-main">
        <section className="intro">
          <h2>Bienvenue, tuteur de {name} 👋</h2>
          <p>
            Cet espace parent vous permet de suivre la scolarité de votre enfant.
            Vous pouvez demander un bulletin, poser vos questions et consulter les dernières annonces.
          </p>
        </section>

        <BulletinRequest />
        <QuestionForm />
        <Announcements />
      </main>
    </div>
  );
};

export default Parent;
