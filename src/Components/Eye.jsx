import React, { useEffect, useState } from "react";

const Eye = () => {

    const [rotate , setrotate] = useState(0)
    const [deltaX, setDeltaX] = useState(0);
    const [deltaY, setDeltaY] = useState(0);
    useEffect(() =>{

        window.addEventListener("mousemove",(e) =>{
            let mouseX  = e.clientX;
            let mouseY= e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2

            var angle = Math.atan2(deltaY , deltaX) * 180/Math.PI;
            setrotate(angle - 180)
            setDeltaX(deltaX*0.02);
            setDeltaY(deltaY*0.02)
        })

    },[])

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll  data-scroll-speed="-.7" className=" w-full relative bg-cover  bg-center h-full bg-image ">
        <div className="absolute flex gap-10  top-1/2 left-1/2  -translate-x-[50%] translate-y-[-50%] ">
          <div className="w-[15vw] flex items-center justify-center rounded-full h-[15vw]   bg-zinc-100">



            <div style={{transform: `translateX(${deltaX}%) translateY(${deltaY}%)`}} className="w-2/3  rounded-full h-2/3 relative bg-zinc-800">
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line  absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  w-full h-10">                      
              <div className="w-8 rounded-full h-8  bg-zinc-100"></div>
                </div>

            </div>
          </div>
          <div className="w-[15vw] flex items-center justify-center rounded-full h-[15vw]  bg-zinc-100">
           
          <div  style={{transform: `translateX(${deltaX}%) translateY(${deltaY}%)`}}  className="w-2/3 rounded-full h-2/3 relative bg-zinc-800">
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className="line absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  w-full h-10">                      
              <div className="w-8 rounded-full h-8  bg-zinc-100"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eye;
