import React, { useState } from 'react';
import FormContact from './FormContact';
import styles from './Contact.module.css';

function Contact() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className={styles.contact}>
      <h2>Давайте обсудим ваш проект!</h2>
      <p>Свяжитесь с нами — и мы поможем вам автоматизировать бизнес уже сегодня.</p>
       <button onClick={() => setShowModal(true)}>Связаться с нами</button>
      {showModal && (
        < FormContact setShowModal={setShowModal} />
      )}
    </section>
  );
}

export default Contact;