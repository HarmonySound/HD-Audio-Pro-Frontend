// src/pages/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config/config'; // Ensure you import your config
import '../styles/Auth.css'; // Add styles for authentication pages

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${config.API_BASE_URL}/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to log in');
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // Handle login success (e.g., save token, redirect)
      // Assuming successful login, redirect to homepage or dashboard
      alert('Login successful');
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
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
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
