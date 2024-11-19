import React, { useState } from 'react';
import './Navbar.scss';

const NavbarComponent = ({ onTabChange , onSearch }) => {
  const [activeTab, setActiveTab] = useState('upload'); // Default to Video Upload
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
    onSearch(searchQuery);
  };

  return (
    <nav className="custom-navbar">
      <div className="logo">
        <img src="./assets/images/logo.png" alt="My Streaming Site" />
      </div>
       <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search for videos..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
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
