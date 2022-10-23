import React from 'react'
import { useAuthContext } from '../../components/store/useAuthContext';

const Profile = () => {
    const {user}=useAuthContext();

  return (
    <div>
      {/* 3am */}
 
      <div className='bg-[#1A195F] h-[100vh] pt-[10rem]'>
        {/* profile picture */}
        <div>
         

        {user && 
<p className='  px-[10rem]  text-[#c2c2c2e4] flex flex-col gap-1  text-[2rem] md:text-[1.2rem] align-middle justify-center'>
    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-[10rem] ml-[-1.4rem] text-[#FFFFFF] h-[10rem] md:w-10 md:h-10 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

@{user.displayName}

</p>}
      


        </div>
        {user && <div className='text-[#c2c2c2e4] text-center text-[1rem] pt-[3rem] ml-[1rem]'>

    <p className='pb-5'><span>username: </span>{user.displayName}</p>
    <p><span>Email: </span>{user.email}</p>

        </div>
        }
      
      </div>


    </div>
  )
}

export default Profile
