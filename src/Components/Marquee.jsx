import React from "react";
import "../index.css";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section  data-scroll-speed=".1"  className="w-full py-16 rounded-tr-3xl overflow-x-hidden rounded-tl-3xl bg-[#004D43] ">
      <div className="text border-t-2 whitespace-nowrap  flex border-b-2 border-zinc-300 ">
        {Array(2)
          .fill("We are Uchiha")
          .map((item, index) => (
  
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:"Infinity" ,ease:"linear" ,duration:5}} className="text-[18vw] test  leading-none  font-[Gonder ] mb-[3vh] tracking-tighter pr-[2vw] font-[800]  uppercase  ">
              {item}
            </motion.h1>
          ))}
      </div>
    </div>
  );
};

export default Marquee;
