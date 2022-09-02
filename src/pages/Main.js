import React from 'react'
import Home from './Home'
import Library from './Library'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Navbar from '../components/navigation/Navbar';
import CardInfo from '../components/cards/CardInfo';
import Login from './form/Login';
  
const Main = () => {
  return (
    <div>
       <Router>
       <Navbar/>
  <Routes>
    
    <Route path='/' element={<Home/>}/>

    <Route path='/' element={<Library/>}/>
    <Route path='/CardInfo/:id' element={<CardInfo/>} />



    
      </Routes>
      <Login/>

 </Router>

    </div>
  )
}

export default Main
