import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <div className="header">
        <NavBar />
      </div>
      
      <div id="home">
        <Home />
      </div>
        
      <div id="aboutus">
        <AboutUs />
      </div>

      <div id="menu">
        <Menu />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App; 