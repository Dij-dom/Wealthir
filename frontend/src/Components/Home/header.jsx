import {React, useState} from 'react'
import logo from '../assets/logo-color.png';
import './home.css';
import { useNavigate } from 'react-router-dom';

const Header = () =>{
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    const handleUserIconClick = () => {
        setDropdownVisible(!isDropdownVisible);
      };

    const handleLogoutClick = () => {
        navigate('/');
      };

    return(
        <header className="home-header">
        <div className="header-content">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="user-profile" onClick={handleUserIconClick}>
              <i className="fas fa-user" style={{ color: '#808080' }}></i>
              {isDropdownVisible && (
                <div className="dropdown" style={{ backgroundColor: '#808080', color: '#002a57' }}>
                <button onClick={handleLogoutClick} className="dropdown-button">
                  Logout
                </button>
              </div>
              )}
            </div>
          </div>
        </header>
    )
}

export default Header;

