import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "../css/login.css";

function Login() {
  return (
    <div class="login-container">
      <div class="login-form">
        <form action="/login" method="post" class="form">
          <p class="login-title">Date a Hopper Today!</p>
          <div class="username-input">
            <input type="text" placeholder="Enter Username" />
          </div>
          <div class="password-input">
            <input type="password" placeholder="Enter Password" />
          </div>
          <button class="login-btn">❤❤❤ ~ Login ~ ❤❤❤</button>
          <p class="register">Not a member?&nbsp;<a href="/register">Sign up now</a></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
