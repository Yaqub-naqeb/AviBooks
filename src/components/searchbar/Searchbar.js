import React, { useState } from 'react'
import useTheme  from '../store/useTheme';
import { useFetch } from '../hooks/useFetch';

const Searchbar = () => {
  //to change Search
  const {search,searchBooks}=useTheme();
const [srch,setSrch]=useState('');


//   const {data}=useFetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyB7HQMPsqL4arih1btaqOyyGR20PCtIVrQ`)


  
const onKeyHandler=(e)=>{
   if(e.key==='Enter'){
    searchBooks(e.target.value);
setSrch('');

   }

}

  return (
    <div>
 
<div className='flex  align-middle justify-center mt-5'>
<span className='mr-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
   <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
 </svg></span>
<input
   onChange={e=>{setSrch(e.target.value)}}
   value={srch}
   onKeyDown={onKeyHandler}
   type="text" className='border'   
   
   placeholder='Search'
   
  />
  

<select >
    <option value="">All</option>
</select>
</div>

    </div>
  )
}

export default Searchbar
