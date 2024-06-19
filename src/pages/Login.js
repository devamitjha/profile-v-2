import React, { useState } from 'react'
import Animation from '../utils/Animation';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log({ email, password });
      toast.success('Login successful', {
        autoClose: 1500,
      });
      // You can proceed with form submission here, e.g., call an API
    } else {
      setErrors(validationErrors);
      Object.values(validationErrors).forEach(error => {
        toast.error(error, {
          autoClose: 1500,
        });
      });
    }
  };


  return (
    <>
      <Animation />
      <div className="section-login">
        <h2>Login</h2>
        <div className="card">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          <div className="label">Do not have an account? <Link to="/register">Register</Link></div>
        </div>

      </div>
    </>
  )
}

export default Login