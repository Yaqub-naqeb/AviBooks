import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
import {HashLink } from 'react-router-hash-link';
import './Nav.css'
const Navbar = () => {


const [open,setOpen]=useState(true);

  return (
    <div>
      <nav>

        {/* desctop */}


      <div className='desc z-50 p-3 rounded-full absolute  right-[15%] top-[36px] 
      bg-[#ffff] text-[#1a195f]
      font-medium w-[30rem] text-[20px]'>
<div className='  flex gap-4 w-full ml-[15%]'>
<HashLink smooth to={'#home'} >
Home
</HashLink>
<HashLink smooth to={'#library'}>
Library
</HashLink>
<HashLink smooth to={'#login'}>
Login
</HashLink>
<HashLink smooth to={'#signup'}>
SignUp
</HashLink>

</div>

      </div>
{/* mobile */}




<div className='hidden con '>
<button className='mob  hidden btn absolute right-4 top-4  ' onClick={()=>setOpen(!open)}>
  { open ?
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
}
</button>

{/* div batar */}
      <div className={`contnav ${open ? 'hidden' : '' } w-full bg-white h-[50vh] absolute`}>


<ul className='flex flex-col gap-5  justify-center align-middle text-center mt-[12%] font-semibold text-[poppins]'>
 <li> <HashLink smooth to={'#home'}
   scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}

 >Home</HashLink> </li>
 <li> <HashLink smooth to="#lb"
  scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
 >Library</HashLink> </li>
</ul>

</div>
</div>

      </nav>
    </div>
  )
}

export default Navbar
