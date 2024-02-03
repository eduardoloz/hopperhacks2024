import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom"

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/home",
  //     element: <Home />,
  //   },//loads <Home> when you visit home
  // ])

  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
