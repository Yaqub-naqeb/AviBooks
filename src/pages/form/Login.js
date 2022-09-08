import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../components/imgs/viber_image_2022-08-29_19-29-34-622.png'
import Facebook from '../../components/imgs/social/facebook.png'
import LinkedIn from '../../components/imgs/social/linkedin.png'
import Google from '../../components/imgs/social/google-plus.png'

import {auth} from '../../components/firebase/Configure'
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'



const Login = () => {

    const Navigate=useNavigate('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState();
    const [user,setUser]=useState({
    });
console.log(user);

    onAuthStateChanged(auth,(currentUser)=>{setUser(currentUser)})
  
  const log=async()=>{
  
  
    try{
      
      
      const user=await signInWithEmailAndPassword(auth,email,password)
  
  
      setEmail('');
  setPassword('');
    console.log(user);
    }catch(err){
  console.log(err.message);
  
  
  
    }
  
  
  }
      



    //google
const signInWithGoogle=()=>{
    const Provider=new GoogleAuthProvider();
    signInWithPopup(auth,Provider).then((re)=>{
        console.log(re);
    }).catch((err)=>{
        console.log(err);
    })}


  return (
        <div>
    {/* All */}
    <div className='flex bg-gray-500 h-[100vh] w-[full]'>
        
    
    {/* Right */}
    
    <div className='w-[71%] relative  h-full
    bg-[url("https://keralaacademy.in/wp-content/uploads/2020/05/jaredd-craig-HH4WBGNyltc-unsplash.jpg")]
    
    
    object-cover   bg-cover bg-no-repeat
    '>
        
        <div className='absolute top-[30%] text-center lg:left-[4rem] text-[#fffffff0] flex flex-col gap-7
        '>
            <h1 className=' lg:text-[3rem] lg:font-semibold md:text-[3.5rem] text-[2rem]  font-medium '>Glad To see you </h1>
            <p className='tracking-wider md:text-[2rem] text-[1rem]'>You can find awsome books</p>
            <button className='bg-tranparent w-[8rem]  p-1 m-2  mx-auto text-[#ffffff] font-medium rounded-full  border-solid border-2 border-[#ffffff] hover:text-[#1A195F] hover:bg-[#ffff] transition-all duration-300' onClick={()=>Navigate('/signup')}>Sign Up</button>
        </div>
    
    
        <div className='w-full h-full bg-[#202161ca] z-30'></div>
        
    
    
    </div>



     {/* left */}
    
     <div className='w-full bg-white'>
       
    
       {/* logo */}
   <div className='absolute lg:top-5 lg:left-10 top-3 left-2 '>
   <Link to='/'><img src={Icon} alt="" className='ml-8 w-[2rem] lg:w-[3rem] ' /></Link>
   <p className='text-[#ffffff] md:text-[1.2rem] mt-1 text-[1.1rem] lg:text-[1.3rem] font-[700]'>AVIBOOKS</p>
   </div>
   {/*  */}
   
   <div className='pt-[10rem] ml-1 flex flex-col lg:gap-9 gap-5  text-center'>
       <h1 className='font-[700] md:text-[2rem] text-[1.2rem] lg:text-[3rem] text-[#1A195F]'>Log in to avibooks</h1>
   {/* Socials */}
   
       <div className='flex w-full align-middle justify-center
        gap-4'>
       <img src={Facebook} className={'lg:w-[3rem] md:w-[3rem] w-[2rem] lg:h-[3rem] md:h-[3rem]  h-[2rem]     hover:-translate-y-2 transition-all duration-100 '} alt="Facebook" />
       <img src={LinkedIn} className={'lg:w-[3rem] md:w-[3rem] w-[2rem] lg:h-[3rem] md:h-[3rem]  h-[2rem] hover:-translate-y-2 transition-all duration-100 '} alt='LinkedIn' />
       <img onClick={signInWithGoogle} src={Google} className={'lg:w-[3rem] md:w-[3rem] w-[2rem] lg:h-[3rem] md:h-[3rem]  h-[2rem] hover:-translate-y-2 transition-all duration-100 '} alt="Twitter" />
       </div>
   
       <p className='text-[#1a195faa] font-[400] text-[.9rem] md:text-[1.2rem] lg:text-[1.2rem]'>or use your email account</p>
   
   
   
   {/* inputs */}
   <form className='flex flex-col gap-7 align-middle justify-center pl-[20%]'>
     
      <input onChange={(e)=>{setEmail(e.target.value)}} type="email"  placeholder='Email Address' className='border-b-2 outline-none placeholder:text-[#1a195f7c] w-[80%]  border-[#1A195F]'/>
      <input onChange={(e)=>{setPassword(e.target.value)}} type="password"  placeholder='Password' className='border-b-2 outline-none placeholder:text-[#1a195f7c] w-[80%]  border-[#1A195F]'/>
   
      <button className='bg-[#1A195F]  lg:w-[10rem] md:w-[10rem] w-[5rem]  lg:p-2 md:p-2 p-[.2rem]  mx-auto  mt-  text-[#fff] font-medium rounded-full hover:text-[#ffff] hover:bg-[#1a195fb5] border-solid border-2 border-[#1a195f93] -translate-x-2 md:-translate-x-12  lg:-translate-x-12 md:text-[1rem] text-[.8rem] lg:text-[1rem]' onClick={log}>Log In</button></form>
   
   </div>
   
   </div>

    
    
          </div>
          </div>
    
    
    
    
      )
}

export default Login
