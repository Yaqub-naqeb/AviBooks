import { useEffect } from 'react'
import { useState } from 'react'
import { auth } from '../firebase/config'
import { useAuthContext } from '../store/useAuthContext'
const useLogout = () => {
    const [isCancelled,setIsCancelled]=useState(false);
  const [error,setError]=useState(null);
  const [isPending,setIsPending]=useState(false);
  const {distpatch}=useAuthContext();
  

const logout=async()=>{
    setError(null)
    setIsPending(true);
    //sign The use out
    try{
     await auth.signOut()
     //disptach logout
    
     distpatch({type:'LOGOUT'})

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

return{logout,error,isPending}


}

export default useLogout
