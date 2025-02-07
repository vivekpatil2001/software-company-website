import React from 'react';

const MainSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row p-8">
      <div className="md:w-1/2 flex justify-center items-center">
        <img src="https://cdn.prod.website-files.com/636bbf9c519296f08f480299/63c2231007fffed10c64be04_62b37049573d7e52603cafe8_6283c09ee40fd039633e1520_man-speaking-to-coworker.jpeg" alt="Main Visual" className="max-w-full" />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center mt-8 md:mt-0 md:ml-8">
        <h1 className="text-4xl font-bold mb-4">Empower Your Talent</h1>
        <p className="text-lg mb-4">
          In the race for business reinvention, technology is crucial, but it’s your people who drive success.
          With Accenture LearnVantage, equip your team with the essential skills to innovate and lead in a rapidly evolving market.
        </p>
        <p className="text-lg">
          Empower your workforce today to ensure sustained growth and a competitive edge tomorrow. Let us help you build a future-ready team.
        </p>
      </div>
    </section>
  );
}

export default MainSection;