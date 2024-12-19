"use client";
import React from "react";
import { motion } from "framer-motion";

// Data for each highlight
const highlights = [
  {
    title: "Innovation in Chemistry",
    description:
      "Pioneering chemical and polymer solutions for a sustainable future.",
    image: "/hero1.png",
  },
  {
    title: "Sustainability Focus",
    description:
      "Committed to eco-friendly practices that reduce environmental impact.",
    image: "/hero.png",
  },
  {
    title: "Global Reach",
    description: "Serving industries across 40+ countries worldwide.",
    image: "/hero1.png",
  },
  {
    title: "Cutting-edge Technology",
    description:
      "Utilizing state-of-the-art technology for high-quality products.",
    image: "/hero.png",
  },
];

const KeyHighlights = () => {
  return (
    <section className="py-16 bg-white text-black">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black">
          Key Highlights
        </h2>
        <p className="text-lg mt-4 text-gray-600">
          Why Choose Evolution Textile?
        </p>
      </div>

      <div className="space-y-16">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between gap-8 px-4 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            {/* Left Image */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <motion.img
                src={highlight.image} // Use hero.png as the image source for all highlights
                alt="Highlight"
                className="w-full h-auto object-cover rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.3 }}
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <motion.h3
                className="text-3xl font-semibold text-black mb-4 hover:text-green-600 transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.3 }}
              >
                {highlight.title}
              </motion.h3>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed mb-4 hover:text-gray-900 transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.4 }}
              >
                {highlight.description}
              </motion.p>

              {/* Button or additional action (optional) */}
              <motion.button
                className="bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default KeyHighlights;
