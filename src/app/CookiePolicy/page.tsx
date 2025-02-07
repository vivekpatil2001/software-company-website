import React from 'react';
import Footer from '../components/Footer';

const CookiePolicy: React.FC = () => {
  return (
    <div>
        <div className="max-w-3xl mx-auto p-8 mt-10">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Cookie Policy</h1>
      
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8"></div>

      <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
      <p className="mb-6 text-lg leading-relaxed text-white">
        Cookies are small text files that are stored on your device when you visit a website. They are widely used to provide a more personalized experience for users and to help website owners analyze usage patterns.
      </p>

      <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
      <p className="mb-6 text-lg leading-relaxed text-white">
        <span className="font-bold">Essential Cookies:</span> These cookies are necessary for the website to function properly and cannot be switched off in our systems.
      </p>
      <p className="mb-6 text-lg leading-relaxed text-white">
        <span className="font-bold">Analytics Cookies:</span> These cookies allow us to track and analyze user behavior to improve our services.
      </p>
      <p className="mb-6 text-lg leading-relaxed text-white">
        <span className="font-bold">Marketing Cookies:</span> These cookies are used to personalize advertisements and measure the effectiveness of our marketing campaigns.
      </p>

      <h2 className="text-2xl font-semibold text-white mb-4">Managing Cookies</h2>
      <p className="mb-6 text-lg leading-relaxed text-white">
        You can manage cookies through your browser settings. Most browsers allow you to refuse cookies or to choose which cookies to accept. However, disabling cookies may affect your browsing experience and some functionalities of the site may not work as intended.
      </p>

      <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Cookie Policy</h2>
      <p className="mb-6 text-lg leading-relaxed text-white">
        We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page. You are advised to review this Cookie Policy periodically for any changes.
      </p>

    
    </div>
    <Footer/>
    </div>
  );
};

export default CookiePolicy;
