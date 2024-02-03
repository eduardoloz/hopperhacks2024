import React from "react";
import "./register.css";

function Register() {
  return (
    <div class="register-form">
      <form action="" class="form">
        <p class="register-title">Dreamy Hoppers Application</p>
        <div class="username-input">
          <input type="text" placeholder="Enter Username" />
        </div>
        <div class="password-input">
          <input type="password" placeholder="Enter Password" />
        </div>
        <button class="register-btn">❤❤❤ ~ Register ~ ❤❤❤</button>
      </form>
    </div>
  );
}

export default Register;
