// Header.js
import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MovieStream</div>
      <div className="search-bar">
        <input type="text" placeholder="Search Movies..." />
      </div>
    </header>
  );
};

export default Header;
