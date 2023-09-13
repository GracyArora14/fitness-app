import React from "react"
import "./Register.css"
//import pic3 from '../images/pic3.png'
import { useNavigate } from "react-router-dom"


const Register=()=>{
    const navigate =useNavigate();
    return (
        <div className="reg-container">
        <div className="register">
       <h1>Register</h1>
            <input type="text"    placeholder="Your Name" ></input>
            <input type="text"   placeholder="Your Email" ></input>
            <input type="password"   placeholder="Your Password" ></input>
            <input type="password"  placeholder="Re-enter Password" ></input>
            
        <div className="button">Register</div>
        <div>or</div>
        <div className="button"onClick={()=>navigate(-1)}>Login</div>
    </div>
    </div>
    )

}
export default Register