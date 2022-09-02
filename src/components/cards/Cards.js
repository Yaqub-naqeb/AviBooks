import React from 'react'
import ActionAreaCard from './Card'
import '../../App.css'
import NewCard from './NewCard'
const Cards = (data) => {

  return (
    <div className='  flex text-white flex-wrap gap-16  justify-center shadow-inner'>
   {
    data.data && data.data.items.map((item)=><ActionAreaCard item={item}/>)
    
   }
   
    </div>
  )
}

export default Cards
