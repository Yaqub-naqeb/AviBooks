import React from 'react'
import Home from './Home'
import Library from './Library'
import SignUp from '../pages/form/SignUp'
import { useAuthContext } from '../components/store/useAuthContext'
import {
    BrowserRouter as Router,
    Routes,
    Route} from "react-router-dom";
import Navbar from '../components/navigation/Navbar';
import CardInfo from '../components/cards/CardInfo';
import Login from './form/Login';
  
const Main = () => {
  const {authIsReady}=useAuthContext();

  return (
    <div>
      
      {authIsReady && (

   

<Router> 
<Navbar/>

 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/library' element={<Library/>}/>
  <Route path='/cardinfo/:id'  element={<CardInfo/>} />
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='/login' element={<Login/>}></Route>
  </Routes> 

 </Router>
   )}
    </div>
  )
}

export default Main
