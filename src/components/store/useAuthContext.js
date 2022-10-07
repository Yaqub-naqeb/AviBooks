import { useContext } from 'react'
import { themeContext } from "./ContextTheme";
export const useAuthContext = () => {
    const context=useContext(themeContext);
    if(!context){
        throw Error('useAuthContext must be inside an authContextProvider');
    }
  return context;
}


