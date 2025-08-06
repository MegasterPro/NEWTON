import React from 'react';

const Announcements = () => {
  const news = [
    "📌 Reprise des cours le lundi 1 octobre.",
    "🎓 Réunion parents-professeurs prévue le 22 septembre.",
    "📷 Photos de classe le 30 septembre à 8h00."
  ];

  return (
    <section className="section announcements">
      <h2>Annonces importantes 📢</h2>
      <ul>
        {news.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </section>
  );
};

export default Announcements;
