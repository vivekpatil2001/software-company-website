import React from 'react';
import Image from 'next/image';


const leaders = [
  {
    name: ' Sakshi Pachpute',
    title: 'Team Leader',
    imgSrc: '/assets/Leaders/sakshi.jpeg',
    linkedIn: 'https://www.linkedin.com/in/sakshi-pachpute-291b972b0/',
  },
  {
    name: 'Dhanashree Bhoyate',
    title: 'Full Stack Developer',
    imgSrc: '/assets/Leaders/Danshree.jpeg',
    linkedIn: 'https://www.linkedin.com/in/dhanshree-bhoyate-67023a305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
  },
  {
    name: 'Kiran Madage',
    title: 'Full Stack Developer',
    imgSrc: '/assets/Leaders/Kiran.jpeg',
    linkedIn: 'https://www.linkedin.com/in/kiran-madage-9a26402b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
  },
  {
    name: 'Aniket Supekar',
    title: 'UI & UX Developer',
    imgSrc: '/assets/Leaders/aniket.jpeg',
    linkedIn: 'https://www.linkedin.com/in/aniket-supekar-3545812b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
  },
 
  

  // Add other leaders here...
];

const Leaders: React.FC = () => {
  return (
    <div className="bg-black text-white py-16 lg:px-8 text-center">
      <h1 className="text-3xl font-bold mb-8">Our leaders</h1>
      <div className="grid grid-cols-1 lg:ml-20 p-4 items-end md:grid-cols-2 gap-12">
        {leaders.map((leader, index) => (
          <div key={index} className="flex items-center">
            <Image
              src={leader.imgSrc}
              alt={leader.name}
              className="lg:h-32 lg:w-32 h-20 w-20 object-cover rounded-full"
              width={160}
              height={160}
            />
            <div className="ml-6 flex flex-row gap-3">

            <div>
              <a href={leader.linkedIn} target="_blank" rel="noopener noreferrer" className="mt-2 block">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="h-6 w-6"
                  width={24}
                  height={24}
                />
              </a>
              </div>
              <div>
              <h2 className="text-xl font-semibold">{leader.name}</h2>
              <p className="text-gray-400">{leader.title}</p>
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaders;
