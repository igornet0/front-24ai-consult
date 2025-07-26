import React from 'react';
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

const Projects = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black via-[#0f0f1f] to-black text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
        Примеры реализованных проектов:
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative group w-[280px] bg-[#111827]/70 p-6 rounded-xl text-center backdrop-blur-md border border-transparent hover:border-pink-500 transition"
          >
            {/* Градиентная неоновая рамка */}
            <div className="absolute inset-0 z-[-1] rounded-xl before:content-[''] before:absolute before:inset-[-2px] before:rounded-xl before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-blue-500 before:opacity-30 before:blur-md" />

            <div className="flex justify-center text-pink-400 mb-4">{proj.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-300 text-sm">{proj.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;