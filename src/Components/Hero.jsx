import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="max-w-[800px] w-full mt-[-96px] mx-auto text-center flex flex-col justify-center items-center h-screen text-white">
      <p className="uppercase text-[#00df9a] p-2 font-bold ">
        Growing with Data Analytics
      </p>

      <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4">
        Grow with Data.
      </h1>

      <div className="flex justify-center items-center gap-2">
        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
          Fast, Flexible financing for
        </p>
        
        {/* Typing Animation */}
          <ReactTyped className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-400 pl-2 md:pl-2"
            strings={["BTB", "BTC", "SaaS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
      </div>
        <p className="md:text-2xl text-xl font-bold text-gray-600 ">
          Monitor your data analytics to increase revenue for BTB, BTC, & SaaS platforms. 
        </p>

        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>

    </div>
  );
};

export default Hero;

