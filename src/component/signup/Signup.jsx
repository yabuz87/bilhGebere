import React from 'react'
import "./Signup.css"
import SignupForm from "../signup/signupform/SignupForm"
import img1 from "../../assets/img1signup.jpg";

const Signup = () => {
  return (
    <div className="container-fluid home-component">
      <div className="content">
      <img src={img1} className="sign-up-img" alt="Growing Seedling"/>
        
      </div>
      <div className="content">
      <SignupForm/>
      </div>
    </div>
  )
}

export default Signup
