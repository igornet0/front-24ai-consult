import React from 'react';
import styles from './Services.module.css';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'AI-консалтинг и разработка',
    description: 'Разрабатываем индивидуальные решения под задачи бизнеса.',
  },
  {
    title: 'Чат-боты и голосовые помощники',
    description: 'Для автоматизации поддержки и продаж.',
  },
  {
    title: 'Аналитика и предиктивные системы',
    description: 'Прогнозирование спроса, поведения клиентов, рисков.',
  },
  {
    title: 'Интеграция с ERP/CRM',
    description: 'Бесшовное внедрение в существующие бизнес-процессы.',
  },
];

function Services() {
  return (
    <motion.section
      className={styles.services}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Что мы делаем:</h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Services;