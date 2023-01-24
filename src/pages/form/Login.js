import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../components/imgs/viber_image_2022-08-29_19-29-34-622.png'
import Facebook from '../../components/imgs/social/facebook.png'
import LinkedIn from '../../components/imgs/social/linkedin.png'
import Google from '../../components/imgs/social/google-plus.png'
import { useNavigate } from 'react-router-dom'
import useTheme from '../../components/store/useTheme'
import {useLogin} from '../../components/hooks/useLogin'
import Btn from './Btn'
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { usePopUp } from '../../components/hooks/usePopUp'
const Login = () => {
    const provider = new GoogleAuthProvider();

    const {setOpen}=useTheme();
    const Navigate=useNavigate('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState();
    const {login , error,isPending}=useLogin();
     const {loggin}=usePopUp();


// when click submit form 
    const handleSubmit=(e)=>{
        e.preventDefault()
        login(email,password)
        setEmail('')
        setPassword('')
    }


//geting the auth
    const auth = getAuth();
    // sign up with google pop up
    const signInWithpopupp=()=>{

signInWithPopup(auth, provider)
  .then((result) => {
    loggin();
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


    
// facebook
const signInWithFaceBook=()=>{
    const Fb_provider = new FacebookAuthProvider();
  
    signInWithPopup(auth, Fb_provider)
    .then((result) => {
      const user = result.user;
  
  // setUser(user)
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
    <div className='flex lg:flex-nowrap md:flex-wrap flex-wrap   h-[100vh] w-[full]'>
        
    
    {/* Right */}
    
    <div className='lg:w-[71%] w-[100%]  relative h-[40%] lg:h-full
    bg-[url("https://keralaacademy.in/wp-content/uploads/2020/05/jaredd-craig-HH4WBGNyltc-unsplash.jpg")]
    
    
    object-cover   bg-cover bg-no-repeat
    '>
        
        <div className='absolute top-[30%] text-center lg:left-[4rem] md:left-[10rem] left-[5.4rem] text-[#fffffff0] flex flex-col gap-7
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

   <div className='absolute lg:top-5 lg:left-10 top-5 left-4 '>
   <Link to='/' onClick={()=>setOpen(true)}><img src={Icon} alt="" className='lg:ml-8 md:ml-8  ml-6 w-[2rem] lg:w-[2.8rem] ' /></Link>
   <p className='text-[#ffffff] md:text-[1.2rem] mt-1 text-[1rem] lg:text-[1.3rem] font-[700]'>AVIBOOKS</p>
   </div>

   {/* ///////////////////////////////// */}
   {/* kljffd */}
   
   <div className='lg:pt-[10rem] md:pt-[0rem] lg:mt-0 md:mt-[-3rem] mt-[-3rem]  flex flex-col lg:gap-9 gap-5  text-center'>
       <h1 className='font-[700] md:text-[2rem] text-[1.2rem] lg:text-[3rem] text-[#1A195F]'>Log in to avibooks</h1>
   {/* Socials */}
   
       <div className='flex w-full align-middle justify-center
        gap-4'>
       <img src={Facebook} onClick={signInWithFaceBook} className={'lg:w-[3rem] md:w-[3rem] w-[2rem] lg:h-[3rem] md:h-[3rem]  h-[2rem]     hover:-translate-y-2 transition-all duration-100 '} alt="Facebook" />
       <img src={LinkedIn} className={'lg:w-[3rem] md:w-[3rem] w-[2rem] lg:h-[3rem] md:h-[3rem]  h-[2rem] hover:-translate-y-2 transition-all duration-100 '} alt='LinkedIn' />
       <img onClick={signInWithpopupp}  src={Google} className={'lg:w-[3rem] md:w-[3rem] w-[2rem] lg:h-[3rem] md:h-[3rem]  h-[2rem] hover:-translate-y-2 transition-all duration-100 '} alt="Twitter" />
       </div>
   
       <p className='text-[#1a195faa] font-[400] text-[.9rem] md:text-[1.2rem] lg:text-[1.2rem]'>or use your email account</p>
   
   
   
   {/* inputs */}
   <form onSubmit={handleSubmit} className='flex flex-col gap-7 align-middle justify-center pl-[20%]'>
     
      <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email"  placeholder='Email Address' className='border-b-2 outline-none placeholder:text-[#1a195f7c] w-[80%]  border-[#1A195F]'/>
      <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password"  placeholder='Password' className='border-b-2 outline-none placeholder:text-[#1a195f7c] w-[80%]  border-[#1A195F]'/>
  
      {/* btn */}
{!isPending && <Btn nm='Log In'/>}

{isPending&& <Btn nm='loading'/>}

{error&& <p>{error}</p>}

      
      
      </form>
   
   </div>
   
   </div>

    
    
          </div>
          </div>
    
    
    
    
      )
}

export default Login
