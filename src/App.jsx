// import React from 'react';
import Landing from './Components/landing/Landing';
import Login from './Components/login/login';
import Register from './Components/register/Register';
import './index.css'
import {Route,Link, Routes} from "react-router-dom";



function App() {
  return (
    <div className='App' > 
   <Routes>
    <Route path = "/" element = {<Landing/>}/>
    <Route path = "/login" element = {<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    
    
   </Routes>
   
    
    </div>
  );
}

export default App;
 