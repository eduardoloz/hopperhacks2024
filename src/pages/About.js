import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/about.css";
import { useNavigate } from "react-router-dom";
import hopperImage from "../assets/hopper.png";

function About() {

  return (
    <div className="about-container">
      <div className="about-form">
        <form onSubmit={handleRegister} className="form">
          <img class="about-img" src={hopperImage} alt="hopper" />
          <p className="about-title">Hopper Dreams Application</p>
          <div className="username-input">
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="password-input">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="about-btn">❤❤❤ ~ Register ~ ❤❤❤</button>
          <p class="login">
            Already a hopper dreamer?&nbsp;<a href="/login">Login now!</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default About;
