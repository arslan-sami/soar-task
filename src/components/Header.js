import React from 'react';
import './Css/header.css';
import BellIcon from '../assets/icons/bell.png';
import GearIcon from '../assets/icons/gear.png';
import searchIcon from '../assets/icons/search.png';
import profilePic from '../assets/images/profilepic.png';

const Header = () => {
    return (
        <header className="header">
            <div className="left-section">
                <h1>Overview</h1>
            </div>
            <div className="right-section">
                <div className="search-container">
                    <img src={searchIcon} alt="Search Icon" className="search-icon" />
                    <input type="text" placeholder="Search for something" className="search-bar" />
                </div>
                <img src={GearIcon} alt="Bell Icon" className="icon" />
                <img src={BellIcon} alt="Bell Icon" className="icon" />
                
                <img src={profilePic} alt="Profile" className="profile-pic" />
            </div>
        </header>
    );
};

export default Header;
