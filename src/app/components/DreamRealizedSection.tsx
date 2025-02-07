import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';

const DreamRealizedSection = () => {
  const successStories = [
    {
      image: "/xbg1.png",
      title: "Revolutionizing Healthcare with Arohi Software",
      description:
        `
 Arohi Software has completely transformed our hospital's operations. The new system is intuitive, efficient, and has made a noticeable difference in patient care.” – Dr. Sarah Thompson, Chief Medical Officer, HealthyLife Hospitals`,
    },
    {
      image: "/x.bg2.png",
      title: "Streamlining Supply Chain Management",
      description:
        "Arohi Software’s SCM solution has been a game-changer for our business. The efficiency and transparency we’ve gained have directly contributed to our bottom line.” – John Riley, CEO, GlobalTech Manufacturing",
    },
    {
      image: "/xbg3.png",
      title: "Empowering E-Commerce Growth",
      description:
        "“Thanks to Arohi Software, our e-commerce platform is now a cornerstone of our business strategy. The increase in sales and customer engagement has been remarkable.” – Emily Ross, Marketing Director, TrendyWear Fashion",
    },
  ];

  return (
    <section id="DreamRealizedSection" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4" style={{ maxWidth: "70vw" }}>
        <h2
          className="text-4xl font-semibold mb-6 text-center text-green-600"
          style={{ backgroundImage: "url('./Bottom Wave Desktop.png.webp')" }}
        >
          D.R.E.A.M Realized
        </h2>
        <p className="text-gray-600 mb-8 text-center">Success Stories</p>
        <div className="flex justify-center items-center">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            className="w-full"
          >
            {successStories.map((story, index) => (
              <div key={index} className="grid md:grid-cols-2 items-center">
                <div className="w-full h-full md:col-span-1">
                  <Image
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover rounded-md"
                    width={500} // Add appropriate width
                    height={400} // Add appropriate height
                    style={{ height: "40vh" }}
                  />
                </div>
                <div className="flex flex-col justify-center items-center bg-white bg-opacity-90 p-6 rounded-md md:col-span-1">
                  <h3 className="text-2xl font-semibold text-teal-900">
                    {story.title}
                  </h3>
                  <p className="text-gray-600">{story.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default DreamRealizedSection;
