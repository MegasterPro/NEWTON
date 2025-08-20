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
        <h3 className="logo-text"><svg height="40" width="40" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
	<g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
		<path d="M6.25 25h37.5" stroke="#344054"/>
		<path d="M6.25 12.5h37.5m-37.5 25h37.5z" stroke="#306CFE"/>
	</g>
</svg>ME</h3>
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
