import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex gap-5 h-screen py-20 px-10 bg-zinc-800'>

        <div className="w-1/2  h-full flex flex-col justify-between uppercase">
<div className=''>
<h1 className='text-[8vw] tracking-tighter font-semibold mb-[-1vw] leading-none '>Eye</h1>
<h1 className='text-[8vw] font-semibold tracking-tighter leading-none  '>Opening</h1>
</div>
<h2 className='text-[2vw] font-[900] '>Ochi</h2>

        </div>


        <div className="w-1/2">
        <h1 className='text-[6vw] tracking-tighter font-semibold mb-[-1vw] leading-none  uppercase'>Prsentations</h1>

<div className='dets mt-[5vh]'>
{
            ["instagram","facebook","linkedin","tweeter "].map((item,index) =>(
<h1 className='capitalize text-[2vw] font-[400] underline'>{item}</h1>
            ))
        }

</div>

       

        </div>
      
    </div>
  )
}

export default Footer
