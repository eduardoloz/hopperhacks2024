import React from "react";
import "../css/login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div class="container-login">
      <div class="login-form">
        <form action="/login" method="post" class="form">
          <p class="login-title">Join Now!</p>
          <div class="username-input">
            <input type="text" placeholder="Enter Username" />
          </div>
          <div class="password-input">
            <input type="password" placeholder="Enter Password" />
          </div>
          <button class="login-btn">❤❤❤ ~ Login ~ ❤❤❤</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
