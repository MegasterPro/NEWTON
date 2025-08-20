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
        <h3 className="logo-text bg-blue-500 px-4 py-3 text-white hover:bg-blue-400">Menu</h3>
      </div>

      <div className="header-center">
        <img src="images/logo.png" alt="logo" className="logo-img" />
      </div>

      <nav className={`header-right ${isOpen ? "active" : ""}`}>
        <ul>
          <li style={{ "--i": 1 }}><a href="/">Accueil</a></li>
          <li style={{ "--i": 2 }}><a href="#Another">Sur nous</a></li>
          <li style={{ "--i": 3 }}><a href="/program">Program</a></li>
          <li style={{ "--i": 4 }}><a href="/apropos">À Propos</a></li>
          <li style={{ "--i": 5 }}><a href="/parent">Parent</a></li>
        </ul>
      </nav>
    </header>
  );
}
