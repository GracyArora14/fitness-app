// import React from 'react';
import Landing from './Components/landing/Landing';
import Login from './Components/login/login';
import './index.css'
import {Route,Link, Routes} from "react-router-dom";



function App() {
  return (
    <div className='App' > 
   <Routes>
    <Route path = "/" element = {<Landing/>}/>
    <Route path = "/login" element = {<Login/>}/>
    
   </Routes>

    
    </div>
  );
}

export default App;
