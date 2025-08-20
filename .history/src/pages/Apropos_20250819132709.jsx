import React from "react";
import "../";

const Apropos = () => {
  const valeurs = [
    {
      titre: "Discipline",
      description: "Nous croyons en une éducation structurée qui guide les élèves vers l’excellence.",
    },
    {
      titre: "Engagement",
      description: "Chaque élève est accompagné pour donner le meilleur de lui-même.",
    },
    {
      titre: "Productivité",
      description: "Nous encourageons l’autonomie et l’efficacité dans le travail scolaire.",
    },
    {
      titre: "Innovation",
      description: "Nous intégrons la technologie et la créativité pour préparer l’avenir.",
    },
  ];

  return (
    <div className="apropos-container">
      <h1 className="apropos-title">À Propos de Nous</h1>
      <p className="apropos-intro">
        Bienvenue sur la plateforme du <strong>Lycée Malick Sy</strong>.  
        Notre mission est d’accompagner chaque élève vers la réussite, 
        en cultivant la discipline, la curiosité et l’innovation.
      </p>

      <div className="apropos-cards">
        {valeurs.map((valeur, index) => (
          <div key={index} className="apropos-card">
            <h2>{valeur.titre}</h2>
            <p>{valeur.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apropos;
