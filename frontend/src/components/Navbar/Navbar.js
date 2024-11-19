import React, { useState } from 'react';
import './Navbar.scss';

const NavbarComponent = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('upload'); // Default to Video Upload

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <nav className="custom-navbar">
      <div className="logo">
        <img src="./assets/images/logo.png" alt="My Streaming Site" />
      </div>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'upload' ? 'active' : ''}`}
          onClick={() => handleTabClick('upload')}
        >
          Upload Videos
        </button>
        <button
          className={`tab-button ${activeTab === 'list' ? 'active' : ''}`}
          onClick={() => handleTabClick('list')}
        >
          Video List
        </button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
