import React, { useState } from 'react';

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
    <div
      className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center"
      onClick={() => setShowModal(false)}
    >
      <div
        className="relative bg-[#1f1f2a] text-white p-6 sm:p-8 rounded-xl w-full max-w-md shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-4 text-2xl text-pink-300 hover:text-pink-500"
        >
          &times;
        </button>
        <h3 className="text-2xl font-semibold mb-4">Оставьте заявку</h3>
        <form onSubmit={handleSubmit} className="bg-black/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg max-w-xl w-full mx-auto text-white space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Тип лица:</label>
          <select
            name="entityType"
            value={formData.entityType}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#111827] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Выберите</option>
            <option value="Физическое лицо">Физическое лицо</option>
            <option value="ИП">ИП</option>
            <option value="ООО">ООО</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Имя / Название:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#111827] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#111827] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Телефон:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#111827] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 text-white font-semibold shadow-lg hover:opacity-90 transition duration-300"
        >
          🚀 Отправить
        </button>
      </form>
        </div>
    </div>
  );
}

export default FormContact;
