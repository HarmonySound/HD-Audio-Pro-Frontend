import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config/config'; // Ensure you import your config
import '../styles/Auth.css'; // Add styles for authentication pages

const Activation = () => {
  const [email, setEmail] = useState('');
  const [activationCode, setActivationCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleActivation = async (e) => {
    e.preventDefault();

    const activationData = { email, code: activationCode };

    try {
      const response = await fetch(`${config.API_BASE_URL}/verify/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(activationData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error data:', errorData);
        throw new Error('Failed to activate');
      }

      const data = await response.json();
      console.log('Account activated successfully:', data);
      alert('Account activated successfully! You can now log in.');
      navigate('/login');
    } catch (error) {
      console.error('Error:', error);
      setError('Error activating account: ' + error.message);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleActivation}>
        <h2>Account Activation</h2>
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
          <label>Activation Code:</label>
          <input
            type="text"
            value={activationCode}
            onChange={(e) => setActivationCode(e.target.value)}
            required
          />
        </div>
        <button type="submit">Activate</button>
      </form>
    </div>
  );
};

export default Activation;
