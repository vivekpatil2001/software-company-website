
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: 'Innovation and Development at Arohi Software',
      description:
        "At Arohi Software, innovation and development drive us. We're leaders in creating cutting-edge applications and systems for various industries. With our team of talented developers, engineers, and designers, we push the limits of technology. Our commitment to research and development ensures we offer advanced and user-friendly solutions that keep us ahead of trends.",
    },
    {
      title: 'Client-Centric Approach',
      description:
        'Arohi Software puts clients first, creating custom solutions that meet their specific needs. We listen carefully to our clients and deliver software that improves their business operations. This client-focused approach builds strong relationships and ensures high satisfaction. Our excellent customer service and support help clients overcome technical challenges and achieve their goals.',
    },
    {
      title: 'Agile Methodology',
      description:
     " At Arohi Software, we use agile methodology to stay efficient and adaptable. Agile practices involve breaking projects into smaller parts and completing them in short cycles. This flexibility allows our teams to quickly respond to changes and feedback. By encouraging constant communication and collaboration, agile methods boost productivity and ensure timely, budget-friendly project delivery.",
    },
    {
      title: 'Comprehensive Development Services',
      description:
        'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.',
    },
    {
      title: 'Security and Compliance',
      description:
        'Security and compliance are top priorities at Arohi Software. We protect sensitive data with strong security measures and ensure our products meet industry standards. Regular security audits, vulnerability assessments, and encryption technologies are part of our process. By focusing on security, we build trust with our clients, keeping their information safe and our software reliable.',
    },
 
  ];

function WhyChooseUs() {
  return (
    <div className=" relative mb-5">
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs