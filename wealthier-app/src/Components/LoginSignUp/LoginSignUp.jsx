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
    <div className="login-container">
      <div className="login-header">
        <div className={`login-tab login-login-tab ${activeTab === "Login" ? "active" : ""}`} onClick={() => handleTabClick("Login")}>Login</div>
        <div className={`login-tab login-signup-tab ${activeTab === "Sign Up" ? "active" : ""}`} onClick={() => handleTabClick("Sign Up")}>Sign Up</div>
      </div>

      <div className="login-inputs">
        {/* Render form fields based on activeTab */}
        {activeTab === "Sign Up" && (
          <div className="login-input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="User Name" />
          </div>
        )}

        {/* email */}
        <div className="login-input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email ID' />
        </div>
        {/* password */}
        <div className="login-input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password' />
        </div>
      </div>

      {/* buttons */}
      <div className="login-submit-container">
        <div className="login-submit" onClick={handleFormSubmit}>{activeTab}</div>
      </div>
    </div>
  );
};

export default LoginSignUp;
