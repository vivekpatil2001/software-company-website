import React from "react";

interface CardProps {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  duration: string;
  level: string;
}

const imageContainerClasses = "relative lg:h-72 h-96";
const overlayClasses ="absolute bottom-0 left-0 p-4 bg-black h-full bg-opacity-50 text-white";
const titleClasses = "text-sm font-bold";
const subtitleClasses = "text-xl font-bold my-4";
const descriptionClasses = "text-sm my-2";

const Card: React.FC<CardProps> = ({
  imageUrl,
  altText,
  title,
  description,
  duration,
  level,
}) => {
  return (
   
      <div className={imageContainerClasses}>
         
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover"
        />
        <div className={overlayClasses}>
          <h3 className={subtitleClasses}>{title}</h3>
          <p className={descriptionClasses}>
            <span className="bold text-lg">Description: </span>
            {description}
          </p>
          <p className={descriptionClasses}>
            <span className="bold text-lg">Duration:</span> {duration}
          </p>
          <p className={descriptionClasses}>
            <span className="bold text-lg">Level: </span>
            {level}
          </p>
          <a href="#"><button className=" mb-5 bg-violet-600 p-2 rounded-lg px-6">Enroll</button></a>
        </div>
         
      
      </div>
  
  );
};

const Training: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-5">
      <Card
      imageUrl="https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg"
         altText="webdev"
        title="Full-Stack Web Development"
        description="Learn to build dynamic websites and applications from scratch using HTML, CSS, JavaScript, and backend technologies."
        duration="12 weeks"
        level="Advanced"
      />
      <Card
        imageUrl="https://www.markfiniti.com/wp-content/uploads/2021/04/App-Development-11.jpg"
        altText="appdev"
        title="App Development"
        description="This course offers advanced app development techniques,user interfaces,backend services, and optimizing app performance."
        duration="10 weeks"
        level="Advanced"
      />
      <Card
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9jByZesqU0UMPzVJiRGA96WLC-ElUbaIyUQ&s"
        altText="Java Development"
        title="Java Development"
        description="Master Java’s advanced features, libraries, and best practices."
        duration="6 months"
        level="Advanced"
      />
    </div>
  );
};

export default Training;
