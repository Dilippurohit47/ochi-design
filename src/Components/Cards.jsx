import { FlatTree } from "framer-motion";
import React, { useState } from "react";

const Cards = () => {
  const [hover, sethover] = useState(false);
  const [top, settop] = useState(100);
  

  const moveUp = () => {
    settop(-100);

  };

  return (
    <div className="w-full px-32  h-screen bg-zinc-100 flex items-center  gap-5 ">
      <div className="cardContainer h-[50vh] w-1/2">
        <div className="card relative  rounded-xl flex items-center justify-center w-full h-full bg-[#004D43]">
          <img
            w-32
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button
            className="absolute px-5  overflow-hidden  z-0  group  transition-all ease-in-out duration-[0.4s] rounded-full py-2 bottom-10 border-2 left-10"
            onMouseEnter={() => sethover(true)}
            onMouseLeave={() => {
              moveUp(), sethover(false);
            }}
          >
            <p className="z-[2] transition-all ease-in-out duration-[0.4s] font-[500] group-hover:text-black ">
              {" "}
              &copy; 2019
            </p>
            <div
              className={`absolute rounded-full h-full w-full transition-all ease-in-out duration-[0.3s]  left-0  ${
                hover
                  ? "top-[0%] h-full w-full"
                  : `top-[${top}%] h-0 w-0  bg-red-500  transition-all ease-in-out duration-[0.3s]`
              }  z-[-1]  bg-white`}
            ></div>
          </button>
        </div>
      </div>

      <div className="cardContainer flex gap-5 h-[50vh] w-1/2">
        <div className="card w-1/2   flex relative items-center justify-center rounded-xl h-full bg-[#09332d]">
          <img
            w-32
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 rounded-full py-2 bottom-10 border-2 left-10">
            &copy; 2019
          </button>
        </div>
        <div className="card w-1/2 flex relative items-center justify-center rounded-xl h-full bg-[#09332d]">
          <img
            w-32
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 rounded-full py-2 bottom-10 border-2 left-10">
            &copy; 2019
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
