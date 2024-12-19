// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// // Sample data for client logos (replace with actual client logos)
// const clients = [
//   { name: "Client 1", logo: "/com.png" },
//   { name: "Client 2", logo: "/com.png" },
//   { name: "Client 3",logo: "/com.png" },
//   { name: "Client 4", logo: "/com.png" },
// ];

// const TestimonialsOrPartners = () => {
//   return (
//     <section className="py-20 bg-white">
//       {/* Client/Partner Logos */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
//           Our Trusted Partners
//         </h2>
//         <p className="text-lg text-gray-500 mb-10">
//           We&apos;re proud to work with industry leaders who share our commitment to innovation and excellence.
//         </p>

//         <div className="flex justify-center items-center gap-16 flex-wrap">
//           {clients.map((client, index) => (
//             <motion.div
//               key={index}
//               className="flex items-center justify-center w-32 h-32 bg-gray-100 rounded-lg p-4 shadow-lg transition-all duration-300"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <img
//                 src={client.logo}
//                 alt={client.name}
//                 className="w-full h-full object-contain"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Testimonial */}
//       <div className="text-center px-4">
//         <motion.h3
//           className="text-2xl font-semibold text-gray-700 mb-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           "Reliable, Innovative, and Always Delivering Excellence."
//         </motion.h3>
//         <motion.p
//           className="text-lg text-gray-600 mb-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           "Evolution Textile's commitment to quality and sustainable practices has made them our preferred partner for years."
//         </motion.p>
//         <motion.div
//           className="text-lg font-bold text-green-600"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//         >
//           — John Doe, CEO, TechPartners Inc.
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsOrPartners;
"use client";
import React from "react";
import { motion } from "framer-motion";

// Sample data for client logos (replace with actual client logos)
const clients = [
  { name: "Client 1", logo: "/com.png" },
  { name: "Client 2", logo: "/com.png" },
  { name: "Client 3", logo: "/com.png" },
  { name: "Client 4", logo: "/com.png" },
];

const TestimonialsOrPartners = () => {
  return (
    <section className="py-20 bg-white">
      {/* Client/Partner Logos */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Our Trusted Partners
        </h2>
        <p className="text-lg text-gray-500 mb-10">
          We&apos;re proud to work with industry leaders who share our commitment to innovation and excellence.
        </p>

        <div className="flex justify-center items-center gap-16 flex-wrap">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center w-32 h-32 bg-gray-100 rounded-lg p-4 shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="text-center px-4">
        <motion.h3
          className="text-2xl font-semibold text-gray-700 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          &quot;Reliable, Innovative, and Always Delivering Excellence.&quot;
        </motion.h3>
        <motion.p
          className="text-lg text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          &quot;Evolution Textile&apos;s commitment to quality and sustainable practices has made them our preferred partner for years.&quot;
        </motion.p>
        <motion.div
          className="text-lg font-bold text-green-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          — John Doe, CEO, TechPartners Inc.
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsOrPartners;
