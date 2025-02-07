import Link from 'next/link';
import React from 'react';

const MainSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row p-8">
      <div className="md:w-1/2 flex justify-center items-center">
        <img src="https://dynamicmedia.accenture.com/is/content/accenture/Accenture%20education%20services%20hero%20image?ts=1718160472009&&fmt=webp-alpha&dpr=off" alt="Main Visual" className="max-w-full" />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center mt-8 md:mt-0 md:ml-8">
        <h1 className="text-4xl font-bold mb-4">Unlock Your Potential with Arohi Software</h1>
        <p className="text-lg mb-4">
        In the dynamic and ever-changing landscape of information technology, keeping your skills sharp and staying ahead of the curve is paramount. At Arohi Software, we are dedicated to equipping you with the knowledge and expertise needed to excel in your IT career. Here’s how our learning and development programs stand out and why they are the perfect choice for your professional growth: </p>
        <div><a href='lms' target='/blank'><button className='bg-violet-600 p-3 mx-auto rounded-lg'> Go To LMS</button></a></div>
      </div>


    </section>
  );
}

export default MainSection;

