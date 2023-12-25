import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navbar.css';


function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState('AZ');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  // const [selectedLanguage, setSelectedLanguage] = useState('AZ');

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
  };

  return (
   
    <nav>
      <div className='logo-and-brand'>
      <div className="logo">
        <img src="/logo.jpg" alt="Logo" />
      </div>
      <div className="brand">
        <span>Jest Dili</span>
      </div>
      </div>

      <div className="pages">
        <a href="/">Home</a>
        <a href="#about-section">About</a>
        <a href="/dictionary">Dictionary</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="language-dropdown">
        <button onClick={toggleDropdown}>
          {selectedLanguage}
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <a onClick={() => changeLanguage('AZ')}>Azerbaijani</a>
            <a onClick={() => changeLanguage('EN')}>English</a>
            <a onClick={() => changeLanguage('RU')}>Russian</a>
          </div>
        )}
      </div>

      <div className="buttons">
        
        <button ><a href="/login">Login</a></button>
        <button><a href="/sign">Sign up</a></button>
      </div>
    </nav>

      )};
export default Navbar;