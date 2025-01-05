import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Css/sideNav.css';
import logoIcon from '../assets/icons/logo.png';
import homeIcon from '../assets/icons/home.png';
import glyphIcon from '../assets/icons/glyph.png';
import userIcon from '../assets/icons/user.png';
import investmentIcon from '../assets/icons/investment.png';
import creditCardIcon from '../assets/icons/creditCards.png';
import loanIcon from '../assets/icons/loans.png';
import serviceIcon from '../assets/icons/service.png';
import econometricsIcon from '../assets/icons/econometrics.png';
import settingIcon from '../assets/icons/gearSolid.png';

const SideNav = () => {
    const [isNavVisible, setIsNavVisible] = useState(window.innerWidth > 800);
    const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 800);

    const handleResize = () => {
        setIsScreenSmall(window.innerWidth <= 800);
        if (window.innerWidth <= 800) {
            setIsNavVisible(false);
        } else {
            setIsNavVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <div className="side-nav-container">
            <div className="hamburger-icon" onClick={toggleNav}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <div className={`side-nav ${isNavVisible ? 'show' : 'hidden'} ${isScreenSmall ? '' : 'side-nav-visible'}`}>
                <div className='logo-container'>
                    <img src={logoIcon} alt="Logo Icon" className="LogoIcon" />
                    <h3 className='company-name'>Soar Task</h3>
                </div>
                <ul>
                    <li>
                        <NavLink to="/dashboard" end className={({ isActive }) => (isActive ? 'active' : '')}>
                            <img src={homeIcon} alt="Link Icon" className="LinkIcon" />
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/transactions" end className={({ isActive }) => (isActive ? 'active' : '')}>
                            <img src={glyphIcon} alt="Link Icon" className="LinkIcon" />
                            Transactions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/accounts" end className={({ isActive }) => (isActive ? 'active' : '')}>
                            <img src={userIcon} alt="Link Icon" className="LinkIcon" />
                            Accounts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/investments" end className={({ isActive }) => (isActive ? 'active' : '')}>
                            <img src={investmentIcon} alt="Link Icon" className="LinkIcon" />
                            Investments
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/creditCards" end className={({ isActive }) => (isActive ? 'active' : '')}>
                            <img src={creditCardIcon} alt="Link Icon" className="LinkIcon" />
                            Credit Cards
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/loans" end className={({ isActive }) => (isActive ? 'active' : '')}>
                            <img src={loanIcon} alt="Link Icon" className="LinkIcon" />
                            Loans
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" end className={({ isActive }) => (isActive ? 'active' : '')}>
                            <img src={serviceIcon} alt="Link Icon" className="LinkIcon" />
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/myPrivileges" end className={({ isActive }) => (isActive ? 'active' : '')}>
                            <img src={econometricsIcon} alt="Link Icon" className="LinkIcon" />
                            My Privileges
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/setting" end className={({ isActive }) => (isActive ? 'active' : '')}>
                            <img src={settingIcon} alt="Link Icon" className="LinkIcon" />
                            Setting
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideNav;
