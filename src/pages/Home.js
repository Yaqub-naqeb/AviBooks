import React from 'react'
// import '../App.css'
// import Img from '../components/imgs/pexels-mentatdgt-1319854.jpg'
import Image from '../components/imgs/viber_image_2022-08-29_19-29-34-622.png'
import Library from './Library'
const Home = () => {
  return (

  <div>

<div className=' bg-[#2c3562]   opacity-[0.9] '>
{/* backgrond image */}
    <div className='bg-[url("https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] object-cover mix-blend-overlay
    bg-black w-full  h-[100vh] bg-fx bg-cover bg-no-repeat relative'>
{/* qaus */}
       <div className='absloute  bottom-0 w-[1020.05px] h-[437.39px] top-[159.57px] bg-[#202161ca]  rotate-[-33.58deg] translate-x-[-32%] translate-y-[-45%]' >
      
       </div>

         

       {/* nusin */}




      
    </div>
{/* Logo */}
    <div className='w-fit  absolute left-9 top-5  flex flex-col gap-2 align-middle justify-center  '>
    <img className={'w-[4rem] ml-6'} src={Image} alt="lkj"  />
     <p className='text-[#fff] text-[1.5rem] font-[700]'>AVIBOOKS</p>
    </div>


     <h1 className='
    absolute right-[20%] top-[40%]
    text-[#ffffffe4] text-[5rem] font-semibold z-50'>Discover your root...</h1>
    

   
    
    </div>
   <div className='bg-[#1A195F]'>
   <Library/>
   </div>
    </div>
   
  )
}

export default Home
