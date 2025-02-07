"use client"
import React from 'react';
import Image from 'next/image';
import { StaticImageData } from "next/image";

interface Industry {
  name: string;
  alt: string;
  img: string;
  width: number;
  height: number;
}

const industryData: Industry[] = [
  { name: 'Banking', alt: 'Banking', img: '/banking.png', width: 80, height: 80 },
  { name: 'Communications, Media, and Information Services', alt: 'Communications, Media, and Information Services', img: '/comm.png', width: 80, height: 80 },
  { name: 'Education', alt: 'Education', img: '/edu.png', width: 80, height: 80 },
  { name: 'Healthcare', alt: 'Healthcare', img: '/Healthcare.png', width: 80, height: 80 },
  { name: 'Insurance', alt: 'Insurance', img: '/Insurance.png', width: 80, height: 80 },
  { name: 'Manufacturing', alt: 'Manufacturing', img: '/Manufacturing.png', width: 80, height: 80 },
  { name: 'Retail', alt: 'Retail', img: '/Retail.png', width: 80, height: 80 },
  { name: 'Capital Markets', alt: 'Capital Markets', img: '/Capital.png', width: 80, height: 80 },
  { name: 'Consumer Goods and Distribution', alt: 'Consumer Goods and Distribution', img: '/consumer.png', width: 80, height: 80 },
  { name: 'Energy, Resources, and Utilities', alt: 'Energy, Resources, and Utilities', img: '/Energy.png', width: 80, height: 80 },
  { name: 'High Tech', alt: 'High Tech', img: '/High.png', width: 80, height: 80 },
  { name: 'Life Sciences', alt: 'Life Sciences', img: '/Life.png', width: 80, height: 80 },
  { name: 'Public Services', alt: 'Public Services', img: '/Public.png', width: 80, height: 80 },
  { name: 'Travel and Logistics', alt: 'Travel and Logistics', img: '/Travel.png', width: 80, height: 80 }
];

const sharedClasses = {
  flexItemsCenter: 'flex items-center space-x-4',
  textClasses: 'text-lg text-black', // Ensure all text is black
  imageClasses: 'h-20 w-20'
};

interface IndustryCardProps {
  name: string;
  alt: string;
  img: string;
  width: number;
  height: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ name, alt, img, width, height }) => (
  <div className={sharedClasses.flexItemsCenter}>
    <Image src={img} alt={alt} width={width} height={height} className={sharedClasses.imageClasses} />
    <span className={sharedClasses.textClasses}>{name}</span>
  </div>
);

const IndustrySelection: React.FC = () => (
  <div className="max-w-7xl mx-auto mt-10 py-12 px-4 sm:px-6 text-black">
    <h2 className="text-3xl font-extrabold text-black mb-8">Select your industry. Discover our impact.</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
      <div className="space-y-4">
        {industryData.slice(0, 7).map((industry, index) => (
          <IndustryCard key={index} name={industry.name} alt={industry.alt} img={industry.img} width={industry.width} height={industry.height} />
        ))}
      </div>
      <div className="space-y-4">
        {industryData.slice(7).map((industry, index) => (
          <IndustryCard key={index} name={industry.name} alt={industry.alt} img={industry.img} width={industry.width} height={industry.height} />
        ))}
      </div>
    </div>
  </div>
);

export default IndustrySelection;
