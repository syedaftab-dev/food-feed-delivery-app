import React, { useState } from 'react';
import '../../styles/auth-shared.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {

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
      const response = await axios.post("http://localhost:3000/api/auth/user/login", {
        email,
        password
      }, { withCredentials: true });

      console.log(response.data);

      navigate("/"); // Redirect to home after login
    } catch (err) {
      const message = err?.response?.data?.message || 'Login failed. Please try again.'
      setError(message)
    } finally {
      setIsSubmitting(false)
    }

  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card" role="region" aria-labelledby="user-login-title">
        <header>
          <h1 id="user-login-title" className="auth-title">Welcome back</h1>
          <p className="auth-subtitle">Sign in to continue your food journey.</p>
          {error && <p className="auth-subtitle">{error}</p>}
        </header>
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
          </div>
          <div className="field-group">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" required />
          </div>
          <button className="auth-submit" type="submit" disabled={isSubmitting}>Sign In</button>
        </form>
        <div className="auth-alt-action">
          New here? <a href="/user/register">Create account</a>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
