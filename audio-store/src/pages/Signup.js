import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config/config'; // Ensure you import your config
import '../styles/Auth.css'; // Add styles for authentication pages

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const requestData = { 
        email, 
        password, 
        first_name: firstName, 
        last_name: lastName 
      };
      
      console.log('Request data:', requestData); // Log the request data

      const response = await fetch(`${config.API_BASE_URL}/signup/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error data:', errorData);
        throw new Error('Failed to sign up');
      }

      const data = await response.json();
      console.log('Signup successful:', data); // Log the successful response data

      alert('Signup successful');
      navigate('/activation');
    } catch (error) {
      console.error('Error:', error);
      setError('Error creating account: ' + error.message);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
