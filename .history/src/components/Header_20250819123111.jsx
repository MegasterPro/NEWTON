import React, { useState } from "react";
import "../styles/Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-container">
      <div className="header-left" onClick={toggleMenu}>
        <h3 className="logo-text">Menu</h3>
      </div>

      <div className="header-center">
        <img src="images/logo.png" alt="logo" className="logo-img" />
      </div>

      <nav className={`header-right ${isOpen ? "active" : ""}`}>
        <ul>
          <li style={{ "--i": 1 }}><a href="/">Accueil</a></li>
          <li style={{ "--i": 2 }}><a href="/actus">Actualités</a></li>
          <li style={{ "--i": 3 }}><a href="#">Program</a></li>
          <li style={{ "--i": 4 }}><a href="">À Propos</a></li>
          <li style={{ "--i": 5 }}><a href="#">Parent</a></li>
        </ul>
      </nav>
    </header>
  );
}
