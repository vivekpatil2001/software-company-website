"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const Instructor = [
    {
      id: 1,
      name: "Ajay wanje",
      designation: "Elecrical Engineer",
      image:
        "data:image/jpeg;base64,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",
    },
    // {
    //   id: 2,
    //   name: "Robert Johnson",
    //   designation: "Product Manager",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNoey3nd60ijh33XWVNQIv5KuK8UrpCnFtsF7U869EQ&s",
    // },
    // {
    //   id: 3,
    //   name: "Jane Smith",
    //   designation: "Data Scientist",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNoey3nd60ijh33XWVNQIv5KuK8UrpCnFtsF7U869EQ&s",
    // },
    // {
    //   id: 4,
    //   name: "Emily Davis",
    //   designation: "UX Designer",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNoey3nd60ijh33XWVNQIv5KuK8UrpCnFtsF7U869EQ&s",
    // },
    // {
    //   id: 5,
    //   name: "Tyler Durden",
    //   designation: "Soap Developer",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNoey3nd60ijh33XWVNQIv5KuK8UrpCnFtsF7U869EQ&s",
    // },
    // {
    //   id: 6,
    //   name: "Dora",
    //   designation: "The Explorer",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNoey3nd60ijh33XWVNQIv5KuK8UrpCnFtsF7U869EQ&s",
    // },
  ];

function Instructors() {
 
  return (
    <div className="h-[40rem] flex justify-center items-center overflow-hidden relative">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-4xl sm:text-5xl text-white font-bold inter-var text-center tracking-tight">
          Hero waves are cool
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Leverage the power of canvas to create a beautiful hero section
        </p>
        <div className="flex flex-row mt-10  items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={Instructor} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
