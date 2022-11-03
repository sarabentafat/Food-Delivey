import React ,{useState} from 'react';

import {AiOutlineMenu,AiOutlineSearch,AiOutlineClose} from 'react-icons/ai';
import {BsFillCartFill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';


const Navbar = () => {
  const [nav,setNav]=useState(false);
  return (
   
    <div className=' max-w-[1640px] mx-auto flex items-center justify-between p-4'>
        {/* left side */ }
        <div className='flex items-center'>
           <div onClick={()=>setNav(!nav)} className='cursor-pointer'>
            <AiOutlineMenu size={30}/>
           </div>
           <h1 className='text-2xl sm:text-3xl lg-text-4xl px-2'>
            Best <span className='font-bold'>Eats</span>
           </h1>
            <div className=' mx-4 hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
              <p className='bg-black text-white rounded-full p-2'> Delivery  </p>
              <p className='  p-2' >pickeup</p>       
            </div>
        </div>
        {/* Search side*/}
        <div className='bg-gray-200 rounded-full flex items-center 
        w-[200px] sm:w-[400px] lg:w-[500px]
        
        px-2 '>
        <AiOutlineSearch size={20}/>
        <input type="text" placeholder='search food' className='bg-transparent p-2
        focus:outline-none w-full' 
        />
        </div>
        {/* cart button*/ }
        <button className='bg-black py-2 rounded-full text-white hidden md:flex items-center py-2  '>
         
          <BsFillCartFill className='mr-2' size={20}/> cart
        </button>
        {/*MOBILE MENU*/ }
        {/* OVERLAY */ }
        {nav ?  <div className='bg-black/80 fixed w-full z-10 h-screen  top-0 left-0 '>
        </div>: ''}
       
        {/* SIDE DRAWER MENU*/ }
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white   z-10 duration-300 '
       : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white   z-10 duration-300'}>
          <AiOutlineClose 
          onClick={()=>setNav(!nav)}
          
          size={30} className=' absolute right-4 top-4 cursor-pointer' />
          <h2 className=' p-4 text-xl'>Best <span className='font-bold'>Eats</span></h2>
         <nav className=' p-4'>
          <ul>
            <li className='flex items-center text-xl py-4'><TbTruckDelivery size={25} className='mr-4'/>Orders</li>
            <li className='flex items-center text-xl py-4'><TbTruckDelivery size={25} className='mr-4'/>Orders</li>
            <li className='flex items-center text-xl py-4'><TbTruckDelivery size={25} className='mr-4'/>Orders</li>
            <li className='flex items-center text-xl py-4'><TbTruckDelivery size={25} className='mr-4'/>Orders</li>
            <li className='flex items-center text-xl py-4'><TbTruckDelivery size={25} className='mr-4'/>Orders</li>
          </ul>
         </nav>
        </div>



        
</div>
     
  )
}

export default Navbar