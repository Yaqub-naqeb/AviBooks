
import React from 'react'
import { NavLink } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
import useTheme from '../store/useTheme';
import './Nav.css'
import { useAuthContext } from '../store/useAuthContext';
import { Link } from 'react-router-dom';
const Navbar = () => {


const {setOpen,open}=useTheme();
const {logout}=useLogout();
const {user}=useAuthContext();
console.log(user);





  return (
    <div>
      <nav >
      {/* desctop */}


      <div className={`desc z-50 p-3 rounded-full absolute  right-[4%] top-[36px] 
      bg-[#ffff] text-[#1a195f]
      font-medium w-[30rem] text-[20px]`}>
<div className={`  flex gap-4 w-full ${!user?'ml-[15%]':'ml-[8%] '}`}>

{/* user profile */}
{user && (<Link to={'/profile'} className={' text-white absolute left-[-8rem] top-[0.5rem] '}>
<p className='mr-[1rem]   flex gap-1 text-center text-[1rem] md:text-[1.2rem] align-middle '><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 md:w-10 md:h-10   ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

<span className='self-center'>{user.displayName}</span>

</p>
</Link>)}

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

{/* agar user nabu awa login signup */}


{!user && (<>

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
</>
)}
{/* agar user nabu awa login signup */}


{user && (<>

<NavLink 
className={  ({isActive})=>{
  return isActive ? 'underline navv':{}
}  }
to={'/adding'}>
Adding book
</NavLink>
<NavLink
onClick={logout }
to={'/'}>
Logout
</NavLink>
</>
)}
</div>
  </div>



      
{/* mobile */}

<div className='hidden con   z-50  '>

  {/* sexat */}

<button className={`mob bg-current    hidden btn absolute  right-5  md:top-7 top-8   `} >
  { open ? <div className='flex'>
{/* user profile */}
    {user && (<Link to={'/profile'}>
<p className='mr-[1rem]  flex gap-1 text-center text-[1rem] md:text-[1.2rem] align-middle justify-center'><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7  ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

<span className='self-center'>{user.displayName}</span>

</p>
</Link>)}


  <svg onClick={()=>setOpen(!open) } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

</div>

 :
 <div className=' '>
 
 <svg onClick={()=>setOpen(!open) } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</div>
}
</button>
{/* div batar */}

    {/* containari navaka */}


    <div className={`contnav 
        ${open ? 'opacity-0 w-[10%] ' : 'transition-all opacity-100 duration-500 w-[50%] -right-1' }  bg-[#1e1e62d2] backdrop-blur-xl  text-[#FFFFFF]  h-[100vh] absolute  pt-[6rem] `}>

<ul className='  flex  flex-col gap-5  justify-center align-middle text-center mt-[12%] font-semibold text-[poppins]'>
 <li> <NavLink
  

onClick={()=>{setOpen(!open)}}

  className={ ({isActive})=>{
    return isActive ? ' navvv':{}
  }  }
 
  
  smooth to={'/'}
   scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'start' })} ><span >Home</span></NavLink> </li>

 <li> <NavLink
 onClick={()=>{setOpen(!open)}}

   className={ ({isActive})=>{
    return isActive ? ' navvv':{}
  }  }
 smooth to="/library"
  scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'start' })}
 >Library</NavLink> </li>

{/* if we have user then run this  */}

{!user && (<>

  <li> <NavLink
 onClick={()=>{setOpen(!open)}}

   className={ ({isActive})=>{
    return isActive ? ' navvv':{}
  }  }
 to="/login"
  scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'start' })}
 >Log in</NavLink> </li>


 <li> <NavLink
 onClick={()=>{setOpen(!open)}}

   className={ ({isActive})=>{
    return isActive ? ' navvv':{}
  }  }
 to="/signup"

 >Sign Up</NavLink> </li>


</>) }


{/* if we dont have user  then render logout */}

{user && (
  <>

<li> <NavLink
 onClick={()=>{setOpen(!open)}}


   className={ ({isActive})=>{
    return isActive ? ' navvv':{}
  }  }
 to="/adding"

 >AddingBooks</NavLink> </li>
   <li> <Link
 onClick={logout}
 to="/"

   className={ ({isActive})=>{
    return isActive ? ' navvv':{}
  }  }

 >Logout</Link> </li>

 
   <li> <NavLink
 onClick={()=>{setOpen(!open)}}

   className={ ({isActive})=>{
    return isActive ? ' navvv':{}
  }  }
 to="/profile"

 >
 {/* user profile */}
 {user && (<>
<p className='mr-[1rem]  flex gap-1 text-center text-[1rem] md:text-[1.2rem] align-middle justify-center'><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 md:w-10 md:h-10 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

{user.displayName}

</p>
</>)}</NavLink> </li>
 




 </>
)}
</ul>

</div>

  </div>


      </nav>
    
    </div>
  )
}

export default Navbar
