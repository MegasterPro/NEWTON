import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Headera from '../components/Headera';
import BulletinRequest from '../components/BulletinRequest';
import QuestionForm from '../components/QuestionForm';
import Announcements from '../components/Announcements';
import '../../css/Parent.css';

const Parent = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('http://localhost:8000/me', {
          headers: {
            'Accept': 'application/json',
          },
          credentials: 'include',
        });

        if (!res.ok) {
          navigate('/login');
        } else {
          const data = await res.json();
          setUser(data);
          localStorage.setItem('user', JSON.stringify(data));
        }
      } catch (error) {
        console.error('Erreur de vérification:', error);
        navigate('/login');
      }
    };

    checkAuth();
  }, [navigate]);

  if (!user) return <div>Chargement...</div>;

  const name = user.name || "Nom inconnu";

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
