// import React from 'react';
// import { img1, cardImage1 } from '../assets/images'; // Replace with your actual image paths

// const FloatingImages = () => {
//   return (
//     <section className="w-full h-screen flex justify-center items-center">
//       <div className="flex space-x-8 mt-32">
//         <a href="https://x.com/MewFishsol" target="_blank" rel="noopener noreferrer">
//           <img
//             src={img1}
//             alt="Link to Site 1"
//             className="w-[100px] h-auto md:w-[150px] lg:w-[200px] float-animation transition-transform duration-300 transform hover:scale-105"
//           />
//         </a>
//         <a href="https://t.me/MEWFISH2MILLIS" target="_blank" rel="noopener noreferrer">
//           <img
//             src={cardImage1}
//             alt="Link to Site 2"
//             className="w-[100px] h-auto md:w-[150px] lg:w-[200px] float-animation transition-transform duration-300 transform hover:scale-105"
//           />
//         </a>
//       </div>
//     </section>
//   );
// };

// export default FloatingImages;


import React from 'react';
import { img1, cardImage1 } from '../assets/images'; // Replace with your actual image paths

const FloatingImages = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center bg-black ">
      <div className="flex space-x-12 mt-32">
        <a
          href="https://x.com/MewFishsol"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={img1}
            alt="Link to Site 1"
            className="w-[120px] md:w-[180px] lg:w-[220px] float-animation transition-transform duration-500 transform hover:scale-125 hover:rotate-12 shadow-xl  rounded-full"
          />
        </a>
        <a
          href="https://t.me/MEWFISH2MILLIS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={cardImage1}
            alt="Link to Site 2"
            className="w-[140px] md:w-[200px] lg:w-[260px] spin-animation transition-transform duration-700 transform hover:scale-110 hover:-rotate-12 shadow-lg rounded-fulls"
          />
        </a>
      </div>
    </section>
  );
};

export default FloatingImages;
