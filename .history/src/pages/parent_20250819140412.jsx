// src/pages/Parent.jsx
import React from "react";
import "../st/parent.css";

const Parent = () => {
  return (
    <div className="parent-container">
      <h1>Espace Parents</h1>

      <section className="bulletins">
        <h2>📅 Récupération des bulletins</h2>
        <ul>
          <li><strong>1er Semestre :</strong> 20 Février 2025</li>
          <li><strong>2nd Semestre :</strong> 10 Juin 2025</li>
        </ul>
      </section>

      <section className="concours">
        <h2>🏆 Ouverture des concours</h2>
        <p>
          Les concours internes et externes débuteront le <strong>15 Mars 2025</strong>.  
          Les inscriptions sont ouvertes dès maintenant auprès de la vie scolaire.
        </p>
      </section>

      <section className="clubs">
        <h2>🎯 Pourquoi intégrer un club ?</h2>
        <p>
          Chaque élève est encouragé à rejoindre un club afin de développer ses compétences,  
          renforcer l’esprit d’équipe et enrichir son parcours scolaire.
        </p>

        <div className="clubs-list">
          <div className="club">
            <h3>🔬 Club Science</h3>
            <p>Encourager la curiosité scientifique à travers des expériences et projets innovants.</p>
          </div>
          <div className="club">
            <h3>💻 Club Informatique</h3>
            <p>Apprendre la programmation, la robotique et la cybersécurité dès le lycée.</p>
          </div>
          <div className="club">
            <h3>📖 Club Lecture & Culture</h3>
            <p>Développer l’esprit critique et la culture générale grâce aux lectures partagées.</p>
          </div>
          <div className="club">
            <h3>⚽ Club Sport</h3>
            <p>Favoriser la santé, la discipline et le travail d’équipe à travers différentes activités sportives.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parent;