// Navigation.js
import React, { useState } from 'react';
import '../styles/_navigation.scss';

const Navigation = ({ onCategorySelect }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleCategoryChange = (category) => {
    onCategorySelect(category);
    setMenuOpen(false);
  };

  return (
    <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
      <ul className="nav-links">
        <li onClick={() => handleCategoryChange('Action')}>Action</li>
        <li onClick={() => handleCategoryChange('Adventure')}>Adventure</li>
        <li onClick={() => handleCategoryChange('Family')}>Family</li>
        <li onClick={() => handleCategoryChange('All')}>All</li>
      </ul>
      <div className="hamburger" onClick={() => setMenuOpen(!isMenuOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navigation;