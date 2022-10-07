import React from 'react'

const Btn = ({nm}) => {
  return (
    <div>
         <button  className='bg-[#1A195F]  lg:w-[10rem] md:w-[10rem] w-[5rem]  lg:p-2 md:p-2 p-[.2rem]  mx-auto  mt-  text-[#fff] font-medium rounded-full hover:text-[#ffff] hover:bg-[#1a195fb5] border-solid border-2 border-[#1a195f93] -translate-x-8 md:-translate-x-16  lg:-translate-x-12 md:text-[1rem] text-[.8rem] lg:text-[1rem]' >{nm}</button>
    </div>
  )
}

export default Btn
