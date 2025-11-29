import laptop from "../assets/laptop.png";
import { motion } from "framer-motion";

const Analytics = () => {
  return (
    <div className="w-full bg-gradient-to-r from-gray-100 via-white to-gray-100 py-16 px-4 font-[Montserrat]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Animated Image */}
        <motion.img
          src={laptop}
          alt="laptop-img"
          className="w-[500px] mx-auto my-4 drop-shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        />

        {/* Text Content */}
        <motion.div
          className="flex flex-col justify-center text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="uppercase text-[#00df9a] font-bold tracking-widest">
            Data Analytics Dashboard
          </p>

          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-gray-900">
            Manage Data Analytics Centrally
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Gain insights into your data with a centralized dashboard. Track performance, 
            monitor KPIs, and make smarter decisions with real-time analytics tailored for 
            BTB, BTC, and SaaS platforms.
          </p>

          {/* Interactive Button */}
          <motion.button
            className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a] shadow-lg hover:bg-[#111] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;