import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Your Website</h1>
      </header>

      <div className="home-content">
        <section className="home-section">
          <h2>Section 1</h2>
          <p>Content for section 1 goes here.</p>
        </section>

        <section className="home-section">
          <h2>Section 2</h2>
          <p>Content for section 2 goes here.</p>
        </section>
      </div>

      <footer className="home-footer">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
