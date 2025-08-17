import React from "react";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" aria-labelledby="footer-heading">
      <div className="footer-glow" aria-hidden="true" />
      <h2 id="footer-heading" className="sr-only">Pied de page de l’école</h2>

      <div className="footer-container">
        {/* Brand / About */}
        <div className="footer-col brand">
          <div className="brand-row">
            <img src="/images/logo.png" alt="Logo de l'école" className="brand-logo" />
            <div>
              <h3 className="brand-name">Institut La Lumière</h3>
              <p className="brand-tag">Excellence • Discipline • Impact</p>
            </div>
          </div>
          <p className="brand-desc">
            Établissement d’excellence, nous accompagnons chaque élève vers la réussite
            par un encadrement rigoureux, des méthodes innovantes et des activités
            parascolaires riches (sciences, arts, langues).
          </p>

          <div className="badges">
            <span className="badge">Accrédité MEN</span>
            <span className="badge">STEM Ready</span>
            <span className="badge">Cambridge Prep</span>
          </div>
        </div>

        {/* Liens rapides */}
        <nav className="footer-col links" aria-label="Liens rapides">
          <h4>Liens rapides</h4>
          <ul>
            <li><a href="/#hero">Accueil</a></li>
            <li><a href="/actualites">Actualités</a></li>
            <li><a href="/programme">Programme</a></li>
            <li><a href="/clubs">Clubs & Activités</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/a-propos">À propos</a></li>
          </ul>
        </nav>

        {/* Pôles & Clubs */}
        <div className="footer-col academics">
          <h4>Pôles & Clubs</h4>
          <ul className="pill-list">
            <li><a href="/clubs/sciences">Sciences</a></li>
            <li><a href="/clubs/english">English</a></li>
            <li><a href="/clubs/litterature">Littérature</a></li>
            <li><a href="/clubs/arts">Arts</a></li>
            <li><a href="/clubs/sport">Sport</a></li>
            <li><a href="/clubs/robotique">Robotique</a></li>
            <li><a href="/clubs/informatique">Informatique</a></li>
          </ul>
          <div className="hours">
            <h5>Horaires</h5>
            <p>Lun–Ven : 08h00 – 18h00</p>
            <p>Sam : 09h00 – 13h00</p>
          </div>
        </div>

        {/* Contact */}
        <address className="footer-col contact">
          <h4>Contact</h4>
          <ul className="contact-list">
            <li>
              <svg viewBox="0 0 24 24" className="icon"><path d="M21 8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M12 5v7l4 2" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
              Lun–Sam · 08h–18h
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="icon"><path d="M2 5.5 10.5 12 2 18.5V5.5zM10.5 5.5 19 12l-8.5 6.5V5.5z" fill="currentColor"/></svg>
              <a href="mailto:contact@institutlalumiere.sn">contact@institutlalumiere.sn</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="icon"><path d="M2 3h20v18H2z" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M2 7l10 6L22 7" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
              <a href="tel:+221771234567">+221 77 123 45 67</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="icon"><path d="M12 2C7 2 3 6 3 11c0 7 9 11 9 11s9-4 9-11c0-5-4-9-9-9zm0 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="currentColor"/></svg>
              Thiès, Sénégal
            </li>
          </ul>

          <div className="socials" aria-label="Réseaux sociaux">
            <a href="#" aria-label="Facebook" className="social">
              <svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.3V12h2.3V9.8c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.5l-.4 2.9h-2.1v7A10 10 0 0 0 22 12z" fill="currentColor"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="social">
              <svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z" fill="currentColor"/></svg>
            </a>
            <a href="#" aria-label="YouTube" className="social">
              <svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8zM9.7 15.5V8.5L15.8 12l-6.1 3.5z" fill="currentColor"/></svg>
            </a>
            <a href="#" aria-label="X / Twitter" className="social">
              <svg viewBox="0 0 24 24"><path d="M18.2 3H21l-6.4 7.3L22 21h-5.7l-4.5-5.4L6.5 21H3l6.9-7.9L2.3 3H8l4.1 4.9L18.2 3z" fill="currentColor"/></svg>
            </a>
          </div>
        </address>

        {/* Newsletter */}
        <div className="footer-col newsletter">
          <h4>Newsletter</h4>
          <p>Reçois nos actus, événements et conseils pédagogiques.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Votre email" aria-label="Votre email" required />
            <button type="submit">S’inscrire</button>
          </form>

          <div className="mini-map">
            {/* Remplace par une iframe Google Maps si tu veux */}
            <div className="map-placeholder">Carte / Plan d’accès</div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {year} Institut La Lumière — Tous droits réservés</p>
        <ul className="legal">
          <li><a href="/mentions-legales">Mentions légales</a></li>
          <li><a href="/politique-confidentialite">Confidentialité</a></li>
          <li><a href="/conditions">Conditions</a></li>
        </ul>
      </div>
    </footer>
  );
}
