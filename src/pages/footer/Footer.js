import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../../components/imgs/book.png' ;

const Footer = () => {

  return (
    <div className='h-[20vh] bg-white my-auto flex justify-around '>
   {/* 3am */}
   <div className=' self-center'>
    <img src={Img} className={`w-[3rem]   `} alt="" />
   </div>
   {/* Links */}
   <div className='self-center text-[#454576]'>
    <p className='text-[#1A195F] text-[1.2rem] font-medium -translate-x-3'>Sitemap</p>
    <p>Home</p>
    <p >Library</p>
    <p>Login</p>
    <p>SignUp</p>
   </div>
   {/* Socials */}
   <div className='self-center text-[#454576] text-[0.9rem] '>
<p className='text-[#1A195F] text-[1.2rem] font-medium '>Socials</p>

    <p>Facebook</p>
    <p>Instagram</p>
    <p>Linked in</p>
    <p>Github</p>
   </div>

{/*  */}




    </div>




  )
}

export default Footer


