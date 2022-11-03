import React from 'react'
import p5 from '../assets/p5.jpg'

const Hero = () => {
  return (
    <div className=' max-w-[1640px] mx-auto p-4 text-[50px] '>
      <div className=' max-h-[500px] relative  ' >
        {/*Overlay*/ }
        <div className=' p-4 flex flex-col justify-center absolute w-full h-full max-h-[500px font-bold '>
          <h1 className='text-gray-200 lg:text-7xl md:text-4xl ' >The <span className=' text-orange-500'>best</span>  </h1>
          <h1 className='text-gray-200 lg:text-7xl md:text-4xl '> <span className=' text-orange-500'>Foods</span>  Delivered</h1>
        </div>
         <img className='w-full max-h-[500px] object-cover' src={p5} alt="" />
     </div>
      </div>


  )
}

export default Hero