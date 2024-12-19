"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <motion.h3
              className="text-2xl font-semibold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Evolution Textile
            </motion.h3>
            <motion.p
              className="text-lg text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Redefining the future of chemicals and polymers with sustainable, innovative solutions.
            </motion.p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <motion.h4
              className="text-xl font-semibold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Pages
            </motion.h4>
            <motion.ul
              className="text-lg space-y-2 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <li>
                <a href="#home" className="hover:text-green-500 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-500 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-green-500 transition-colors duration-300">
                  Products
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-green-500 transition-colors duration-300">
                  Industries
                </a>
              </li>
              <li>
                <a href="#sustainability" className="hover:text-green-500 transition-colors duration-300">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-green-500 transition-colors duration-300">
                  Insights
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-500 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </motion.ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <motion.h4
              className="text-xl font-semibold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Follow Us
            </motion.h4>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://twitter.com"
                className="text-2xl text-gray-400 hover:text-white transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                className="text-2xl text-gray-400 hover:text-white transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com"
                className="text-2xl text-gray-400 hover:text-white transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <FaGithub />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-400 text-lg">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            &copy; 2024 Evolution Textile. All Rights Reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
