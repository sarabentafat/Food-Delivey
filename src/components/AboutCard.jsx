import React from 'react'

const AboutCard = (props) => {
  return (
    <div className=' bg-gray border rounded-lg w-70 m-2'>
    <div className=' h-40  relative'>
        <img  className='rounded-lg absolute object-cover w-full h-full' src={props.img}/>
      <div className=' px-5 z-5 absolute text-white '>
        <h1 className='font-bold py-4  ' >{props.title}</h1>
        <p className=' absolute'>{props.details}</p>
        <button className='  rounded-lg mt-12 mx-4 bg-orange-600 border-none hover:bg-black' >Order Now</button>
        </div>
    </div>
    </div>
  )
}

export default AboutCard