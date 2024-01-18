// LoginSignUp.jsx
import React, { useState } from 'react';
import './LoginSignUp.css';
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import { useSignUp } from '../../hooks/useSignup';
import { useLogin } from '../../hooks/useLogin';

const LoginSignUp = () => {
  const [activeTab, setActiveTab] = useState("Login");
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {signup, error, isLoading} = useSignUp();
  const {login, loginError, isLoginLoading} = useLogin();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleFormSubmit = async (e) => {
    // Perform form submission logic here
    // Redirect to home page
  
    e.preventDefault();
    if(activeTab === 'Login'){
      await login(email, password);
    }
    if(activeTab === 'Sign Up'){
      await signup(username, email, password);
   
    }
    
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
            <input 
             type="text"
             onChange={e => setUsername(e.target.value)} 
             value = {username}
             placeholder="User Name" />
          </div>
        )}

        {/* email */}
        <div className="login-input">
          <img src={email_icon} alt="" />
          <input 
           type="email" 
           onChange={e => setEmail(e.target.value)} 
           value = {email}
           placeholder='Email ID' />
        </div>
        {/* password */}
        <div className="login-input">
          <img src={password_icon} alt="" />
          <input 
           type="password" 
           onChange={e => setPassword(e.target.value)} 
           value = {password}
           placeholder='Password' />
        </div>
      </div>  

      {/* buttons */}
      <div className="login-submit-container">
        <div className="login-submit" onClick={handleFormSubmit}>{activeTab}</div>
      </div>
      {loginError && <div className='error'>{loginError}</div>}
      {error && <div className='error'>{error}</div>}
    </div>
  );
};

export default LoginSignUp;
