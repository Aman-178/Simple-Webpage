import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';


function LoginForm({ setislogin }) {
    const notify = () => {
        toast("Successfully Log In");
    };
    const navigate = useNavigate();
    const [formdata, setformdata] = useState({ email: "", password: "" })
    function changeHandler(event) {
        const { name, value } = event.target;
        setformdata((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }
    const [showpassord, setshowpassword] = useState(false)
    function SubmitHandler(event) {
        event.preventDefault()
        setislogin(true)
        notify()
        navigate("/dashboard")

    }
    return (
        <div  className="max-w-md mx-auto" >
            <form onSubmit={SubmitHandler}>
                <label className="font-bold text-xl ml-5 text-gray-700">
                    Email Address
                    <sup className="text-red-500">*</sup>
                </label>

                <br></br>
                <input
                    className="ml-10 p-2 mt-2 border rounded-lg border-blue-500 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                    type="email"
                    name="email"
                    value={formdata.email}
                    onChange={changeHandler}
                />

                <br></br>
                <br></br>
                <label className="font-bold text-xl ml-5 text-gray-700">Password <sup className="text-red-500">*</sup></label>
                <br></br>

                <input className="ml-10 p-2 border border-gray-300 rounded-lg bg-blue-100 text-blue-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required type={showpassord ? ("text") : ("password")} name='password' value={formdata.password} onChange={changeHandler}></input>
                <span onClick={() => {
                    setshowpassword((prev) => !prev)
                }}>
                    {showpassord}
                </span>
                <br></br>
                <div className='flex justify-center mt-5'>
                    <button className="bg-blue-500 flex items-center mt-5 ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Sign in
                    </button>
                </div>


            </form>

        </div>
    )
}

export default LoginForm;