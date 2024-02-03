import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DatingGrounds from './pages/DatingGrounds';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path:"/dating",
      element: <DatingGrounds />,
    }//loads <Home> when you visit home
  ])

  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
