import React from "react";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* Vidéo de fond */}
      <video src="hero.mp4" autoPlay loop muted playsInline></video>

      {/* Overlay sombre */}
      <div className="overlay"></div>

      {/* Contenu centré */}
      <div className="hero-content">
        <h1>Bienvenue à l'institut la lumière</h1>
        <p>Innovation, Discipline et Excellence dans l’éducation</p>
        <a href="#program" className="hero-btn">Découvrir</a>
      </div>
    </section>
  );
}
