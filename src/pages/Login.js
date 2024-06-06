import React from 'react'
import Animation from '../utils/Animation';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Animation />
      <div className="section-login">
        <h2>Login</h2>
        <div className="card">
          <form>
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
          <div className="label">Do not have an account? <Link to="/register">Register</Link></div>
        </div>

      </div>
    </>
  )
}

export default Login