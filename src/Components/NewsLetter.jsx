import React from "react";
import { motion } from "framer-motion";

// Add Google Fonts in index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">

const NewsLetter = () => {
  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white py-20 px-4 font-[Montserrat]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="md:text-4xl text-2xl font-bold py-2 max-w-[500px]">
            Want Tips & Tricks to optimize your flow?
          </h1>
          <p className="font-semibold text-gray-300">
            Sign up to our newsletter and stay up to date.
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[300px] p-3 rounded-[15px] text-[#f3f8fc] focus:outline-none focus:ring-2 focus:ring-[#00df9a] border-b-1 "
            />
            <motion.button
              className="bg-[#00df9a] text-black font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-[#00c47a] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Notify me
            </motion.button>
          </div>

          {/* Privacy Note */}
          <div className="mt-4 text-sm text-gray-400">
            <p>
              We care about the protection of your data. Read our{" "}
              <a className="cursor-pointer underline text-[#00df9a] hover:text-[#00c47a]">
                Privacy Policy
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsLetter;