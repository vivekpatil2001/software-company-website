import React from "react";
import home1 from "../../../public/assets/Homepage/home1.avif";
import home2 from "../../../public/assets/Homepage/home2.avif";
import home3 from "../../../public/assets/Homepage/home3.avif";
import home4 from "../../../public/assets/Homepage/home4.avif";
import home5 from "../../../public/assets/Homepage/home5.avif";
import home6 from "../../../public/assets/Homepage/Home6.avif";
import home7 from "../../../public/assets/Homepage/home7.avif";
import home8 from "../../../public/assets/Homepage/home8.avif";
import { StaticImageData } from "next/image";
import Image from "next/image";

const cardClasses = "relative group";
const overlayClasses =
  "absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300";
const textClasses = "text-sm font-bold";
const titleClasses = "text-lg font-semibold";

interface CardProps {
  imageUrl: StaticImageData | string; // Allow both StaticImageData and string
  altText: string;
  category: string;
  title: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  altText,
  category,
  title,
  description,
}) => {
  return (
    <div className={cardClasses}>
      <Image
        src={typeof imageUrl === "string" ? imageUrl : imageUrl.src}
        alt={altText}
        className="w-full h-full object-cover"
        width={500} // Add appropriate width
        height={300} // Add appropriate height
      />
      <div className={overlayClasses}>
        <p className={textClasses}>{category}</p>
        <h3 className={titleClasses}>{title}</h3>
        {description && <p className="text-sm mt-2">{description}</p>}
        {/* {description && (
          <button className="mt-4 bg-white text-black py-2 px-4 rounded">
            Expand
          </button>
        )} */}
      </div>
    </div>
  );
};

const HomepageCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center px-6 min-h-screen bg-black text-white mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card
          imageUrl={home1}
          altText="Card Image"
          category="CASE STUDY"
          title="Arohi Software: Enhancing Tech for Social Good"
          description="Fighting poverty with technology and humanity."
        />
        <Card
          imageUrl={home2}
          altText="Card Image"
          category="RESEARCH REPORT"
          title="Advanced Supply Chain Solutions"
          description="Tap into new value with advanced supply chain capabilities."
        />
        <Card
          imageUrl={home3}
          altText="Card Image"
          category="Digital Transformation"
          title="Leading Digital Transformation"
          description="Empowering businesses to thrive in the digital age. Our digital transformation services help you innovate and stay ahead in a competitive market."
        />
        <Card
          imageUrl={home4}
          altText="Card Image"
          category=" Remote Work"
          title="The Remote Work Revolution: Strategies for Success."
          description="Investigate the rise of remote work, its benefits, challenges, and strategies for maintaining productivity and collaboration."
         />
        <Card
          imageUrl={home5}
          altText="Card Image"
          category="RESEARCH REPORT"
          title="Creating Value Amid Disruption"
          description="Turning disruption into value creation."
        />
        <Card
          imageUrl={home6}
          altText="Card Image"
          category="CASE STUDY"
          title="Customer Satisfaction in Banking"
          description="Banking on happy customers."
        />
        <Card
          imageUrl={home7}
          altText="Card Image"
          category="ANNOUNCEMENT"
          title="Arohi Software's New Initiatives"
          description="Helping clients scale generative AI responsibly."
        />
        <Card
          imageUrl={home8}
          altText="Card Image"
          category="CASE STUDY"
          title="Arohi Software Success Story"
          description="Explore our latest achievements."
        />
      </div>
    </div>
  );
};

export default HomepageCard;
