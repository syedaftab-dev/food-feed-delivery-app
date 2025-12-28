import React, { useState } from 'react';
import '../../styles/auth-shared.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FoodPartnerLogin = () => {

  const navigate = useNavigate();
  const [ isSubmitting, setIsSubmitting ] = useState(false)
  const [ error, setError ] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email?.trim() || !password) {
      setError('Please enter email and password.')
      return
    }

    setError('')
    setIsSubmitting(true)

    try {
      const response = await axios.post("http://localhost:3000/api/auth/food-partner/login", {
        email,
        password
      }, { withCredentials: true });

      console.log(response.data);

      navigate("/create-food"); // Redirect to create food page after login
    } catch (err) {
      const message = err?.response?.data?.message || 'Login failed. Please try again.'
      setError(message)
    } finally {
      setIsSubmitting(false)
    }

  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card" role="region" aria-labelledby="partner-login-title">
        <header>
          <h1 id="partner-login-title" className="auth-title">Partner login</h1>
          <p className="auth-subtitle">Access your dashboard and manage orders.</p>
          {error && <p className="auth-subtitle">{error}</p>}
        </header>
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="business@example.com" autoComplete="email" required />
          </div>
          <div className="field-group">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="Password" autoComplete="current-password" required />
          </div>
          <button className="auth-submit" type="submit" disabled={isSubmitting}>Sign In</button>
        </form>
        <div className="auth-alt-action">
          New partner? <a href="/food-partner/register">Create an account</a>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;
