import { useEffect, useState } from "react";
import {auth} from '../firebase/config'
import {useAuthContext}from '../store/useAuthContext'


export const useSignup=()=>{
    const [isCancelled,setIsCancelled]=useState(false);

const [error,setError]=useState(null);
const [isPending,setIsPending]=useState(false);

const {distpatch}=useAuthContext();


const signup=async (email,password,displayName)=>{
    setError(null)
    setIsPending(true)



try{
    //signup user

const res=await auth.createUserWithEmailAndPassword(email,password);
if(!res){
    throw new Error('could not complete signup')
}
//add display name
await res.user.updateProfile({displayName})
console.log(res.user);

//dispatch 
distpatch({type:'LOGIN',payload:res.user});
setIsPending(false)
setError(null)
     //update state
     if(!isCancelled){
        setIsPending(false)
        setError(null)
     }


}catch(err){
if(!isCancelled){
    console.log(err.message);
    setError(err.message);
    setIsPending(false)
}
}

}

useEffect(()=>{
    return ()=> setIsCancelled(true)
},[])
return {error,isPending,signup}
}