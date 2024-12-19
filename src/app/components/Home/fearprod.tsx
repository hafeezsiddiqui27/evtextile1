
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Data for each product
const products = [
  {
    title: "Innovation in Chemistry",
    description: "Pioneering chemical and polymer solutions for a sustainable future.",
    image: "/hero1.png"
  },
  {
    title: "Sustainability Focus",
    description: "Committed to eco-friendly practices that reduce environmental impact.",
    image: "/hero.png"
  },
  {
    title: "Global Reach",
    description: "Serving industries across 40+ countries worldwide.",
    image: "/hero1.png"
  },
  {
    title: "Cutting-edge Technology",
    description: "Utilizing state-of-the-art technology for high-quality products.",
    image: "/hero.png"
  },
];

const Products = () => {
  const [inView, setInView] = useState<boolean[]>(new Array(products.length).fill(false));

  // Function to detect whether an element is in view
  const handleScroll = (index: number) => {
    const element = document.getElementById(`product-${index}`);
    if (element) {
      const rect = element.getBoundingClientRect();
      setInView((prevState) => {
        const updatedState = [...prevState];
        updatedState[index] = rect.top >= 0 && rect.top <= window.innerHeight;
        return updatedState;
      });
    }
  };

  // Add scroll event listener to handle scroll animations
  useEffect(() => {
    const handle = () => {
      products.forEach((_, index) => handleScroll(index));
    };
    window.addEventListener("scroll", handle);
    handle(); // Call on initial load

    return () => {
      window.removeEventListener("scroll", handle);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      {/* Top Decorative Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-green-500 to-black mb-16"></div>

      <div className="text-center mb-16 text-black">
        <h2 className="text-5xl font-extrabold tracking-wider mb-4 text-gray-900">
          Our Products
        </h2>
        <p className="text-lg mt-4 text-gray-600">
          Discover the innovative products shaping the future of textiles and chemicals.
        </p>
      </div>

      <div className="space-y-16">
        {products.map((product, index) => (
          <div
            key={index}
            id={`product-${index}`}
            className={`relative flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-8 ${
              index % 2 === 0 ? "bg-white shadow-lg" : "bg-gray-200 shadow-md"
            } rounded-xl transition-all duration-500`}
          >
            {/* Product Image */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: inView[index] ? 1 : 0,
                x: inView[index] ? 0 : -100,
              }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <motion.img
                src={product.image}
                alt={product.title}
                className="w-full h-[60vh] object-cover rounded-xl shadow-lg transition-all duration-500 hover:scale-105"
              />
            </motion.div>

            {/* Product Content */}
            <div className="w-full md:w-1/2 text-center md:text-left p-8">
              <motion.h3
                className="text-3xl font-semibold mb-4 text-black"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: inView[index] ? 1 : 0,
                  y: inView[index] ? 0 : -50,
                }}
                transition={{ duration: 1, delay: index * 0.4 }}
              >
                {product.title}
              </motion.h3>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: inView[index] ? 1 : 0,
                  y: inView[index] ? 0 : 50,
                }}
                transition={{ duration: 1, delay: index * 0.5 }}
              >
                {product.description}
              </motion.p>
              <motion.button
                className="bg-transparent border-2 border-black text-black px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-500 hover:bg-black hover:text-white transform hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
