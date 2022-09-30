import React from 'react'
import '../App.css'
import Icon from '../components/imgs/viber_image_2022-08-29_19-29-34-622.png'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Home = () => {
  const Navigate=useNavigate('');
  return (

  <div id='home'>

<div className=' bg-[#2c3562]   opacity-[0.9] '>
{/* backgrond image */}
    <div className='bg-[url("https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] object-cover mix-blend-overlay
    bg-black w-full  h-[100vh] bg-fx bg-cover bg-no-repeat relative'>
    
{/* qaus */}
       <div className='absloute  bottom-0 sm:w-[500px] lg:w-[1020.05px] lg:h-[437.39px] w-[450px] h-[200px] top-[159.57px] bg-[#202161ca]  lg:rotate-[-33.58deg] rotate-[-42.58deg] translate-x-[-32%] translate-y-[-45%]' >
   
       </div>

         

       {/* nusin */}




      
    </div>
    
  {/* logo */}
  <div className='absolute z-50 lg:top-5 lg:left-10 top-3 left-2 '>
   <Link to='/'><img src={Icon} alt="" className='ml-7  w-[2rem] lg:w-[3.4rem] ' /></Link>
   <p className='text-[#ffffff] md:text-[1.2rem] mt-1 text-[1.1rem] lg:text-[1.3rem] font-[700]'>AVIBOOKS</p>
   </div>


     <h1 className='
    absolute lg:right-[20%] lg:left-auto md:left-[15%] left-[2.4rem] top-[40%]
    text-[#ffffffe4] lg:text-[5rem] lg:font-semibold md:text-[3.5rem] text-[2.1rem]  font-bold z-50'>Discover your root...</h1> 
{/* Botton */}
<button className=' botn absolute  lg:left-[48%] md:left-[40%] md:bottom-[40%] rounded-full  lg:bottom-[28%] left-[33%] bottom-[45%]
    text-[#4240AE]  lg:pl-5 lg:pr-10 lg:py-4
    
    md:pl-5 md:pr-10 md:py-4
    pl-3 pr-8 py-[0.8rem]
    bg-white font-bold ' onClick={()=>{Navigate('/library')}}>Explore Book <span className='sp'><svg className='absolute sp   right-3
     lg:w-5 lg:h-5 
     md:w-5 md:h-5
     w-4 h-4
    md:top-[1.2rem] top-[1.1rem] lg:top-[1.2rem] ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" >
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg></span>
  </button>
    </div>


    </div>
   
  )
}

export default Home
