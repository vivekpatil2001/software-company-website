import React from 'react';
import Footer from '../components/Footer';

const AccessibilityStatement: React.FC = () => {
  return (
    <div>
    <div className="max-w-3xl mx-auto p-8 mt-10">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Accessibility Statement</h1>
      
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8"></div>

      <h2 className="text-2xl font-semibold text-white mb-4">Our Commitment to Accessibility</h2>
      <p className="mb-6 text-lg leading-relaxed text-white">
        At <span className="font-bold">Arohi Software Development</span>, we are committed to ensuring digital accessibility for people with disabilities. We continually strive to improve the user experience for everyone and apply relevant accessibility standards.
      </p>

      <h2 className="text-2xl font-semibold text-white mb-4">Accessibility Features</h2>
      <p className="mb-6 text-lg leading-relaxed text-white">
        Our website incorporates accessible design practices, including:
      </p>
      <ul className="list-disc list-inside mb-6 text-lg text-white">
        <li>Providing alternative text for images and multimedia content.</li>
        <li>Using high contrast colors and readable fonts.</li>
        <li>Ensuring keyboard navigation and focus states are intuitive.</li>
        <li>Offering resizable text and adaptable layouts.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mb-4">Feedback</h2>
      <p className="mb-6 text-lg leading-relaxed text-white">
        We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us using the information below.
      </p>
  
  
    </div>
    <Footer/>
    </div>
  );
};

export default AccessibilityStatement;
