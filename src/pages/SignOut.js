import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function SignOut() {
  const navigate = useNavigate();
  localStorage.removeItem('token');
  navigate('/login')
  return (<p>signed out</p>);
}

export default SignOut;
