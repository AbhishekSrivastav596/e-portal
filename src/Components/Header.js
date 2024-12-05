import React from 'react';
import './Header.css'; 
import { Briefcase } from 'react-feather';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div>
     
            <div className="logo">  <Briefcase color="orange"/>Explorin Solutions</div>
        </div>
        <div className="header-actions">
          <button className="toggle-button">My Saved Jobs only</button>
          <span className="notification-icon">🔔</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
