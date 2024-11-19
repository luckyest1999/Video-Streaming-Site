import './styles/App.scss';
import NavbarComponent from './components/Navbar/Navbar';
import VideoUpload from './components/VideoUpload/VideoUpload';
import VideoList from './components/VideoList/VideoList';
import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('upload');
  const [searchQuery, setSearchQuery] = useState('');
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSearch = (keyword) => {
        setSearchQuery(keyword);
  };

  return (
    <div className="app">
      <NavbarComponent onTabChange={handleTabChange} onSearch={handleSearch}  />
      <div className="content">

        {activeTab === 'upload' ? <VideoUpload /> : <VideoList searchQuery={searchQuery} />}
      </div>
    </div>
  );
};

export default App;
