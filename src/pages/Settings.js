import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "../css/login.css";

function Settings() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [prefferedGender, setPrefferedGender] = useState('');
    const navigate = useNavigate();
  
    const handleRegister = (event) => {
      event.preventDefault();
      axios.post('http://localhost:3001/settings').then(() => {
        alert('Registration Sucesssful')
        setName('')
        setAge('')
        setGender('')
        setPrefferedGender('')
        navigate('/')
      }) .catch((error) => {
        alert('Unable to register user')
        console.log('Unable to register user')
      })
    }
    
    return (
      <div className="settings-container">
        <div className="settings-form">
          <form onSubmit={handleRegister} className="form">
            {/* <img class="register-img" src={hopperImage} alt="hopper" />  */}
            <p className="settings-title">Settings</p>
                <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.name)} />
                <input type="text" placeholder="Enter Age" value={age} onChange={(e) => setName(e.target.age)} />
                <input type="text" placeholder="Enter your gender" value={gender} onChange={(e) => setGender(e.target.gender)} />
                <input type="text" placeholder="What's your sexual orientation?" value={prefferedGender} onChange={(e) => setGender(e.target.prefferedGender)} /> 
            <button className="settings-btn">❤ Update Profile ❤</button>
            {/* <p class="login">Already a hopper dreamer?&nbsp;<a href="/login">Login now!</a></p> */}
          </form>
        </div>
      </div>
    );
}
export default Settings;