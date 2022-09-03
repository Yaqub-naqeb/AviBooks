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
  
const Main = () => {
  return (
    <div>

<HashRouter> 
<Navbar/>

   
<Home/>
<Library />
{/* <Login/> */}
<Routes>
   <Route path='/cardinfo/:id'  element={<CardInfo/>} />
   </Routes>
{/* <CardInfo /> */}


    





 </HashRouter>

    </div>
  )
}

export default Main
