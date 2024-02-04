import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function SignOut() {
  const navigate = useNavigate();
  localStorage.removeItem('token');
  navigate('/login')
  return (
    <div>
      <p>Signed out.</p>
      <a href='/'>Back Home</a>
    </div>
  );
}

export default SignOut;
