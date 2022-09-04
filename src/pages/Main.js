import React from 'react'
import Home from './Home'
import Library from './Library'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  HashRouter} from "react-router-dom";
import Navbar from '../components/navigation/Navbar';
import CardInfo from '../components/cards/CardInfo';
import Login from './form/Login';
import useTheme from '../components/store/useTheme';
  
const Main = () => {

const {idd,ID}=useTheme();
console.log(idd);
  return (
    <div>
      

<Router> 


<Navbar/>

 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/library' element={<Library/>}/>
  <Route path='/cardinfo/:id'  element={<CardInfo/>} />
  </Routes> 

 </Router>

    </div>
  )
}

export default Main
