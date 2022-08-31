import React from 'react'
import ActionAreaCard from './Card'

const Cards = (data) => {
// console.log(data.data.items);

  return (
    <div className='flex flex-wrap gap-5'>
   {
    data.data && data.data.items.map((item)=><ActionAreaCard item={item}/>)
   }
    </div>
  )
}

export default Cards
