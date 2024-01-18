import {React, useState} from 'react'
import logo from '../assets/logo-color.png';
import './home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLogout } from '../../hooks/useLogout';


const Header = () =>{
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const {logout} = useLogout();

    const handleUserIconClick = () => {
        setDropdownVisible(!isDropdownVisible);
      };

    const handleLogoutClick = () => {
        logout();
      };

    return(
        <header className="home-header">
        <div className="header-content">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="user-profile" onClick={handleUserIconClick}>
              <i className="fa fa-user" style={{ color: '#808080' }}></i>
              {isDropdownVisible && (
                <div className="dropdown" style={{ backgroundColor: '#808080', color: '#002a57' }}>
                  <button onClick={handleLogoutClick} className="dropdown-button" style={{backgroundColor: '#808080', borderBlock:'none', padding: '5px'}}>
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

