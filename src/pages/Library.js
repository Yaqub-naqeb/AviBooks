import  useTheme  from '../components/store/useTheme';
import React from 'react'
import '.././App.css'
import Cards from '../components/cards/Cards';
import { useFetch } from '../components/hooks/useFetch';
import Searchbar from '../components/searchbar/Searchbar'
const Library = () => {
    const {search,book,NumBooks}=useTheme();
  
    
    const {data}=useFetch(`https://www.googleapis.com/books/v1/volumes?q=${search}+terms&maxResults=${book}
    `)
  



  return (
    <div id='library' className='
    pt-[10rem]
   w-full
  overflow-x-hidden
   
    lg:px-[10rem] 
    md:px-[3rem]
    px-[1rem]
    md:p-[8rem]   lg:p-[10rem] 

    relative bg-[#1A195F]  lg:overflow-hidden text-center flex flex-col gap-[10rem]' >
     <Searchbar/>

     {data && <Cards data={data}/>}


<button onClick={()=>NumBooks(book+12)} className={' font-medium text-[#ffff] text-[1.2rem] lg:text-[1.4rem] text-center cursor-pointer lg:w-fit w-full lg:ml-[45%] ml-[0%] translate-y-[-6rem]  h-fit'}>see more 
<p className='lg:mt-[-1rem] text-white '>. . .</p>
</button>

    

    </div>
  )
}

export default Library
