"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Content {
  title: string;
  description: string;
}

const CONTENTS: Content[] = [
  {
    title: "Transforming your vision into reality.",
    description: "GenAI-driven software development and engineering lifecycle management for greater productivity and improved quality"
  },
  {
    title: "Your success is our mission.",
    description: "Empowering businesses with cutting-edge AI technologies for unparalleled growth"
  },
  {
    title: "Empowering businesses through innovative IT solutions.",
    description: "Delivering state-of-the-art AI solutions to drive innovation and efficiency"
  }
];

const contentStyles = "space-y-2";
const titleStyles = "text-4xl font-bold";
const descriptionStyles = "text-lg";

const ContentSlider: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % CONTENTS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-transparent text-white text-left p-8 space-y-4">
      <div id="content" className={contentStyles}>
        <h1 className={titleStyles}>{CONTENTS[index].title}</h1>
        <p className={descriptionStyles}>{CONTENTS[index].description}</p>
      </div>
      <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
     <Link href="/service" > Have A Look Over Services →</Link>
      </button>
    </div>
  );
};

export default ContentSlider;
