import React from 'react';
import { User, FileText, CreditCard, DollarSign, Zap, FileText as FileIcon, Award } from 'lucide-react';

function Sidebar() {
  const sidebarButtons = [
    {
      icon: User,
      text: 'ОСОБИСТИЙ КАБІНЕТ',
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      icon: FileText,
      text: 'ПЕРЕДАТИ ПОКАЗНИКИ',
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      icon: CreditCard,
      text: 'ТАРИФИ РЕГУЛЯТОРА',
      color: 'bg-yellow-500 hover:bg-yellow-600'
    },
    {
      icon: DollarSign,
      text: 'СПЛАТИТИ ОНЛАЙН',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: Zap,
      text: 'ЕЛЕКТРОННИЙ ДОКУМЕНТООБІГ',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: FileIcon,
      text: 'ЦЕНТР РОЗГЛЯДУ СКАРГ',
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  return (
    <aside className="w-full lg:w-80 space-y-6">
      {/* Action buttons */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="space-y-3">
          {sidebarButtons.map((button, index) => {
            const IconComponent = button.icon;
            return (
              <button
                key={index}
                className={`w-full ${button.color} text-white px-4 py-3 rounded-lg flex items-center gap-3 transition-colors text-sm font-medium`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{button.text}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Additional info */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h3 className="font-semibold text-gray-900 mb-3">Корисні посилання</h3>
        <div className="space-y-2">
          <a href="#" className="block text-blue-600 hover:underline text-sm">
            Інструкція до особистого кабінету
          </a>
          <a href="#" className="block text-blue-600 hover:underline text-sm">
            Розрахунок
          </a>
          <a href="#" className="block text-blue-600 hover:underline text-sm">
            Інструкція до особистого кабінету
          </a>
        </div>
      </div>

      {/* Certificate */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center">
        <div className="w-24 h-24 mx-auto mb-3 bg-yellow-100 rounded-full flex items-center justify-center">
          <Award className="w-12 h-12 text-yellow-600" />
        </div>
        <div className="text-2xl font-bold text-yellow-600 mb-1">ISO 9001</div>
        <div className="text-xs text-gray-600">Сертифікат якості</div>
      </div>
    </aside>
  );
}

export default Sidebar;