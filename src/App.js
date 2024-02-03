import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DatingGrounds from './pages/DatingGrounds';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/date" element={<DatingGrounds/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
