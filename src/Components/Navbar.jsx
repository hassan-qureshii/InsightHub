import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-[#00df9a]">Home</li>
        <li className="p-4 hover:text-[#00df9a]">Company</li>
        <li className="p-4 hover:text-[#00df9a]">About</li>
        <li className="p-4 hover:text-[#00df9a]">Resources</li>
        <li className="p-4 hover:text-[#00df9a]">Contact</li>
      </ul>

      {/* Mobile Icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[40%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]">Home</li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]">Company</li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]">About</li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]">Resources</li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
