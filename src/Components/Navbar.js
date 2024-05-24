import React from "react";
import { Link } from "react-router-dom";
import img from '../Assets/img.jpg';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar({ islogin, setislogin }) {
  const notify = () => {
    toast("Successfully Logged out");
  };

  return (
    <div className="flex justify-between items-center pt-5 px-10 bg-blue-800">
      <Link to='/' className="flex items-center gap-2">
        <img src={img} alt="logo" className="h-12 w-30 mb-2" />
        <span className="text-lg font-bold text-blue-500">Study</span>

      </Link>



      <nav>
        <ul className="flex text-lg font-bold text-orange-200 gap-8">
          <li>
            <Link to='/' className="hover:text-orange-500 transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link to='/' className="hover:text-orange-500 transition-colors duration-300">About</Link>
          </li>
          <li>
            <Link to='/' className="hover:text-orange-500 transition-colors duration-300">Content</Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-8">
        {!islogin ? (
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <Link to='/sign'>Sign In</Link>
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <Link to='/signup'>Sign Up</Link>
            </button>
          </div>
        ) : (
          <>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={() => { setislogin(false); notify(); }}>
              <Link to='/sign'>Log Out</Link>
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <Link to='/dashboard'>Dashboard</Link>
            </button>
          </>
        )}
      </div>
    </div>

  )
}
export default Navbar;
