import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../components/imgs/viber_image_2022-08-29_19-29-34-622.png'
import Img from '../../components/imgs/book.png'

import Facebook from '../../components/imgs/social/facebook.png'
import LinkedIn from '../../components/imgs/social/linkedin.png'
import Google from '../../components/imgs/social/google-plus.png'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../../components/firebase/Configure'
import useTheme from '../../components/store/useTheme'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from 'react-router-dom'
import '../../App.css'




const SignUp = () => {

    const Navigate=useNavigate('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState();
    const [fullName,setFullName]=useState('');
    const [user,setUser]=useState({
    });
  
    // to sign out
  
    const signout=async()=>{
      signOut(auth)
    }
  
  
  onAuthStateChanged(auth,(currentUser)=>{setUser(currentUser)})
  
  const Regster=async()=>{
  
  
    try{
      
      
      const user=await createUserWithEmailAndPassword(auth,email,password,fullName)
  
  
      setEmail('');
  setPassword('');
  setFullName('');
    console.log(user);
    }catch(err){
  console.log(err.message);
  
  
  
    }
  
  
  }
    const signInWithGoogle=()=>{
        const Provider=new GoogleAuthProvider();
        signInWithPopup(auth,Provider).then((re)=>{
            console.log(re);
        }).catch((err)=>{
            console.log(err);
        })
    
    }


    
const [logo,setLogo]=useState(false);





  return (
    <div>
{/* All */}
<div className={`
overflow-x-hidden
flex lg:flex-nowrap md:flex-wrap-reverse flex-wrap-reverse  bg-gray-500 h-[100vh] w-[full]`}>
    
{/* left */}

<div className='w-full lg:h-[100vh] h-[60%] bg-white'>
   

    
       {/* logo */}
       <div className='absolute z-50 lg:top-5 lg:left-10 top-3 left-2 '>
   <Link to='/'><img src={`${Img}`} alt="" className='  iconn ml-8 w-[2rem] lg:w-[3rem] ' /></Link>
   <p className='text-[#1A195F] md:text-[1.2rem] mt-1 text-[1.1rem] lg:text-[1.3rem] font-[700] avi '>AVIBOOKS</p>
   </div>
{/*  */}

<div className='lg:pt-[10rem] md:pt-[6rem] pt-[5rem]  flex flex-col lg:gap-9 gap-5  text-center'>
    <h1 className='font-[700] md:text-[2rem] text-[1.2rem] lg:text-[3rem] text-[#1A195F]'>Create an account</h1>
{/* Socials */}

    <div className='flex w-full align-middle justify-center
     gap-4'>
    <img src={Facebook} className={'lg:w-[3rem] md:w-[3rem] w-[2rem] lg:h-[3rem] md:h-[3rem]  h-[2rem]     hover:-translate-y-2 transition-all duration-100 '} alt="Facebook" />
    <img src={LinkedIn} className={'lg:w-[3rem] md:w-[3rem] w-[2rem] lg:h-[3rem] md:h-[3rem]  h-[2rem] hover:-translate-y-2 transition-all duration-100 '} alt='LinkedIn' />
    <img src={Google} onClick={signInWithGoogle} className={'lg:w-[3rem] md:w-[3rem] w-[2rem] lg:h-[3rem] md:h-[3rem]  h-[2rem] hover:-translate-y-2 transition-all duration-100 '} alt="Twitter" />
    </div>

    <p className='text-[#1a195faa] font-[400] text-[.9rem] md:text-[1.2rem] lg:text-[1.2rem]'>or use your email account</p>



{/* inputs */}
<form className='flex flex-col gap-7 align-middle justify-center pl-[20%]'>
   <input  type="text" onChange={(e)=>setFullName(e.target.value)} placeholder='User name' className='border-b-2 outline-none placeholder:text-[#1a195f7c] w-[80%]  border-[#1A195F]'/>
   <input  type="email" onChange={(e)=>setEmail(e.target.value)}  placeholder='Email Address' className='border-b-2 outline-none placeholder:text-[#1a195f7c] w-[80%]  border-[#1A195F]'/>
   <input   type="password" onChange={(e)=>setPassword(e.target.value)}  placeholder='Password' className='border-b-2 outline-none placeholder:text-[#1a195f7c] w-[80%]  border-[#1A195F]'/>

   <button  className='bg-[#1A195F]  lg:w-[10rem] md:w-[10rem] w-[5rem]  lg:p-2 md:p-2 p-[.2rem]  mx-auto  mt-  text-[#fff] font-medium rounded-full hover:text-[#ffff] hover:bg-[#1a195fb5] border-solid border-2 border-[#1a195f93] -translate-x-8 md:-translate-x-16  lg:-translate-x-12 md:text-[1rem] text-[.8rem] lg:text-[1rem]' onClick={Regster}>Sign Up</button></form>

</div>


</div>

{/* Right */}

<div className=' relative w-full lg:h-[100vh]  h-[40%]
bg-[url("https://keralaacademy.in/wp-content/uploads/2020/05/jaredd-craig-HH4WBGNyltc-unsplash.jpg")]


object-cover   bg-cover bg-no-repeat
'>
    
    <div className='absolute top-[30%] text-center lg:right-[5rem] md:right-[5rem] left-[5.5rem] text-[#fffffff0] flex flex-col gap-7
    '>
        <h1 className=' lg:text-[3rem] lg:font-semibold md:text-[3.5rem] text-[2rem]  font-medium '>Welcome</h1>
        <p className='tracking-wider md:text-[2rem] text-[1rem]'>Books Make Greate Persons</p>
        <button className='bg-tranparent w-[8rem]  p-1 m-2  mx-auto text-[#ffffff] font-medium rounded-full  border-solid border-2 border-[#ffffff] hover:text-[#1A195F] hover:bg-[#ffff] transition-all duration-300' onClick={()=>{Navigate('/login')}}>Log In</button>
    </div>


    <div className='w-full h-full bg-[#202161ca] z-30'></div>
    


</div>


      </div>
      </div>




  )
}

export default SignUp 
