import React from 'react'
import {data} from '../data/data'
import { useState } from 'react';

const Food = () => {
    //filter type pizaa/burger  ...
    const filterType=(category)=>{
        setFoods(
            data.filter((item)=>{
                return item.category===category;
            })
        )
    }
    const filterPrice=(price)=>{
        setFoods(
            data.filter((item)=>{
                return item.price===price;
            })
        )
    }
    //console.log(data)
    const [foods,setFoods]=useState(data);
  return (
    <div className=' max-w-[1640px] mx-auto px-4 py-12 '>
<h1 className='text-orange-600 text-4xl text-center font-bold'>Top Rated Items</h1>
{/* Filter ROW */ }
<div className='flex flex-col lg:flex-row justify-between'>
    {/* Filter Type*/ }
    <div>
        <button onClick={()=>setFoods(data)}>ALL</button>
        <button onClick={()=>filterType('burger')}>Burgers</button>
        <button onClick={()=>filterType('pizza')}>Pizza</button>
        <button onClick={()=>filterType('salad')}>Salads</button>
        <button onClick={()=>filterType('chicken')}>Chicken</button>
    </div>
    {/* Filter price*/ }
<div>
    <p>Filter price</p>
    <div>
        <button onClick={()=>filterPrice('$')}>$</button>
        <button onClick={()=>filterPrice('$$')}>$</button>
        <button onClick={()=>filterPrice('$$$')}>$</button>
        <button onClick={()=>filterPrice('$$$$')}>$</button>
        <button onClick={()=>filterPrice('$$$$$')}>$</button>
    </div>
</div>
</div>
{/**dipslay foods */}
<div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
   {foods.map((item,index)=>{
    return(
        <div key={index} className='border duration-300 rounded-lg shadow-lg hover:scale-105 cursor-pointer'>
            <img className='w-full h-[200px] object-cover rounded-t-lg'  src={item.image} alt={item.name} />           
        <div className='flex justify-between px-2 py-4'>
            <p>{item.name}</p>
            <p>{item.price}</p>
        </div>
        </div>
        
        )
    })}
</div>

    </div>
  )
}

export default Food