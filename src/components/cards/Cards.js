import React from 'react'
import ActionAreaCard from './Card'
import '../../App.css'
import NewCard from './NewCard'
const Cards = (data) => {

  return (


    <div className='
    lg:grid lg:grid-cols-5  
    md:grid md:grid-cols-3  md:gap-x-[4rem]
    
    grid grid-cols-2 gap-x-[2rem]
    
gap-y-[2rem]
text-white

    
   justify-center
    '>
   {/* {
    data.data && data.data.items.map((item)=><ActionAreaCard key={item.id} item={item}/>)
    
   } */}
   {
    data.data && data.data.items.map((item)=><NewCard key={item.id} item={item}/>)
    
   }
   
    </div>
  )
}

export default Cards
