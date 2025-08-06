import React from 'react';

interface HeaderProps {
  onLogout: () => void;
}

const Header = ({ onLogout }: HeaderProps) => (
  <header className="header">
    <h1>Institut La Lumière</h1>
    <button className="logout-button" onClick={onLogout}>Se déconnecter</button>
  </header>
);

export default Header;
