import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DatingGrounds from "./pages/DatingGrounds";
import Register from "./pages/register";
import Login from "./pages/login";
import Settings from "./pages/Settings";
import AboutUs from "./pages/AboutUs";
import SignOut from "./pages/SignOut";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const isUserSignedIn = !!localStorage.getItem('token');
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {isUserSignedIn && <Route path="/date" element={<DatingGrounds />} />}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/About-us" element={<AboutUs />} />
          {isUserSignedIn && <Route path="/login" element={<Login />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
