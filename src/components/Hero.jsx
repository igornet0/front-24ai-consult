import React, { useState } from 'react';
import styles from './Hero.module.css';
import logo from '../assets/logo.png';
import FormContact from './FormContact';
import { motion } from 'framer-motion';

function Hero() {
    const [showModal, setShowModal] = useState(false);
  return (
    <section className={styles.hero}>
      <motion.div className={styles.logoContainer}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.12 }}
        viewport={{ once: true }}>
        <img src={logo} alt="24ai SPB Consult" className={styles.logo} />
        <h2>24Ai SPB Consult</h2>
      </motion.div>

      <h1>Автоматизируйте бизнес. Мгновенно.</h1>
      <p>
        Мы проектируем интеллектуальные автоматизированные системы, которые помогают бизнесу работать быстрее, умнее и эффективнее 24/7.
      </p>
      <button onClick={() => setShowModal(true)}>Получить консультацию</button>

      {showModal && (
        < FormContact setShowModal={setShowModal} />
      )}
    </section>
  );
}

export default Hero;