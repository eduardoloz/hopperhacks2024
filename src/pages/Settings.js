import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "../css/login.css";

function Settings() {
    const storedToken = localStorage.getItem('token');

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [preferredGender, setPreferredGender] = useState('');
    const [token, setToken] = useState(storedToken);
    const navigate = useNavigate();
  
    const handleRegister = (event) => {
      event.preventDefault();
      axios.post('http://localhost:3001/settings', { name, age, gender, preferredGender, token }).then(() => {
        alert('Change Sucesssful')
        setName('')
        setAge('')
        setGender('')
        setPreferredGender('')
        setToken(storedToken)
        // navigate('/')
      }) .catch((error) => {
        alert('Unable to register user')
        console.log('Unable to register user')
      })
    }
    
    return (
      <div className="settings-container">
        <div className="settings-form">
          <form onSubmit={handleRegister} className="form">
            <p className="settings-title">Settings</p>
                <input type="text" placeholder="Enter Name" 
                       value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Enter Age" 
                       value={age} onChange={(e) => setAge(e.target.value)} />
                <input type="text" placeholder="Enter your gender" 
                       value={gender} onChange={(e) => setGender(e.target.value)} />
                <input type="text" placeholder="What's your sexual orientation?" 
                       value={preferredGender} onChange={(e) => setPreferredGender(e.target.value)} /> 
            <button className="settings-btn">❤ Update Profile ❤</button>
          </form>
        </div>
      </div>
    );
}
export default Settings;