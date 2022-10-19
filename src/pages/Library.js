import  useTheme  from '../components/store/useTheme';
import Icon from '../components/imgs/viber_image_2022-08-29_19-29-34-622.png'

import React from 'react'
import '.././App.css'
import Cards from '../components/cards/Cards';
import { useFetch } from '../components/hooks/useFetch';
import Searchbar from '../components/searchbar/Searchbar'
import { Link } from 'react-router-dom';
const Library = () => {
    const {search,book,NumBooks,setOpen,open}=useTheme();
  
    
    const {data}=useFetch(`https://www.googleapis.com/books/v1/volumes?q=${search}+terms&maxResults=${book}
    `)
  



  return (
    <div id='library' className={`
   lg:pt-[10rem]
   md:pt-[14rem]
   pt-[10rem]
   w-full
   h-full
  overflow-x-hidden
    lg:px-[12rem] 
    md:px-[3rem]
    px-[1rem]
    md:p-[8rem]   lg:py-[10rem] 
${open?'':'fixed'}
     bg-[#1A195F]  lg:overflow-hidden text-center flex flex-col gap-[10rem]`} >
     <Searchbar/>
     


       {/* logo */}
       <div className='absolute z-50 lg:left-10 top-5 left-4 '>
   <Link to='/' onClick={()=>setOpen(true)}><img src={Icon} alt="" className='lg:ml-8 md:ml-8  ml-6 w-[2rem] lg:w-[2.8rem] ' /></Link>
   <p className='text-[#ffffff] md:text-[1.2rem] mt-1 text-[1rem] lg:text-[1.3rem] font-[700]'>AVIBOOKS</p>
   </div>
{/*  */}











     {data && <Cards data={data}/>}

{data &&
(<button onClick={()=>NumBooks(book+8)} className={' font-medium text-[#ffff] text-[1.2rem] lg:text-[1.4rem] text-center cursor-pointer lg:w-fit w-full lg:ml-[45%] ml-[0%] translate-y-[-5rem]  h-fit'}>see more 
<p className='lg:mt-[-1rem] text-white '>. . .</p>
</button>
)

}
    

    </div>
  )
}

export default Library
