import React from 'react';

const HowToReinventLearning: React.FC = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">How to reinvent learning</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-800 p-6 card">
            <div className="border-t-4 border-purple-600 w-16 mb-4 card-border"></div>
            <h3 className="text-lg font-semibold text-gray-400 mb-2">LEARNING STRATEGY AND DESIGN</h3>
            <p>Create a plan to reskill and upskill people for the AI economy</p>
          </div>
          <div className="bg-gray-800 p-6 card">
            <div className="border-t-4 border-purple-600 w-16 mb-4 card-border"></div>
            <h3 className="text-lg font-semibold text-gray-400 mb-2">LEARNING Strategies Implemented</h3>
            <p>Reinvent learning at speed and scale with Better Strategy and Reliablity</p>
          </div>
          <div className="bg-gray-800 p-6 card">
            <div className="border-t-4 border-purple-600 w-16 mb-4 card-border"></div>
            <h3 className="text-lg font-semibold text-gray-400 mb-2">LEARNING MANAGED SERVICES</h3>
            <p>Reinvent learning at speed and scale with comprehensive managed services</p>
          </div>
          <div className="bg-gray-800 p-6 card">
            <div className="border-t-4 border-purple-600 w-16 mb-4 card-border"></div>
            <h3 className="text-lg font-semibold text-gray-400 mb-2">LEARNVANTAGE ACADEMIES</h3>
            <p>Accelerate learning with pre-built or custom academies focusing on AI, cloud, aerospace and more</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card:hover .card-border {
          width: 150px;
        }
        .card-border {
          transition: width 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default HowToReinventLearning;
