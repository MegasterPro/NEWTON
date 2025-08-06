import React from 'react';

const BulletinRequest = () => {
  const handleRequest = () => {
    alert("Votre requête de bulletin a été envoyée automatiquement à l'établissement.");
    // Ici tu appelleras un endpoint réel plus tard
  };

  return (
    <section className="section bulletin-request">
      <h2>Demande de bulletin 📄</h2>
      <p>Vous pouvez demander à recevoir le dernier bulletin de votre enfant directement ici.</p>
      <button className="button" onClick={handleRequest}>Demander le bulletin</button>
    </section>
  );
};

export default BulletinRequest;
