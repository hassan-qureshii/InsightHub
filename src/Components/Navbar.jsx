import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaHome, FaBuilding, FaInfoCircle, FaBookOpen, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 font-[Montserrat]">
      {/* Logo */}
      <motion.h1
        className="w-full text-3xl font-bold text-[#00df9a] cursor-pointer"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        InsightHub
      </motion.h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        <li className="flex items-center gap-2 p-2 hover:text-[#00df9a] transition-colors">
          <FaHome /> Home
        </li>
        <li className="flex items-center gap-2 p-2 hover:text-[#00df9a] transition-colors">
          <FaBuilding /> Company
        </li>
        <li className="flex items-center gap-2 p-2 hover:text-[#00df9a] transition-colors">
          <FaInfoCircle /> About
        </li>
        <li className="flex items-center gap-2 p-2 hover:text-[#00df9a] transition-colors">
          <FaBookOpen /> Resources
        </li>
        <li className="flex items-center gap-2 p-2 hover:text-[#00df9a] transition-colors">
          <FaEnvelope /> Contact
        </li>
      </ul>

      {/* Mobile Icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer z-50">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] z-40 cursor-pointer"
          >
            <h1 className="text-3xl font-bold text-[#00df9a] m-4">InsightHub</h1>
            <ul className="p-4 uppercase space-y-4">
              <li className="flex items-center gap-2 p-2 border-b border-gray-600 hover:text-[#00df9a]">
                <FaHome /> Home
              </li>
              <li className="flex items-center gap-2 p-2 border-b border-gray-600 hover:text-[#00df9a]">
                <FaBuilding /> Company
              </li>
              <li className="flex items-center gap-2 p-2 border-b border-gray-600 hover:text-[#00df9a]">
                <FaInfoCircle /> About
              </li>
              <li className="flex items-center gap-2 p-2 border-b border-gray-600 hover:text-[#00df9a]">
                <FaBookOpen /> Resources
              </li>
              <li className="flex items-center gap-2 p-2 border-b border-gray-600 hover:text-[#00df9a]">
                <FaEnvelope /> Contact
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;