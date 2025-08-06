import React, { useState } from 'react';

const QuestionForm = () => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Votre question a été envoyée à l'établissement.");
    setQuestion('');
    // Tu pourras faire un POST vers /api/questions plus tard ici
  };

  return (
    <section className="section question-form">
      <h2>Poser une question 📨</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Votre message</label>
        <textarea
          id="question"
          rows={4}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Exemple : Puis-je avoir une réunion avec le professeur principal ?"
          required
        />
        <button className="button" type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default QuestionForm;
