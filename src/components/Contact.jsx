import React, { useState } from 'react';
import FormContact from './FormContact';

function Contact() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="text-center py-16 px-4 bg-black/80 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
        Давайте обсудим ваш проект!
      </h2>
      <p className="mt-4 text-gray-300 max-w-xl mx-auto">
        Свяжитесь с нами — и мы поможем вам автоматизировать бизнес уже сегодня.
      </p>

      <button
        onClick={() => setShowModal(true)}
        className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 hover:opacity-90 transition text-white text-lg font-semibold shadow-lg"
      >
        📩 Связаться с нами
      </button>

      {showModal && <FormContact setShowModal={setShowModal} />}
    </section>
  );
}

export default Contact;