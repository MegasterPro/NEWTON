import React, { useState } from 'react';
import '../../css/Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header p-4">
      <div className="text-white font-bold text-xl cursor-pointer" onClick={() => setOpen(!open)}>
        Menu
      </div>
      <img src="build/assets/image.png" width={99} alt="LOGO" />
      <button type="submit" className="connexion-btn">
        <a href="/connexion">Connexion</a>
      </button>

      <nav className={`nav-slide ${open ? 'open' : ''}`}>
        <div className="navi">
        <ul>
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#apropos">À propos</a></li>
          <li><a href="#programme">Programme</a></li>
          <li><a href="#actualites">Actualités</a></li>
          <li><a href="#parents">Parents</a></li>
        </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
