import React from "react";
import "../css/register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div class="container-register">
    <div class="register-form">
      <form action="/register" method="post" class="form">
        <p class="register-title">Hopper Dreams Application</p>
        <div class="username-input">
          <input type="text" placeholder="Enter Username" />
        </div>
        <div class="password-input">
          <input type="password" placeholder="Enter Password" />
        </div>
        <button class="register-btn">❤❤❤ ~ Register ~ ❤❤❤</button>
      </form>
    </div>
    </div>
  );
}

export default Register;
