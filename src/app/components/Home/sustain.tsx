"use client";
import React from "react";
import { motion } from "framer-motion";


const SustainabilityMission = () => {
  return (
    <section className="py-20 bg-white flex flex-col md:flex-row items-center justify-between px-4">
      {/* Left: Text and CTA */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
        <motion.h2
          className="text-5xl font-extrabold text-green-600 tracking-wider mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Sustainability Mission
        </motion.h2>
        <p className="text-lg text-gray-600 mb-6">
          We are committed to preserving the planet through eco-friendly initiatives, green technologies, and sustainable practices. Our goal is to reduce environmental impact and foster a cleaner future.
        </p>
        <motion.button
          className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More About Our Mission
        </motion.button>
      </div>

      {/* Right: Animated Visual */}
      <div className="w-full md:w-1/2 flex justify-center">
        <motion.div
          className="w-full h-[300px] md:h-[500px] bg-green-100 rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* If using an external animation (e.g., Lottie) */}
          <iframe
            src={"/sustain1.mp4"}
            title="Sustainability Animation"
            className="w-full h-full bg-red"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default SustainabilityMission;
