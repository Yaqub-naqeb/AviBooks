import React, { createContext, useEffect, useReducer } from "react";
import {projectAuth} from '../firebase/config'
export const themeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
  

case 'LOGIN':
  return {...state,user:action.payload};
  case 'LOGOUT':
    return {...state,user:null};
    case 'AUTH_IS_READY':
      return {...state,user:action.payload,authIsReady:true}
  // new

    case "CHANGE_MODE":
      return { ...state, mode: action.payload };

case'CHANGE_SEARCH':
return {...state,search:action.payload};
case'CHANGE_NUMBOOKS':
return{...state,book:action.payload};
case 'CHANGE_PASSWORD':
return {...state,pass:action.payload};
case 'CHANGE_EMAIL':
return {...state,em:action.payload};
case 'CHANGE_NAV':
return {...state,open:action.payload};
      default:
      return state;

  }
};
//
export function ContextTheme(props) {
  const [state, distpatch] = useReducer(themeReducer, {
   

user:null,
authIsReady:false,

    mode: "bg-gray-900",
search:'books',
book:25,
pass:'',
em:'',
nm:'',
open:true,


  });
useEffect(()=>{
  const unsub=projectAuth.onAuthStateChanged((user)=>{
    distpatch({type:'AUTH_IS_READY',payload:user})
    unsub()
  })
},[])
console.log('AuthContext state:',state);


//
  const colorMode = (mode) => {
    distpatch({ type: "CHANGE_MODE", payload: mode });
  };
//
const searchBooks=(search)=>{
    distpatch({ type: "CHANGE_SEARCH", payload: search });

}
// Number of books 

const NumBooks=(book)=>{
  distpatch({type:'CHANGE_NUMBOOKS',payload:book});
}

//
const Password=(pass)=>{
  distpatch({type:'CHANGE_PASSWORD',payload:pass});
}
//
const Email=(em)=>{
  distpatch({type:'CHANGE_PASSWORD',payload:em});
}
//
const Name=(nm)=>{
  distpatch({type:'CHANGE_NAME',payload:nm});
}
//
const setOpen=(open)=>{
  distpatch({type:'CHANGE_NAV',payload:open});

}









  return (
    <themeContext.Provider value={{ ...state,distpatch, colorMode,searchBooks,NumBooks,Password,Email,Name,setOpen}}>
      {props.children}
    </themeContext.Provider>
  );
}
