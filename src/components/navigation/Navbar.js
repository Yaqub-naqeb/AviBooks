import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      
      <nav className=' z-50 p-3 rounded-xl absolute  right-[15%] top-[36px] bg-[#202161ca]    text-[#FFFFFF] font-medium w-[30rem] text-[20px]'>
<div className='flex gap-4 w-full ml-[15%]'>
<NavLink to={'/'} >
Home
</NavLink>
<NavLink to={'/Library'}>
Library
</NavLink>
<NavLink to={'/login'}>
Login
</NavLink>
<NavLink to={'/signup'}>
SignUp
</NavLink>
</div>
      </nav>


    </div>
  )
}

export default Navbar
