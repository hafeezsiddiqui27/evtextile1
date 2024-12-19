"use client"
// import Link from "next/link";
// import React, { useState } from "react";
// import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Form submitted!");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="flex flex-col-reverse md:flex-row items-center justify-between px-4 py-16 bg-white">
//       {/* Left Side - Contact Form */}
//       <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4 mt-8 ">
//         <h3 className="text-[#252B42] font-semibold text-xl md:text-2xl mb-4">CONTACT FORM</h3>
//         <h1 className="text-[#252B42] font-extrabold text-3xl sm:text-4xl md:text-5xl mb-8 leading-tight">
//           We'd love to hear from you!
//         </h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             className="w-full p-5 bg-gray-100 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Your Email"
//             className="w-full p-5 bg-gray-100 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
//           />
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Your Message"
//             className="w-full p-5 bg-gray-100 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
//             rows={6}
//           />
//           <button
//             type="submit"
//             className="w-full p-5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-green-600"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>

//       {/* Right Side - Contact Info */}
//       <div className="w-full md:w-1/2 md:ml-16 text-center mb-8 md:text-left px-4 mt-8">
//         <h3 className="text-[#252B42] font-semibold text-xl md:text-2xl mb-4">CONTACT INFO</h3>
//         <h1 className="text-[#252B42] font-extrabold text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight">
//           Get in Touch <br />
//           Today!
//         </h1>
//         <p className="text-[#737373] text-base sm:text-lg md:text-xl mb-8">
//           We understand the importance of your needs. Reach out to us with any queries or concerns.
//         </p>

//         {/* Phone and Fax Section */}
//         <div className="text-[#252B42] font-semibold text-lg mb-6">
//           <h3>Phone: <span className="font-normal">+451 215 215</span></h3>
//           <h3>Fax: <span className="font-normal">+451 215 215</span></h3>
//         </div>

//         {/* Social Media Icons */}
//         <div className="flex justify-center md:justify-start gap-8 mt-8">
//           <Link
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#252B42] hover:text-blue-500 text-5xl transition duration-300 ease-in-out transform hover:scale-125"
//           >
//             <FaTwitter />
//           </Link>
//           <Link
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#252B42] hover:text-blue-700 text-5xl transition duration-300 ease-in-out transform hover:scale-125"
//           >
//             <FaFacebook />
//           </Link>
//           <Link
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#252B42] hover:text-pink-500 text-5xl transition duration-300 ease-in-out transform hover:scale-125"
//           >
//             <FaInstagram />
//           </Link>
//           <Link
//             href="https://linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#252B42] hover:text-blue-600 text-5xl transition duration-300 ease-in-out transform hover:scale-125"
//           >
//             <FaLinkedin />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

    return (
        <div className="">
            <Navbar />
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-16 bg-white">
      {/* Left Side - Contact Form */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4 mt-8 flex flex-col items-center md:items-start">
        <h3 className="text-[#2C7A57] font-semibold text-xl md:text-2xl mb-4">CONTACT FORM</h3>
        <h1 className="text-[#252B42] font-extrabold text-3xl sm:text-4xl md:text-5xl mb-8 leading-tight text-center md:text-left">
          We&apos;d love to hear from you!
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-5 bg-gray-100 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-5 bg-gray-100 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-5 bg-gray-100 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
            rows={6}
          />
          <button
            type="submit"
            className="w-full p-5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-green-600"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Side - Contact Info */}
      <div className="w-full md:w-1/2 md:ml-16 text-center mb-8 md:text-left px-4 mt-8 flex flex-col items-center md:items-start">
        <h3 className="text-[#2C7A57] font-semibold text-xl md:text-2xl mb-4">CONTACT INFO</h3>
        <h1 className="text-[#252B42] font-extrabold text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight text-center md:text-left">
          Get in Touch <br />
          Today!
        </h1>
        <p className="text-[#737373] text-base sm:text-lg md:text-xl mb-8">
          We understand the importance of your needs. Reach out to us with any queries or concerns.
        </p>

        {/* Phone and Fax Section */}
        <div className="text-[#252B42] font-semibold text-lg mb-6">
          <h3>Phone: <span className="font-normal">+451 215 215</span></h3>
          <h3>Fax: <span className="font-normal">+451 215 215</span></h3>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-8 mt-8">
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2C7A57] hover:text-blue-500 text-5xl transition duration-300 ease-in-out transform hover:scale-125"
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2C7A57] hover:text-blue-700 text-5xl transition duration-300 ease-in-out transform hover:scale-125"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2C7A57] hover:text-pink-500 text-5xl transition duration-300 ease-in-out transform hover:scale-125"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2C7A57] hover:text-blue-600 text-5xl transition duration-300 ease-in-out transform hover:scale-125"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
            </div>
            </div>
  );
};

export default ContactUs;
