import React from 'react';

function Hero() {
  return (
    <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-900 to-purple-900 overflow-hidden">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: 'url(/images/dam-bridge.jpg)'
        }}
      ></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-white">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Надійне постачання електроенергії
            </h2>
            <p className="text-lg md:text-xl opacity-90">
              Забезпечуємо якісні послуги для населення та підприємств Запорізької області
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;