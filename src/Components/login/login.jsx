import React from "react"
import "./login.css"

import { useNavigate } from "react-router-dom"

const Login=()=>{
    const navigate =useNavigate();

    return (
        <div className="login-container">
        <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="Enter your email"></input>
        <input type="password" placeholder="Enter your password"></input>
        <div className="button" >Login</div>
        <div>or</div>
        <div className="button" onClick={()=>navigate("/Register")}>Register</div>
    </div>
    </div>
    )

}
export default Login