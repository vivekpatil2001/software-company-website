

// import React from 'react';
// import Image from 'next/image';

// interface SecurityCardProps {
//   images: string;
//   altText: string;
//   title: string;
//   text: string;
//   width: number;
//   height: number;
// }

// const SecurityCard: React.FC<SecurityCardProps> = ({ images, altText, title, text, width, height }) => {
//   return (
//     <div className='lg:h-[90vh] w-60 mb-4 cursor-pointer text-left'>
//       <Image src={images} alt={altText} width={width} height={height} />
//       <p className='font-bold text-2xl my-4'>{title}</p>
//       <p className='font-normal'>{text}</p>
//     </div>
//   );
// }

// export default SecurityCard;



















import React from 'react';
import Image from 'next/image';

interface SecurityCardProps {
  images: string;
  altText: string;
  title: string;
  text: string;
  width: number;
  height: number;
}

const SecurityCard: React.FC<SecurityCardProps> = ({ images, altText, title, text, width, height }) => {
  return (
    <div className='lg:h-fit lg:p-6 lg:w-[20vw] mb-4 cursor-pointer text-left hover:shadow-lg transform transition-all duration-300'>
      <div className="relative overflow-hidden">
        <Image
          src={images}
          alt={altText}
          width={width}
          height={height}
          className="hover:translate-x-2 transition-transform duration-300"
        />
      </div>
      <p className='font-bold text-2xl my-4 hover:text-green-500 transition-colors duration-300'>{title}</p>
      <p className='font-normal'>{text}</p>
    </div>
  );
}

export default SecurityCard;


