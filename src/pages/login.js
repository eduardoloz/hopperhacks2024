import React from "react";
import "../css/login.css";

function Login() {
  return (
    <div class="login-form">
      <form action="/login" method="post" class="form">
        <p class="login-title">Dreamy Hoppers Application</p>
        <div class="username-input">
          <input type="text" placeholder="Enter Username" />
        </div>
        <div class="password-input">
          <input type="password" placeholder="Enter Password" />
        </div>
        <button class="login-btn">❤❤❤ ~ Register ~ ❤❤❤</button>
      </form>
    </div>
  );
}

export default Login;
