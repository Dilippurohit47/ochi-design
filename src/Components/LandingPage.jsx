import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import Design from "../assets/desgin.jpg"

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-2">
      <div className="textstructure mt-36 px-16 ">
        {["We create", "Eye Opening", "Presentations"].map((item, index) => (
          <div key={index} className="masker ">
            <div className="w-fit items-end overflow-hidden  flex">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1] , duration:1}}

                  className="w-[9vw]  relative bg-cover  Design-image rounded-md h-[5.4vw]  mt-[3vh] "

                >    </motion.div>

                
              )}
              <h1 className='uppercase text-[7.5vw] tracking-tighter leading-[6.5vw] font-[600]  font-["Founders_Grotesk_X-Condensed "]'>
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-[1px] border-zinc-700 py-4 px-20 mt-36 flex justify-between items-center">
        {[
          "For Public and private companies ",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className=" font-light tracking-tight flex items-center justify-center leading-none">
            {item}
          </p>
        ))}

        <div className="start flex items-center group gap-3">
          <div className="px-5 py-1 border-[1px]   group-hover:bg-white group-hover:text-black transition ease-in-out duration-[0.3s] font-[500]  cursor-pointer  border-zinc-500 rounded-full uppercase">
            {" "}
            Start the project
          </div>
          <div className="cricel border-[1px] relative  flex items-center justify-center  border-zinc-500 rounded-full w-9 h-9">
            <span className="rotate-[45deg] group-hover:text-black">
     
              <div className="bg-white z-[-999]  group-hover:w-8 duration-[0.4s]  group-hover:top-[-1vh] group-hover:left-[-1vh] transition-all ease-in-out   group-hover:h-8 rounded-full w-0 h-0 absolute top-[0.7vh] left-[0.4vw] ">    </div>
                <p >
                <FaArrowUpLong />
                </p>
                
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
