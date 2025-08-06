import React from 'react';
import '../../css/Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <video className="hero-video" autoPlay muted loop>
        <source src="build/videos/bg-school.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>
    </div>
  );
};

export default Hero;