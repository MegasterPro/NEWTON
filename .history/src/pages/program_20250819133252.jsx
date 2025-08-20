import React from "react";
import "../styles/";

const Programme = () => {
  const courses = [
    { title: "Mathématiques", desc: "Algèbre, géométrie, analyse et statistiques." },
    { title: "Physique-Chimie", desc: "Expériences, lois fondamentales et applications." },
    { title: "SVT", desc: "Biologie humaine, géologie et environnement." },
    { title: "Informatique", desc: "Programmation, algorithmique et cybersécurité." },
    { title: "Langues", desc: "Français, Anglais, Espagnol (expression et culture)." },
  ];

  return (
    <section className="programme">
      <h1>Programme Scolaire</h1>
      <p className="intro">
        Voici un aperçu du programme scolaire proposé par notre établissement :
      </p>
      <div className="programme-list">
        {courses.map((course, index) => (
          <div className="programme-card" key={index}>
            <h2>{course.title}</h2>
            <p>{course.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programme;
