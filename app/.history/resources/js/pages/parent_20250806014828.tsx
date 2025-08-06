import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Headera from '../components/Headera';
import BulletinRequest from '../components/BulletinRequest';
import QuestionForm from '../components/QuestionForm';
import Announcements from '../components/Announcements';
import '../../css/Parent.css';

const Parent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ fonction async déclarée séparément
    const checkAuth = async () => {
      try {
        const res = await fetch('http://localhost:8000/me', {
          headers: {
            'Accept': 'application/json',
            // 'Authorization': `Bearer ${localStorage.getItem('token')}`, // si tu utilises un token
          },
          credentials: 'include', // utile si tu utilises Sanctum
        });

        if (res.ok) {
          const user = await res.json();
          console.log(user); // ou setState(user)
        } else {
          window.location.href = '/parent';
        }
        
      } catch (error) {
        console.error('Erreur de vérification:', error);
        navigate('/login');
      }
    };

    checkAuth(); // appel ici
  }, [navigate]); // ✅ ajoute navigate ici comme dépendance

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
