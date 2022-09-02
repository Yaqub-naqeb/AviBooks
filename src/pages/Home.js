import React from 'react'

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
    

   
    
    </div>
   
    </div>
   
  )
}

export default Home
