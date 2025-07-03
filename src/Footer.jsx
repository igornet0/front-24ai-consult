import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1e212b] text-gray-400 px-6 py-16">
      <div className="max-w-6xl mx-auto grid gap-12 sm:grid-cols-2">
        <div>
          <h3 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-orange-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent mb-2">
            24AI-SPBCONSULT
          </h3>
          <p className="text-sm">Автоматизируйте бизнес.</p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p>📧 contact@ai-sbpholding.ru</p>
          <p>📞 +1 (800) AI-INVEST</p>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
        © 2025 24AI-SPBCONSULT. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;