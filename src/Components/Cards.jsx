import { FaUser, FaUsers, FaUserFriends } from "react-icons/fa";
import { motion } from "framer-motion";

const Cards = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 py-[10rem] px-4 w-full">
      <div className="w-full max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        
        <motion.div
          className="w-full bg-gray-50 shadow-xl flex flex-col p-6 my-4 rounded-lg hover:scale-105 duration-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -10 }}
        >
          <div className="flex justify-center text-[#00df9a] text-5xl">
            <FaUser />
          </div>
          <h2 className="text-2xl font-bold text-center py-6">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send Up to 2 GB</p>
          </div>
          <motion.button
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black shadow-lg hover:bg-[#00c47a] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Trial
          </motion.button>
        </motion.div>

        <motion.div
          className="w-full bg-gray-100 shadow-xl flex flex-col p-6 md:m-0 my-8 rounded-lg hover:scale-105 duration-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{ y: -10 }}
        >
          <div className="flex justify-center text-black text-5xl">
            <FaUserFriends />
          </div>
          <h2 className="text-2xl font-bold text-center py-6">Partnership</h2>
          <p className="text-center text-4xl font-bold">$199</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">3 Users Allowed</p>
            <p className="py-2 border-b mx-8">Send Up to 10 GB</p>
          </div>
          <motion.button
            className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 shadow-lg hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Trial
          </motion.button>
        </motion.div>

        <motion.div
          className="w-full bg-gray-50 shadow-xl flex flex-col p-6 my-4 rounded-lg hover:scale-105 duration-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          whileHover={{ y: -10 }}
        >
          <div className="flex justify-center text-[#00df9a] text-5xl">
            <FaUsers />
          </div>
          <h2 className="text-2xl font-bold text-center py-6">Group Account</h2>
          <p className="text-center text-4xl font-bold">$299</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">5 TB Storage</p>
            <p className="py-2 border-b mx-8">10 Users Allowed</p>
            <p className="py-2 border-b mx-8">Send Up to 20 GB</p>
          </div>
          <motion.button
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black shadow-lg hover:bg-[#00c47a] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Trial
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Cards;