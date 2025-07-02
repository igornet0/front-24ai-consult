import React from 'react';
import styles from './Projects.module.css';
import { motion } from 'framer-motion';
import { FaBoxes, FaPhoneVolume, FaShieldAlt } from 'react-icons/fa';

const projects = [
  {
    icon: <FaBoxes size={30} />,
    title: 'AutoStocker',
    description: 'Система ИИ для автоматического пополнения запасов и логистики.',
  },
  {
    icon: <FaPhoneVolume size={30} />,
    title: 'CallMind AI',
    description: 'Виртуальный ассистент для колл-центра. Обрабатывает 87% заявок без участия оператора.',
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: 'FinGuard',
    description: 'AI-система оценки платежеспособности клиентов и автоматической выдачи микрозаймов.',
  },
];

function Projects() {
  return (
    <section className={styles.projects}>
      <h2>Примеры реализованных проектов:</h2>
      <div className={styles.grid}>
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className={styles.card}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: '0px 10px 20px rgba(255, 200, 160, 0.2)',
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className={styles.icon}>{proj.icon}</div>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;