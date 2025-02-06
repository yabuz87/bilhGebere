import React from 'react';
import './signupForm.css';

const SignupForm = () => {
   
  return (
    <>
    <div className="container-lg">
      <form className="form-container container-lg">
      <h2 className="text-center" >Sign up</h2>
        <div className="email-input-container">
          <label>Full Name</label>
          <div className="input-div1">
            <input type="text" className="input-container" placeholder="Write Full Name" />
          </div>
          <label>Phone</label>
          <div className="input-div1">
            <input type="text" className="input-container" placeholder="+251" />
          </div>
          <label>Location</label>
          <div className="input-div1">
            <input type="text" className="input-container" placeholder="Location" />
          </div>

          <label>Email</label>
          <div className="input-div1">
            <input type="text" className="input-container" placeholder="Write your Email" />
          </div>
        </div>
        <div className="password-input-container">
          <label>Password</label>
          <div className="input-div">
            <input type="password" className="input-container" placeholder="Write your Password" />
          </div>
        </div>
        <button className=" px-5 login-button">Submit</button>
      </form>
    </div>
    </>
  );
};

export default SignupForm;
