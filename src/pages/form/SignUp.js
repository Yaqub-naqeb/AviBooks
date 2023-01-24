import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Img from '../../components/imgs/book.png'

import Facebook from '../../components/imgs/social/facebook.png'
import LinkedIn from '../../components/imgs/social/linkedin.png'
import Google from '../../components/imgs/social/google-plus.png'
import useTheme from '../../components/store/useTheme'

import { useNavigate } from 'react-router-dom'
import '../../App.css'
import { useSignup } from '../../components/hooks/useSignup'
import Btn from './Btn'
import { signInWithPopup, GoogleAuthProvider,FacebookAuthProvider, getAuth } from "firebase/auth";

    const SignUp = () => {
    const auth=getAuth();
    const provider = new GoogleAuthProvider();
    const {setOpen}=useTheme();
    const Navigate=useNavigate('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState();
    const [displayName,setDisplayName]=useState('');
    const {signup,isPending,error}=useSignup();

    const handleSubmit=(e)=>{
      e.preventDefault();
      signup(email,password,displayName)
      setDisplayName('')
      setEmail('')
      setPassword('')
    }
    // sign up with google pop up
    const signInWithpopupp=()=>{
signInWithPopup(auth, provider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

    }

    // 

// facebook
const signInWithFaceBook=()=>{
  const Fb_provider = new FacebookAuthProvider();

  signInWithPopup(auth, Fb_provider)
  .then((result) => {
    const user = result.user;
    console.log(user);

    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

  });
}

  return (
    <div>
{/* All */}
<div className={`
overflow-x-hidden
flex lg:flex-nowrap md:flex-wrap-reverse flex-wrap-reverse  bg-gray-500 h-[100vh] w-[full]`}>
    
{/* left */}

<div className='w-full lg:h-[100vh] h-[60%] bg-white'>
       {/* logo */}
       <div className='absolute z-50 lg:top-5 lg:left-10 top-5 left-4 '>
   <Link to='/' onClick={()=>setOpen(true)}><img src={`${Img}`} alt="" className='  iconn md:ml-8 ml-6 lg:ml-8 w-[2.2rem] lg:w-[3rem] ' /></Link>
   <p className='text-[#1A195F] md:text-[1.2rem] mt-1 text-[1rem] lg:text-[1.3rem] font-[700] avi '>AVIBOOKS</p>
   </div>
{/*  */}





<div className='lg:pt-[10rem] md:pt-[6rem] pt-[5rem]  flex flex-col lg:gap-9 gap-5  text-center'>
    <h1 className='font-[700] md:text-[2rem] text-[1.2rem] lg:text-[3rem] text-[#1A195F]'>Create an account</h1>
{/* Socials */}

    <div className='flex w-full align-middle justify-center
     gap-4'>
    <img src={Facebook} className={'lg:w-[3rem] md:w-[3rem] w-[2rem] lg:h-[3rem] md:h-[3rem]  h-[2rem]     hover:-translate-y-2 transition-all duration-100 cursor-pointer '} alt="Facebook" onClick={signInWithFaceBook} />

    <img src={LinkedIn} className={'lg:w-[3rem] md:w-[3rem] w-[2rem] lg:h-[3rem] md:h-[3rem]  h-[2rem] hover:-translate-y-2 transition-all duration-100 cursor-pointer '} alt='LinkedIn' />
    <img src={Google} onClick={signInWithpopupp}  className={'lg:w-[3rem] md:w-[3rem] w-[2rem] lg:h-[3rem] md:h-[3rem]  h-[2rem] hover:-translate-y-2 transition-all duration-100 cursor-pointer '} alt="Twitter" />
    </div>

    <p className='text-[#1a195faa] font-[400] text-[.9rem] md:text-[1.2rem] lg:text-[1.2rem]'>or use your email account</p>



{/* inputs */}
<form className='flex flex-col gap-7 align-middle justify-center pl-[20%]' onSubmit={handleSubmit}>
   <input
   value={displayName}
   type="text" onChange={(e)=>setDisplayName(e.target.value)} placeholder='User name' className='border-b-2 outline-none placeholder:text-[#1a195f7c] w-[80%]  border-[#1A195F]'/>
   <input
   value={email}
   type="email" onChange={(e)=>setEmail(e.target.value)}  placeholder='Email Address' className='border-b-2 outline-none placeholder:text-[#1a195f7c] w-[80%]  border-[#1A195F]'/>
   <input  
   value={password}
   type="password" onChange={(e)=>setPassword(e.target.value)}  placeholder='Password' className='border-b-2 outline-none placeholder:text-[#1a195f7c] w-[80%]  border-[#1A195F]'/>
   {/* <input  
   value={phone}
   type="tel" onChange={(e)=>setPhone(e.target.value)}  placeholder='Phone number' className='border-b-2 outline-none placeholder:text-[#1a195f7c] w-[80%]  border-[#1A195F]'/> */}

{/* btn */}
{!isPending && <Btn nm='Sign Up'/>}

{isPending&& <Btn nm='loading'/>}
{error&& <p>{error}</p>}
   
   
   
   </form>

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
