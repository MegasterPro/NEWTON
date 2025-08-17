import React from "react";
import "../styles";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-left">
        <h3 className="logo-text">Menu</h3>
      </div>

      <div className="header-center">
        <img src="logo.png" alt="logo" className="logo-img" />
      </div>

      <nav className="header-right">
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Actualités</a></li>
          <li><a href="#">Program</a></li>
          <li><a href="#">À Propos</a></li>
          <li><a href="#">Parent</a></li>
        </ul>
      </nav>
    </header>
  );
}
