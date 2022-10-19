import * as React from 'react';

import {FavoriteBorderSharp } from '@mui/icons-material'
import '../../App.css'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useTheme from '../store/useTheme';




const NewCard = (item) => {

  const {setOpen}=useTheme();


//image url
let image=item.item.volumeInfo.imageLinks && item.item.volumeInfo.imageLinks.thumbnail.concat("&fife=w700-h1000");

//title url
// let title=item.item.volumeInfo.imageLinks && item.item.volumeInfo.title.substring(0, 30)+'...';
let title=item.item.volumeInfo.imageLinks && item.item.volumeInfo.title.concat(' ');

let trimmedStringg=()=>{
  var yourString = title; //replace with your string.
  var maxLength = 40 // maximum number of characters to extract
  
  //trim the string to the maximum length
  var trimmedString = yourString.substring(0, maxLength);
  
  //re-trim if we are in the middle of a word
  trimmedString = trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))

  if(yourString.length>maxLength){
    trimmedString=trimmedString.concat('...')
    }

// console.log(trimmedString.length-1,title.length-1);
  return trimmedString;
  
}









//id url
let id=item.item.id;
 


  return (
    <div >
    {/*card*/}
<div className=' mx-auto lg:px-2 md:px-2 px-1 pt-1 rounded-md overflow-hidden bg-[#fff]
 lg:h-[19rem] lg:w-[12rem]
 md:h-[19rem] md:w-[12rem]
 w-[10.5rem] h-[19rem]

 card  relative   text-center  '>

{/* img */}
<div className='overflow-hidden shadow-lg 
lg:w-[11rem]
md:w-[11rem]
w-[10rem] h-[15rem]
rounded-md'>

<div className='overflow-hidden'>


  <img src={image} alt="" className=' imgg 
  w-[12rem]
  overflow-hidden

    h-[16rem]  ' />

  {/* hidden */}
  <HashLink onClick={()=>setOpen(true)} to={`/cardinfo/${id}`} smooth

 className=' absolute top-1 lg:right-2 md:right-2 right-1  hide rounded-md opacity-[0]
  lg:w-[11rem] lg:h-[15rem]
  md:w-[11rem] md:h-[15rem]
  w-[10rem] h-[15rem]
  text-center '>


<div     className={'font-medium absolute lg:left-[1.3rem] md:left-[1.3rem] left-[.5rem] top-[40%]  '}>
Explore The Book
</div>
 



<Link to={''} className={'absolute lg:right-3 md:right-3 right-2 text-[.5rem]  top-[89%] font-medium'}>

<FavoriteBorderSharp className='absolute top-[-1.7rem] left-5  '/>
<p>Add to Favorite
</p>
</Link>
<Link to={''} className={'absolute text-[.5rem] lg:left-3 md:left-3 left-3 top-[75%] font-medium'}>

<svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 translate-x-2">
<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>

Add to Cart 
</Link>


  </HashLink>


  </div>
</div>
<p className='text-center pt-[1rem] z-50 text-[#1A195F] font-bold lg:text-[0.8rem] m md:text-[0.8rem] text-[0.8rem]'>{trimmedStringg()}</p>
{/*  */}


</div>
  </div>
  )
}

export default NewCard

