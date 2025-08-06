import React from 'react';
import Header from './components/Header';
import BulletinRequest from '../components/B';
import QuestionForm from './components/QuestionForm';
import Announcements from './components/Announcements';
import '../../css/Parent.css';

const Parent = () => {
  const storedUser = localStorage.getItem('user');
  const parsedUser = storedUser ? JSON.parse(storedUser) : null;
  const studentName = parsedUser?.student_name || "Nom inconnu";

  return (
    <div className="parent-container">
      <Header onLogout={() => {
        localStorage.clear();
        window.location.href = '/accueil';
      }} />

      <main className="parent-main">
        <section className="intro">
          <h2>Bienvenue, tuteur de {studentName} 👋</h2>
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
