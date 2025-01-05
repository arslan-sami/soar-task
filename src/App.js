import React, { useEffect } from 'react';
import './App.css';
import Routes from './Routes';
import SideNav from './components/SideNav';
import Header from './components/Header';
import colors from './components/Colors';
import { BrowserRouter as Router } from 'react-router-dom';



const App = () => {

  const applyTheme = () => {
    const themeColors = colors;
    Object.keys(themeColors).forEach((key) => {
      document.documentElement.style.setProperty(`--${key}`, themeColors[key]);
    });
  };

  useEffect(() => {
    applyTheme();
  }, [colors]);

  return (
    <Router>
      <div className="app-container">
        <SideNav />
        <div className="main-content">
          <Header />
          <Routes />
        </div>
      </div>
    </Router>
  );
}

export default App;
