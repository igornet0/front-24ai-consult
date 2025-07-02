import React, { useState } from 'react';
import styles from './Hero.module.css';

function FormContact({ setShowModal }) {
    const [formData, setFormData] = useState({
      entityType: '',
      name: '',
      email: '',
      phone: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Спасибо! Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
            setShowModal(false);
            setFormData({
                entityType: '',
                name: '',
                email: '',
                phone: '',
            });
        } else {
            alert('Ошибка при отправке. Попробуйте позже.');
        }
      } catch (error) {
          console.error('Ошибка отправки:', error);
          alert('Ошибка сети. Проверьте соединение.');
      }
    };

  return (
    <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={() => setShowModal(false)}>×</button>
        <h3>Оставьте заявку</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
            <label>
            Тип лица:
            <select name="entityType" value={formData.entityType} onChange={handleChange} required>
                <option value="">Выберите</option>
                <option value="Физическое лицо">Физическое лицо</option>
                <option value="ИП">ИП</option>
                <option value="ООО">ООО</option>
            </select>
            </label>

            <label>
            Имя / Название:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>

            <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>

            <label>
            Телефон:
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>

            <button type="submit">Отправить</button>
        </form>
        </div>
    </div>
  );
}

export default FormContact;
