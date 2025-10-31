import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <MainContent />
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;