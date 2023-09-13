import React from "react"
import "./login.css"
//import pic3 from '../images/pic3.png'

const Login=()=>{
    return (
        <div className="login-container">
        <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="Enter your email"></input>
        <input type="password" placeholder="Enter your password"></input>
        <div className="button">Login</div>
        <div>or</div>
        <div className="button">Register</div>
    </div>
    </div>
    )

}
export default Login