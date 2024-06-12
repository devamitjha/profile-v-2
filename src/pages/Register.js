import React from 'react'
import Animation from '../utils/Animation';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <Animation />
      <div className="section-register">
        <h2>Register</h2>
        <div className="card">
          <form>
            <input type="text" name="username" placeholder="Username" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Register</button>
          </form>
          <div className="label">Already a member with us? <Link to="/login">Login</Link></div>
        </div>

      </div>
    </>
  )
}

export default Register