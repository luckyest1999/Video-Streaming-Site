import './styles/App.scss';
import NavbarComponent from './components/Navbar/Navbar';
import VideoUpload from './components/VideoUpload/VideoUpload';
import VideoList from './components/VideoList/VideoList';
import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('upload');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app">
      <NavbarComponent onTabChange={handleTabChange} />
      <div className="content">
        {activeTab === 'upload' ? <VideoUpload /> : <VideoList />}
      </div>
    </div>
  );
};

export default App;
