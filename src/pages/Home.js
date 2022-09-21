import React from 'react'
import '../App.css'
import Image from '../components/imgs/viber_image_2022-08-29_19-29-34-622.png'
const Home = () => {
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
    
{/* Logo */}
    <div className='lg:w-fit w-10  absolute 
     lg:left-9 lg:top-5 
    top-3 left-2


      flex flex-col gap-2 align-middle justify-center  '>
    <img className={'w-[4rem] ml-6'} src={Image} alt="lkj"  />
     <p className='text-[#fff] lg:text-[1.5rem] text-[1.2rem] font-[700]'>AVIBOOKS</p>

    </div>


     <h1 className='
    absolute lg:right-[20%] lg:left-auto left-3 top-[40%]
    text-[#ffffffe4] lg:text-[5rem] lg:font-semibold md:text-[3.5rem] text-[2.4rem]  font-bold z-50'>Discover your root...</h1> 
{/* Botton */}

<button className=' botn absolute  lg:left-[48%] md:left-[10%] md:bottom-[40%] rounded-full  lg:bottom-[28%] left-[30%] bottom-[42%]
    text-[#4240AE]  pl-5 pr-10 py-4 bg-white font-bold '>Explore Book <span className='sp'><svg className='absolute sp   right-3 w-5 h-5 top-[1.2rem] ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" >
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg></span>
  </button>
    </div>


    </div>
   
  )
}

export default Home
