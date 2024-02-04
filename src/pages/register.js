import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../css/register.css";
import { useNavigate } from "react-router-dom";
import hopperImage from "../assets/hopper.png"; 

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/register', { username, password }).then(() => {
      alert('Registration Sucesssful')
      setUsername('')
      setPassword('')
      navigate('/login')
    }) .catch((error) => {
      alert('Unable to register user')
      console.log('Unable to register user')
    })
  }
  
  return (
    <div className="register-container">
      <div className="register-form">
        <form onSubmit={handleRegister} className="form">
          <img class="register-img" src={hopperImage} alt="hopper" /> 
          <p className="register-title">Hopper Dreams Application</p>
          <div className="username-input">
            <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="password-input">
            <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="register-btn">❤❤❤ ~ Register ~ ❤❤❤</button>
          <p class="login">Already a hopper dreamer?&nbsp;<a href="/login">Login now!</a></p>
        </form>
      </div>
    </div>
  );
}

export default Register;
