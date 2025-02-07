import React from "react";
import "./LeadersCards.css";
import Image from "next/image";


interface LeadersCardsProps {
  imgages: String;
  altText: string;
  title: String;
  text: String;
}
const LeadersCards: React.FC<LeadersCardsProps> = ({
  imgages,
  title,
  text,
  altText,
}) => {
  return (
    <div className="border mt-6 flex w-[25vw] box">
      <div>
        <Image src={`${imgages}`} alt={altText} className="h-[25vh] w-[15vw]" />
      </div>
      <div className="bg-white w-[15vw] pl-4">
        <h3 className="text-2xl mt-2 font-bold">{title}</h3>
        <h4 className="font-midium">{text}</h4>
      </div>

      <div className="overlay">
        <h2 className="text-white">Read Bio</h2>
      </div>
    </div>
  );
};

export default LeadersCards;
