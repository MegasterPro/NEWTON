import React from 'react';
import '../../css/Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <video className="hero-video" autoPlay muted loop>
        <source src="build/videos/bg-school.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>
      {/* <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            THE <br /> EXCELLENCE
          </h1>
          <button>
            Inscription
          </button>
        </div>
        <img
          src="build/assets/student.png"
          alt="Élève modèle"
          className="hero-student"
        />
      </div> */}
    </div>
  );
};

export default Hero;