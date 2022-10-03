import React, { useState } from 'react'
import useTheme  from '../store/useTheme';




const Searchbar = () => {


  const Options = [
    { option: "All" },
    { option: "General" },
    { option: "Crime" },
    { option: "Education" },
    { option: "Sports" },
    { option: "Science" },
    { option: "History" },
    { option: "Manga" },
    { option: "Superheros" },
    { option: "Literary" },
    { option: "Fantasy" },
    { option: "Romance" },
  ];

 

  //to change Search
  const {searchBooks,NumBooks}=useTheme();
const [srch,setSrch]=useState('');
  
const onKeyHandler=(e)=>{
   if(e.key==='Enter'){
    searchBooks(e.target.value);
    NumBooks(12)
setSrch('');


   }

}

  return (
    <div>
 

<div className='flex relative w-fit ml-[3%] 
 md:ml-[30%] lg:ml-[40%] 
 mt-5rem
   align-middle justify-center gap-4 '>
<span className='absolute top-1  left-0'><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
   <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
 </svg></span>
<input
   onChange={e=>{setSrch(e.target.value)}}
   value={srch}
   onKeyDown={onKeyHandler}
   type="text" className=' rounded-md p-1 pl-5'   
   
   placeholder=' Search'
   
  />
  

<select className='bg-transparent font-bold text-white  w-[5rem]' onChange={e=>searchBooks(e.target.value)}>
    {
      Options.map(opt=>(
        <option key={opt.option} value={opt.option} className='bg-[#1A195F] border-none  ' >{opt.option}</option>
      ))
    }
</select>
</div>

    </div>
  )
}

export default Searchbar
