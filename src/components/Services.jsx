import React from 'react';
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

const Services = () => {
  return (
    <motion.section
      className="py-16 px-4 bg-black/80 backdrop-blur-md text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
        Что мы делаем:
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative p-6 rounded-xl bg-[#111827]/60 backdrop-blur-lg overflow-hidden border border-transparent hover:border-pink-500 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 z-[-1] rounded-xl pointer-events-none before:content-[''] before:absolute before:inset-[-2px] before:rounded-xl before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-blue-500 before:opacity-30 before:blur-lg"></div>

            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;