import * as React from 'react';

import {FavoriteBorderSharp } from '@mui/icons-material'
import '../../App.css'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
export default function ActionAreaCard(item) {

  const Navigate=useNavigate('');

    
console.log(item);



//image url
let image=item.item.volumeInfo.imageLinks && item.item.volumeInfo.imageLinks.smallThumbnail;

//title url
let title=item.item.volumeInfo.imageLinks && item.item.volumeInfo.title


//id url
let id=item.item.id;
 

  return (
    <div id={id}>
    {/*card*/}
<div className='  card w-[15rem] relative h-[18rem]   mb-10 '>




{/* img */}
<div>

<div>


  <img src={image} alt="" className='absolute w-[12rem] left-6 h-[16rem] top-[-3rem] ' />

  {/* hidden */}
  <div
 className='  hide  opacity-[0]  w-[12rem] h-[16rem]  absolute  left-6 top-[-2rem]   '>

{/* /cardinfo/${id} */}
<Link  to={`/cardinfo/${id}`} className={'absolute left-7 top-[40%] font-medium'}>
Explore The Book 
</Link>



<Link to={''} className={'absolute right-7 text-[0.5rem]  top-[87%] font-medium'}>

<FavoriteBorderSharp className='absolute top-[-1.7rem] left-5'/>
<p>Add to Favorite
</p>
</Link>
<Link to={''} className={'absolute text-[0.5rem] left-7 top-[75%] font-medium'}>

<svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>

Add to Cart 
</Link>


  </div>


  </div>
</div>


{/* <p className='absolute bottom-0 text-[#1A195F] font-bold text-[0.8rem] p-2'>{title}</p> */}


<p className='text-center pt-[14rem] text-[#1A195F] font-bold text-[0.8rem] '>{title}</p>
</div>
  </div>

  );
}
