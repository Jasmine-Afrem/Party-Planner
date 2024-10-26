import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Welcome.css'; // Ensure this path is correct

const Welcome = () => {
  const navigate = useNavigate(); // Get the navigate function

  const handleGetStarted = () => {
    navigate('/login'); // Redirect to the login route
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to Party Planner!</h1>
      <p>Your ultimate solution for planning the perfect party.</p>
      <button className="get-started-button" onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
};

export default Welcome;
