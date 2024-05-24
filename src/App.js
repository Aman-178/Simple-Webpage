import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.js';
import Sign from './Pages/Sign.js';
import Signup from './Pages/Signup.js';
import Dashboard from './Pages/Dashboard.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [islogin, setislogin] = useState(false);
  useEffect(() => {
    console.log('aman')
    setislogin(false); // This will run only once when the component mounts
  }, []);
  return (
    <div className='h-screen bg-yellow-800 y-hidden' >
      <Navbar islogin={islogin} setislogin={setislogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign' element={<Sign setislogin={setislogin} />} />
        <Route path='/signup' element={<Signup setislogin={setislogin} />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}
