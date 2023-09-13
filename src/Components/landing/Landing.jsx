import React from 'react'
import pic3 from '../../images/pic3.png'
import "./Landing.css"
import { useNavigate } from 'react-router-dom'


function Landing() {
  const navigate = useNavigate();
  return (
    <div className='landing-container'>
     
      <div className='text'>
      <h1>Transform your Life,</h1>
        <p className='typewriter' >One Rep at a Time.</p>
        <div className="button-container">
         
            <button className="button" onClick={()=>navigate("/Login")}>Let's Start!</button>
          </div>
        </div>
      
     
    </div>
   
  )
}

export default Landing
