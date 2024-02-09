import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


const About = () => {

  return (
    <div  className='w-full p-20  rounded-tl-3xl text-black rounded-tr-3xl bg-[#CDEA68]'>
      <h1 className='font-[Neue_Montreal]  tracking-tight text-[3.5vw]  pr-[10vw] leading-[3.8vw] '>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>

<div className='w-full py-[3vh] flex border-t-[1px] mt-20 border-[#545d37]'>
  <div className='w-1/2   transition-all duration-200 ease-in'>
    <h1 className='text-[3.5vw] mt-[-2vh]  '>Our approach:</h1>
    <button className='bg-black mt-[2vh] overflow-hidden relative h-[3.5vw] pl-[3vw] w-[13vw]  uppercase text-white flex group items-center  gap-[1vw] rounded-full transition-all duration-300'>
 <p className=''>    Read More</p>
    <div className="circle transition-all translate-x-5 ease-in group-hover:translate-x-[0.5vw] duration-200 group-hover:h-9 group-hover:w-9 border-[1px] flex items-center justify-center bg-white text-black border-zinc-500 rounded-full w-2 h-2">
        <span className="rotate-[45deg] hidden group-hover:block">
            <FaArrowUpLong />
        </span>
    </div>
    <div className='bg-[#ffffff22] group-hover:translate-y-[-100%] transition ease-in-out duration-[0.1s] w-full h-full left-0 z-[0]  absolute'></div>
</button>
  </div>

  <div className='w-1/2 h-[65vh]  overflow-hidden  rounded-[2vh]'>
    <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />

  </div>

</div>

    </div>
  )
}

export default About
