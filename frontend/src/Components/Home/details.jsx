import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import avatar from '../assets/avatar.png'
import MainDashboard from './accountSummary';

const Details = () => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    level: 0,
    ex: 0
  });
  const { user } = useAuthContext();
  const { email } = user;

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {

        const response = await fetch(`http://localhost:4000/api/users`, {
          method: 'POST',
          body: JSON.stringify({ email }),
          headers: {
            'Content-Type': 'application/json'
          },
        });

        if (response.ok) {
          const user = await response.json();
          setUserDetails({
            username: user.username,
            level: user.level,
            ex: user.ex
          });
        } else {
          console.error('Failed to fetch user details');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <section className="home-section1">
      <div className="section1-container">
        <div className="section11-box">
          <div className='avatar'>
            <img src={avatar} className='img'/>
          </div>
          <div className="ss1right-content">
            {/* Display user details */}
            <>
              <p>Hi, {userDetails.username}</p>
              <p>Level: {userDetails.level}</p>
              <p>Experience: {userDetails.ex}</p>
              <br />
              {/* You can display points here if needed */}
            </>
          </div>
        </div>
        <div className="section12-box">
          <MainDashboard/>
        </div>
        <div className="section13-box">
          {/* Content for the third box goes here */}
        </div>
      </div>
    </section>
  );
};

export default Details;
