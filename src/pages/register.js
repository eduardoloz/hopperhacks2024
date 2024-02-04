import React from "react";
import "../css/register.css";
import { Link } from "react-router-dom";
import hopperImage from "../assets/hopper.png"; 

function Register() {
  return (
    <div className="register-container">
      <div className="register-form">
        <form action="/register" method="post" className="form">
          <img class="register-img" src={hopperImage} alt="hopper" /> 
          <p className="register-title">Hopper Dreams Application</p>
          <div className="username-input">
            <input type="text" placeholder="Enter Username" />
          </div>
          <div className="password-input">
            <input type="password" placeholder="Enter Password" />
          </div>
          <button className="register-btn">❤❤❤ ~ Register ~ ❤❤❤</button>
          <p class="login">Already a hopper dreamer?&nbsp;<a href="/login">Login now!</a></p>
        </form>
      </div>
    </div>
  );
}

export default Register;
