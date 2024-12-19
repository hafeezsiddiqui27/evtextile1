// // import Image from 'next/image'
// // import React from 'react'

// // const Hero = () => {
// //   return (
// //       <div>
        
// //     </div>
// //   )
// // }

// // export default Hero
// "use client"
// import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section className="relative flex items-center justify-center h-screen bg-white text-black overflow-hidden">
//       <img
//         src="/hero.png"
//         alt="Background"
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-60" // Adjust opacity for subtle background
//       />
      
//       <motion.div
//         className="relative text-center max-w-3xl px-4 z-10"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">
//           Evolution Textile
//         </h1>
//         <p className="text-lg md:text-xl mb-8">
//           Where Chemistry Meets Sustainability
//         </p>
//         <p className="text-sm md:text-base mb-6">
//           Pioneering sustainable solutions in chemical and polymer industries for over 30 years.
//         </p>
        
//         <div className="flex justify-center gap-4">
//           <motion.button
//             className="px-6 py-3 text-lg font-semibold border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Explore Products
//           </motion.button>

//           <motion.button
//             className="px-6 py-3 text-lg font-semibold border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Our Story
//           </motion.button>
//         </div>
//       </motion.div>

//       {/* Curved Effect at the Bottom */}
//       <div className="absolute bottom-0 left-0 w-full h-24 bg-white rounded-t-full"></div>
//     </section>
//   );
// };

// export default Hero;
"use client"
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-white text-black overflow-hidden bg-fixed">
      <img
        src="/hero.png"
        alt="Background"
        className="absolute top-0 bg-fixed left-0 w-full h-full object-cover opacity-60" // Adjust opacity for subtle background
      />
      
      <motion.div
        className="relative text-center max-w-3xl px-4 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Evolution Textile
        </h1>

        <motion.div
          className="text-lg md:text-xl mb-8 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Typewriter
            options={{
              strings: ["Where Chemistry Meets Sustainability"],
              autoStart: true,
              loop: true,
              delay: 75, // Adjust typing speed
            }}
          />
        </motion.div>

        <p className="text-sm md:text-base mb-6">
          Pioneering sustainable solutions in chemical and polymer industries for over 30 years.
        </p>
        
        <div className="flex justify-center gap-4">
          <motion.button
            className="px-6 py-3 text-lg font-semibold border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Products
          </motion.button>

          <motion.button
            className="px-6 py-3 text-lg font-semibold border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Story
          </motion.button>
        </div>
      </motion.div>

      {/* Curved Effect at the Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white rounded-t-full"></div>
    </section>
  );
};

export default Hero;
