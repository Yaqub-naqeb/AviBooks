import React from 'react'
import ActionAreaCard from './Card'
import '../../App.css'
const Cards = (data) => {

  return (


    <div className='
    lg:grid lg:grid-cols-4 
    md:grid md:grid-cols-3  md:gap-x-[4rem]
    
    
    grid grid-cols-2 gap-x-[1rem]
    
gap-y-[10rem]
text-white

    
   justify-center
    '>
   {
    data.data && data.data.items.map((item)=><ActionAreaCard key={item.id} item={item}/>)
    
   }
   
    </div>
  )
}

export default Cards
