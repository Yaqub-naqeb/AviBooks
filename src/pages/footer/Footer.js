import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../../components/imgs/book.png' ;
import { useNavigate } from 'react-router-dom';

const Footer = () => {
const Navigate =useNavigate('');
  return (
    <div className='h-[20vh] bg-[#20245720] my-auto flex justify-around '>
   {/* 3am */}
   <div className=' self-center'>
    <img src={Img} className={`w-[3rem]   `} alt="" />
   </div>
   {/* Links */}
   <div className='self-center text-[#3a3a6c]'>
    <p className='text-[#1A195F] text-[1.2rem] font-medium -translate-x-3'>Sitemap</p>
    <p onClick={()=>Navigate('/')} className={`cursor-pointer hover:text-[#1A195F] hover:scale-[1.01]`} >Home</p>
    <p onClick={()=>Navigate('/library')} className={`cursor-pointer hover:text-[#1A195F] hover:scale-[1.01] `} >Library</p>
    <p onClick={()=>Navigate('/login')} className={`cursor-pointer hover:text-[#1A195F] hover:scale-[1.01]`}>Login</p>
    <p onClick={()=>Navigate('/signup')} className={`cursor-pointer hover:text-[#1A195F] hover:scale-[1.01]`}>SignUp</p>
   </div>
   {/* Socials */}
   <div className='self-center text-[#454576] lg:text-[0.9rem] md:text-[0.9rem] '>
<p className='text-[#1A195F] text-[1.2rem] font-medium  '>Socials</p>

<div className={`cursor-pointer hover:text-[#1A195F] hover:scale-[1.01] `}><a href="">Facebook</a>
</div>
<div className={`cursor-pointer hover:text-[#1A195F] hover:scale-[1.01] `}><a href="">Instagram</a>
</div>
<div className={`cursor-pointer hover:text-[#1A195F] hover:scale-[1.01] `}><a href="">LinkedIn</a>
</div>
<div className={`cursor-pointer hover:text-[#1A195F] hover:scale-[1.01] `}><a href="">Github</a>
</div>
  
   </div>

{/*  */}




    </div>




  )
}

export default Footer


