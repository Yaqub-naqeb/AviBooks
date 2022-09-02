import * as React from 'react';

import {FavoriteBorderSharp } from '@mui/icons-material'
import '../../App.css'
import { Link } from 'react-router-dom';


export default function ActionAreaCard(item) {

    
console.log(item);



//image url
let image=item.item.volumeInfo.imageLinks && item.item.volumeInfo.imageLinks.smallThumbnail;

//title url
let title=item.item.volumeInfo.imageLinks && item.item.volumeInfo.title


//id url
let id=item.item.id;
 
// 
const idHandler=()=>{
  console.log('ehkdflsj');
}

  return (
    <div >
    {/*card*/}
<div className='  card w-[15rem] relative h-[18rem]   mb-10 '>




{/* img */}
<div>

<div>


  <img src={image} alt="" className='absolute w-[12rem] left-6 h-[16rem] top-[-3rem] ' />

  {/* hidden */}
  <div
 className='  hide  opacity-[0]  w-[12rem] h-[16rem]  absolute  left-6 top-[-2rem]   '>

<Link to={`/cardinfo/${id}`} className={'absolute left-7 top-[40%] font-medium'}>
Explore The Book 
</Link>



<Link to={''} className={'absolute right-7 text-[0.5rem]  top-[87%] font-medium'}>

<FavoriteBorderSharp className='absolute top-[-1.7rem] left-5'/>
<p>Add to Favorite
</p>
</Link>
<Link to={''} className={'absolute text-[0.5rem] left-7 top-[75%] font-medium'}>

<svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
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



//////////////////////////////////

// <Link to={`/cardinfo/${id}`}>
//     <Card className=' w-[11rem] h-full p-1' onClick={idHandler} sx={{ maxWidth: 300,maxHeight:340 }}>
//       <CardActionArea className='h-full  w-full' >
//         <CardMedia
       
//           component="img"
//           height="140"
//           image={image}
//           alt="green iguana"
//         />
//         <hr  className='mt-3 font-semibold size  '/>
//         <CardContent>
//           <p gutterBottom variant="h1" component="div" className='text-[0.5rem] font-bold'>
//             {title}
           
//           </p>
         
         
//         </CardContent>
//       </CardActionArea>
//     </Card>
//     </Link>
  );
}
