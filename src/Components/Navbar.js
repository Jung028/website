import React, { useState } from 'react';
import '../Styles/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><a href="/projects">Projects</a></li>
        <li className="nav-item"><a href="/experience">Experience</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
