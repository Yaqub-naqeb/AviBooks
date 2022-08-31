import React, { createContext, useReducer } from "react";
export const themeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
  
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
case'CHANGE_SEARCH':
return {...state,search:action.payload}
      default:
      return state;

  }
};
//
export function ContextTheme(props) {
  const [state, distpatch] = useReducer(themeReducer, {
   
    mode: "bg-gray-900",
search:'new'
   
  });


//
  const colorMode = (mode) => {
    distpatch({ type: "CHANGE_MODE", payload: mode });
  };
//
const searchBooks=(search)=>{
    distpatch({ type: "CHANGE_SEARCH", payload: search });

}









  return (
    <themeContext.Provider value={{ ...state, colorMode,searchBooks}}>
      {props.children}
    </themeContext.Provider>
  );
}
