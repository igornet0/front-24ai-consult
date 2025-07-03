import React, { useState } from 'react';
import logo from '../assets/new_logo.png';
import styles from './Hero.module.css';
import FormContact from './FormContact';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-black via-[#0a0a1a] to-black">
      <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.img
        src={logo}
        alt="24ai SPB Consult"
        className="w-24 h-24 mx-auto object-contain"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [1, 0.85, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-lg text-pink-400 font-medium mt-4"
      >
        24Ai SPB CONSULT
      </motion.h2>
    </motion.div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 text-transparent bg-clip-text mt-4 leading-tight">
        Автоматизируйте<br />бизнес.<br />Мгновенно.
      </h1>

      <p className="text-gray-300 max-w-xl mt-6 text-base sm:text-lg">
        Мы проектируем интеллектуальные автоматизированные системы, которые помогают бизнесу
        работать быстрее, умнее и эффективнее 24/7.
      </p>

      <div className="flex justify-evenly mt-8 text-sm sm:text-base w-full max-w-xl mx-auto">
        <Feature icon="⚡" label="Быстрее" />
        <Feature icon="💡" label="Умнее" />
        <Feature icon="⏱️" label="24/7" />
      </div>

      <button onClick={() => setShowModal(true)} className="mt-10 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 hover:opacity-90 transition text-white text-lg font-semibold shadow-lg">
        💬 Получить консультацию
      </button>

      {showModal && (
        < FormContact setShowModal={setShowModal} />
      )}
    </div>
  );
};

const Feature = ({ icon, label }) => (
    <div className="flex flex-col items-center text-white">
      <div className="text-3xl mb-2">
        <div className={styles.featureIcon}>{icon}</div>
      </div>
      <span>{label}</span>
  </div>
);

export default HeroSection;