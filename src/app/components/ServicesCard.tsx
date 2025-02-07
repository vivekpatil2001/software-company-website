import React, { useState } from 'react';
import Image from 'next/image';

const cardClass = "relative group w-full h-64 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105";
const overlayClass = "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg";
const textClass = "text-xl font-semibold";

interface ServiceCardProps {
  src: string;
  alt: string;
  title: string;
}

const Servicecard: React.FC = () => {
  const initialCards = [
    { src: "https://plus.unsplash.com/premium_photo-1690303193709-dedfee29c452?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Web Development", title: "Web Development" },
    { src: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Consulting", title: "Consulting" },
    { src: '/Digital Marketing.png', alt: "Digital Marketing", title: "Digital Marketing" },
     { src: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Data Analytics", title: "Data Analytics" },
   
  ];

  const additionalCards = [
    { src: '/Automation.png', alt: "Automation", title: "Automation" },
    { src: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: " IT Training and Education", title: " IT Training and Education" },
    { src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Artificial Intelligence", title: "Artificial Intelligence" },
    { src: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Cloud Computing", title: "Cloud Computing" },
    { src: "https://imageio.forbes.com/specials-images/imageserve/642445004586b4330e81b689//960x0.jpg?height=406&width=711&fit=bounds", alt: "Cyber Security", title: "Cyber Security" },
    { src: '/machine.png', alt: "Machine Learning", title: "Machine Learning" },
    { src: '/Emerging Technologies.png', alt: "Digital Marketing", title: "Emerging Technologies" },
    { src: 'https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg', alt: "App Development", title: "App Development" },

  ];

  const [showAll, setShowAll] = useState(false);

  const handleViewAllClick = () => {
    setShowAll(true);
  };

  const handleHideAllClick = () => {
    setShowAll(false);
  };

  return (
    <div className="min-h-[600px] bg-zinc-900 text-white flex flex-col items-center justify-center p-8" id='#services'>
      <div className="text-center mb-[90px]">
        <h2 className="text-sm uppercase tracking-widest text-zinc-400 mb-5">Services</h2>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">Transform your business with advanced technologies</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mb-8">
        {initialCards.map((card, index) => (
          <ServiceCard key={index} src={card.src} alt={card.alt} title={card.title} />
        ))}
        {showAll && additionalCards.map((card, index) => (
          <ServiceCard key={index} src={card.src} alt={card.alt} title={card.title} />
        ))}
      </div>
      {showAll ? (
        <button 
          onClick={handleHideAllClick}
          className="mt-8 px-6 py-3 bg-zinc-700 text-white rounded-full hover:bg-zinc-600 transition-colors duration-300"
        >
          Hide all topics
        </button>
      ) : (
        <button 
          onClick={handleViewAllClick}
          className="mt-8 px-6 py-3 bg-zinc-700 text-white rounded-full hover:bg-zinc-600 transition-colors duration-300 object-cover"
        >
          View all topics
        </button>
      )}
    </div>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ src, alt, title }) => {
  return (
    <div className="relative group w-full h-64 rounded-lg overflow-hidden">
      <img src={src} alt={alt} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
      <div className={overlayClass}>
        <span className={textClass}>{title}</span>
      </div>
    </div>
  );
};

export default Servicecard;
