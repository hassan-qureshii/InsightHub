import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="max-w-[800px] w-full mt-[-96px] mx-auto text-center flex flex-col justify-center items-center h-screen text-white font-[Montserrat]">
      
      <motion.p
        className="uppercase text-[#00df9a] p-2 font-bold tracking-widest"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Growing with Data Analytics
      </motion.p>

      <motion.h1
        className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Grow with Data.
      </motion.h1>

      <motion.div
        className="flex justify-center items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
          Fast, Flexible financing for
        </p>

        <ReactTyped
          className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-400 pl-2 md:pl-2"
          strings={["BTB", "BTC", "SaaS"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </motion.div>

      <motion.p
        className="md:text-2xl text-xl font-bold text-gray-400 max-w-[600px] px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Monitor your data analytics to increase revenue for BTB, BTC, & SaaS platforms.
      </motion.p>

      <motion.button
        className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black shadow-lg hover:bg-[#00c47a] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </div>
  );
};

export default Hero;