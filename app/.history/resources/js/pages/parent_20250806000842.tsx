import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Headera from '../components/Headera';
import BulletinRequest from '../components/BulletinRequest';
import QuestionForm from '../components/QuestionForm';
import Announcements from '../components/Announcements';
import '../../css/Parent.css';

const Parent = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch('/api/user', {
        headers: {
          'Accept': 'application/json',
        },
        credentials: 'include', // important !
      });

      if (res.status !== 200) {
        navigate('/login'); // redirige si non connecté
      }
    };

    checkAuth();
  }, [query]);

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
