import { useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { projectFirestore } from "../firebase/config";
let initialState={
    document:null,
    isPending:false,
    error:null,
    success:null
}

const firestoreReducer=(state,action)=>{
    switch(action.type){
        default:
            return state
    }
}
export const useFirestore= (collection)=>{
    const [response,dispatch]=useReducer(firestoreReducer,initialState);
    const [isCancelled,setISCancelled]=useState(false)
    //collection ref
    const ref=projectFirestore.collection(collection)
    //add();
    const addDoc=(doc)=>{

    }
    //delete
    const deleteDoc=(id)=>{

    }
    useEffect(()=>{
        return ()=>setISCancelled(true)
    },[])

    return  {addDoc,deleteDoc,response}
}