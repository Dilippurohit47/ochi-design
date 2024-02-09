import { motion, useAnimation } from "framer-motion";
import React from "react";
const Featured = () => {


    const cards = [useAnimation(),useAnimation()];

    const handleHover =(index) =>{
cards[index].start({
y:"0"
})}

const handleHoverEnd =(index) =>{
    cards[index].start({
        y:"100%"
    })
}

  return (
    <div className="w-full py-20 bg-zinc-100">
      <div className="w-full px-20 border-b-[1px] border-zinc-700    pb-20 ">
        <h1 className="text-6xl text-black tracking-tight">Featured Projects</h1>
      </div>
      {/* card sructure */}
      <div className="px-20">
  
        <div className="cards w-full flex gap-10 mt-10  ">



          {/* one div */}
          <motion.div   onHoverEnd={() => handleHoverEnd(0)}  onHoverStart={()=>handleHover(0)} className="card group  relative w-1/2 h-[75vh]  ">
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] left-[105%] leading-none tracking-tighter z-[999] text-8xl -translate-x-1/2 top-1/2 -translate-y-1/2 ">
              {"FYDE".split("").map((item, index) => (
                <motion.span  initial={{y:"100%"}} animate={cards[0]}   transition={{ease:[0.22,1,0.36,1], delay:index*.1}} className=" font-[700] inline-block translate-y-[100%] ">{item}</motion.span>
              ))}
            </h1>

            <div className="w-full overflow-hidden group-hover:scale-[0.95] transition ease-in-out duration-[0.8s]   h-full rounded-xl  ">
              <img
                className="w-full  h-full group-hover:scale-[1.09] transition ease-in-out duration-[0.8s]   bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="image"
              />
            </div>
          </motion.div>
          {/* end */}



          {/* 2nd div */}
          <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="card relative group  w-1/2 h-[75vh] ">
            <h1 className="absolute overflow-hidden text-[#CDEA68] right-full leading-none tracking-tighter z-[999] flex text-8xl translate-x-1/2 top-1/2 -translate-y-1/2 ">
              {"VISE".split("").map((item, index) => (
   <motion.span  initial={{y:"100%"}} animate={cards[1]}   transition={{ease:[0.22,1,0.36,1], delay:index*.1}} className=" inline-block translate-y-[100%] font-[700] ">{item}</motion.span>
              ))}
            </h1>

            <div className="w-full h-full group-hover:scale-[0.95] transition ease-in-out duration-[0.8s]  rounded-xl overflow-hidden  ">
              <img
                className="w-full h-full  group-hover:scale-[1.09] transition ease-in-out duration-[0.8s]  bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="image"
              />
            </div>
          </motion.div>

          {/* end */}
        </div>



      </div>
    </div>
  );
};

export default Featured;
