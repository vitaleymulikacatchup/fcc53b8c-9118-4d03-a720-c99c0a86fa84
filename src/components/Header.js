import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    'ЕЛЕКТРОЕНЕРГІЯ',
    'ПРИРОДНИЙ ГАЗ',
    'НОРМАТИВНО-ПРАВОВІ АКТИ',
    'ДОКУМЕНТИ ТА ІНФОРМАЦІЯ',
    'ПОШИРЕНІ ЗАПИТАННЯ',
    'КОНТАКТИ',
    'МАПА САЙТУ'
  ];

  return (
    <header className="bg-white shadow-sm">
      {/* Top section with logo and contact info */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
              <div className="text-white font-bold text-lg">З</div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-brand-orange">ЗАПОРІЖЖЯЕЛЕКТРОПОСТАЧАННЯ</h1>
              <p className="text-sm text-brand-blue">Ваш партнер з постачання електричної енергії</p>
            </div>
          </div>

          {/* Contact info */}
          <div className="hidden md:block">
            <div className="text-right">
              <div className="text-brand-blue font-medium mb-1">Кол-центр:</div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <div className="text-brand-blue">📞 061 228 22 20</div>
                  <div className="text-brand-blue">📞 063 228 22 20</div>
                </div>
                <div className="space-y-1">
                  <div className="text-brand-blue">📞 066 228 22 20</div>
                  <div className="text-brand-blue">📞 068 228 22 20</div>
                </div>
              </div>
            </div>
          </div>

          {/* Search and mobile menu */}
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`bg-white border-t ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 py-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="py-2 md:py-4 text-sm font-medium text-gray-700 hover:text-brand-orange transition-colors border-b md:border-b-0 border-gray-200 last:border-b-0"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;