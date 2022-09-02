import React from 'react'
import ActionAreaCard from './Card'
import '../../App.css'
const Cards = (data) => {

  return (
    <div className='  flex text-white flex-wrap gap-16  justify-center shadow-inner'>
   {
    data.data && data.data.items.map((item)=><ActionAreaCard key={item.id} item={item}/>)
    
   }
   
    </div>
  )
}

export default Cards
