import React, { useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import styles from './App.module.css';
import './App.css'; // Global styles

function App() {
  
  return (
    <div className={styles.app}>
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>24AI-SPBCONSULT</h3>
            <p>Автоматизируйте бизнес.</p>
          </div>
          <div className="footer-contact">
            <p>contact@ai-sbpholding.com</p>
            <p>+1 (800) AI-INVEST</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 24AI-SPBCONSULT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;