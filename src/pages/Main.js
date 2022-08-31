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
  
const Main = () => {
  return (
    <div>
       <Router>
       <Navbar/>
  <Routes>
    
    <Route path='/' element={<Home/>}/>

    <Route path='/library' element={<Library/>}/>
    <Route path='/CardInfo/:id' element={<CardInfo/>} />



    
      </Routes>
 </Router>
    </div>
  )
}

export default Main
