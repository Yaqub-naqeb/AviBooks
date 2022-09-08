
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {HashLink } from 'react-router-hash-link';
import './Nav.css'
const Navbar = () => {


const [open,setOpen]=useState(true);

  return (
    <div>
      <nav>

        {/* desctop */}


      <div className='desc z-50 p-3 rounded-full absolute  right-[4%] top-[36px] 
      bg-[#ffff] text-[#1a195f]
      font-medium w-[30rem] text-[20px]'>
<div className='  flex gap-4 w-full ml-[15%]'>
<NavLink
className={  ({isActive})=>{
  return isActive ? 'underline navv':{}
}  }

smooth to={'/'} >
Home
</NavLink>
<NavLink
className={  ({isActive})=>{
  return isActive ? 'underline navv':{}
}  }

smooth to={'/library'}>
Library
</NavLink>
<NavLink 
className={  ({isActive})=>{
  return isActive ? 'underline navv':{}
}  }
to={'/login'}>
Login
</NavLink>
<NavLink
className={  ({isActive})=>{
  return isActive ? 'underline navv':{}
}  }
to={'/signup'}>
SignUp
</NavLink>

</div>

      </div>
{/* mobile */}




<div className='hidden con  z-50  '>
<button className='mob  hidden btn absolute  right-4 top-4  ' onClick={()=>setOpen(!open)}>
  { open ?
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
}
</button>

{/* div batar */}
      <div className={`contnav  ${open ? 'hidden' : '' } w-full bg-white h-[50vh] absolute`}>


<ul className='flex flex-col gap-5  justify-center align-middle text-center mt-[12%] font-semibold text-[poppins]'>
 <li> <NavLink className='z-50' smooth to={'/'}
   scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'start' })}>Home</NavLink> </li>

 <li> <NavLink smooth to="/library"
  scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'start' })}
 >Library</NavLink> </li>

 <li> <NavLink  to="/login"
  scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'start' })}
 >Log in</NavLink> </li>


 <li> <NavLink  to="/signup"

 >Sign Up</NavLink> </li>
</ul>

</div>
</div>

      </nav>
    </div>
  )
}

export default Navbar
