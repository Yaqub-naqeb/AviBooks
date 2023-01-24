import  { useEffect } from 'react'
import { useState } from 'react'
import { auth } from '../firebase/config'
import { useAuthContext } from '../store/useAuthContext'

export const usePopUp = () => {
    const [isCancelled,setIsCancelled]=useState(false);
  const [error,setError]=useState(null);
  const [isPending,setIsPending]=useState(false);
  const {distpatch}=useAuthContext();
  

const loggin=async()=>{
    setError(null)
    setIsPending(true);
    //sign The use out
    try{
    const res= await auth.signInWithPopup()
    console.log(res);
     //disptach logout
    
     distpatch({type:'LOGIN',payload:res.user})
     setIsPending(false)
     setError(null)
     //update state
     if(!isCancelled){
        setIsPending(false)
        setError(null)
     }
    


    }catch(err){
        if(!isCancelled)
        {console.log(err.message);
        setError(err.message);
        setIsPending(false);}
    }
}

useEffect(()=>{
    return ()=> setIsCancelled(true)
},[])

return{loggin,error,isPending}


}

