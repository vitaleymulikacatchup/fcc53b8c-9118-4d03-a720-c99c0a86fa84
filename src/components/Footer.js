import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <p className="text-sm text-gray-300">
              ©2025 ТОВ "Запоріжжяелектропостачання"
            </p>
          </div>
          
          {/* App Store badges */}
          <div className="flex justify-center items-center space-x-4 mb-4">
            <a href="#" className="block">
              <img 
                src="/images/app-store-badge.png" 
                alt="Завантажити з App Store"
                className="h-10"
              />
            </a>
            <a href="#" className="block">
              <img 
                src="/images/google-play-badge.png" 
                alt="Завантажити з Google Play"
                className="h-10"
              />
            </a>
          </div>
          
          {/* Social media */}
          <div className="flex justify-center space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;