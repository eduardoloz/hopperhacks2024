import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "../css/login.css";

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/login', { username, password }).then(() => {
      alert('Registration Sucesssful')
      setUsername('')
      setPassword('')
      navigate('/date')
    }) .catch((error) => {
      console.log('Unable to register user');
    })
  }

  return (
    <div class="login-container">
      <div class="login-form">
        <form onSubmit={handleLogin} className="form">
          <p class="login-title">Date a Hopper Today!</p>
          <div class="username-input">
            <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div class="password-input">
            <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button class="login-btn">❤❤❤ ~ Login ~ ❤❤❤</button>
          <p class="register">Not a member?&nbsp;<a href="/register">Sign up now</a></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
