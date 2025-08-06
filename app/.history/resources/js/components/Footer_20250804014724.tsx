import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import '../../css/footer.css'; // si tu veux utiliser ton propre style en plus

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <h2>À propos</h2>
        <p>
          Nous sommes une équipe passionnée par la technologie et l'innovation.
          Notre mission est de fournir des solutions simples et efficaces pour le monde moderne.
        </p>
      </div>

      <div className="footer-right">
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Téléphone : +221 77 000 00 00</p>
          <p>Email : contact@exemple.com</p>
        </div>
        <div className="footer-social">
          <h3>Email & Réseaux</h3>
          <p>contact@exemple.com</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;