import React, { useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer  from './Footer';
import styles from './App.module.css';

function App() {
  
  return (
    <div className={styles.app}>
      <Hero />
      <Services />
      <Projects />
      <Contact />
      < Footer />
    </div>
  );
}

export default App;