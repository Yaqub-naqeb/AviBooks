import React from 'react'
import '../../App.css'
import NewCard from './NewCard'
const Cards = (data) => {
  console.log(data.data)
  return (
    //All Cards
    <div className='

    lg:grid lg:grid-cols-5  
    md:grid md:grid-cols-3  md:gap-x-[4rem] 
    grid grid-cols-2  
gap-y-[2rem]
text-white  
   justify-center
    '>
   {
    
    data.data && data.data.items.map((item)=>item.volumeInfo.imageLinks && item.volumeInfo.title&&<NewCard key={item.id} item={item}/>)
    
   }
    </div>
  )
}

export default Cards
