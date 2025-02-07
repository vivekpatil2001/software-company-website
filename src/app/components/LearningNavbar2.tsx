import React from 'react';
import './styles.css';  // Import your custom CSS

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-purple-600">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" className="h-8" />
        <span className="text-white font-bold">Learning Service</span>
      </div>
      <nav className="flex space-x-4">
        <a href="#our-vision" className="underline-animation text-white font-bold">Our vision</a>
        <a href="#what-you-need" className="underline-animation text-white font-bold">What you need to do</a>
        <a href="#whats-trending" className="underline-animation text-white font-bold">What’s trending</a>
        <a href="#careers" className="underline-animation text-white font-bold">Careers</a>
      </nav>
    </header>
  );
}

export default Header;
