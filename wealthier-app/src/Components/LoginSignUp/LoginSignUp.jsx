// LoginSignUp.jsx
import React, { useState } from 'react';
import './LoginSignUp.css';
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import { useNavigate } from 'react-router-dom';

const LoginSignUp = () => {
  const [activeTab, setActiveTab] = useState("Login");
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleFormSubmit = () => {
    // Perform form submission logic here
    // Redirect to home page
    navigate('/home');
  };

  return (
    <div className="container">
      <div className="header">
        <div className={`tab login-tab ${activeTab === "Login" ? "active" : ""}`} onClick={() => handleTabClick("Login")}>Login</div>
        <div className={`tab signup-tab ${activeTab === "Sign Up" ? "active" : ""}`} onClick={() => handleTabClick("Sign Up")}>Sign Up</div>
       </div>

      <div className="inputs">
        {/* Render form fields based on activeTab */}
        {activeTab === "Sign Up" && (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="User Name" />
          </div>
        )}

        {/* email */}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email ID' />
        </div>
        {/* password */}
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password' />
        </div>
      </div>

      {/* buttons */}
      <div className="submit-container">
        <div className="submit" onClick={handleFormSubmit}>{activeTab}</div>
      </div>
    </div>
  );
};

export default LoginSignUp;
