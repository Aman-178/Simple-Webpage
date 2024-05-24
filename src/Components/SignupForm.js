import React from 'react'
import { useState } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
const SignupForm = ({ setislogin }) => {
    const [formdata, setformdata] = useState({ email: "", password: "", email: "", conpassword: "" })
    function changeHandler(event) {
        const { name, value } = event.target;
        setformdata((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }
    const [showpassord, setshowpassword] = useState(false)
    const notify = () => {
        toast("Successfully Sign Up");
    };
    const notif = () => {
        toast("Password Does not Match");
    };
    const navigate = useNavigate();
    function SubmitHandler(event) {
        event.preventDefault();
        if (formdata.password !== formdata.conpassword) {
            notif();
            return
        }
        setislogin(true)
        notify();
        navigate("/dashboard")

    }
    return (
        <div className='w-96 mx-auto'>
            <form onSubmit={SubmitHandler}>
                <div className="flex justify-center space-x-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Student
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Instructor
                    </button>
                </div>


                <div className='flex gap-5 mt-2'>
                    <label className="block mb-2 text-gray-700 font-bold">
                        <p>First Name <sup className="text-red-500">*</sup></p>
                        <input
                            className="block w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            type="text"
                            name="firstname"
                            value={formdata.firstname}
                            placeholder="First Name"
                            onChange={changeHandler}
                        />
                    </label>
                    <label className="block mb-2 text-gray-700 font-bold">
                        <p>Last Name <sup className="text-red-500">*</sup></p>
                        <input
                            className="block w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            type="text"
                            name="lastname"
                            value={formdata.lastname}
                            placeholder="Last Name"
                            onChange={changeHandler}
                        />
                    </label>
                </div>

                <label className="block mb-2 text-gray-700 font-bold">
                    <p>Email Address <sup className="text-red-500">*</sup></p>
                    <input
                        className="block w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        type="email"
                        name="email"
                        value={formdata.email}
                        placeholder="Enter your Email"
                        onChange={changeHandler}
                    />
                </label>

                <div className='flex gap-2'>
                    <label className="block mb-2 text-gray-700 font-bold">
                        <p>Create Password <sup className="text-red-500">*</sup></p>
                        <div className="relative">
                            <input
                                className="block w-full p-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                type={showpassord ? 'text' : 'password'}
                                name="password"
                                value={formdata.password}
                                placeholder="Create password"
                                onChange={changeHandler}
                            />
                            <span
                                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer text-gray-600"
                                onClick={() => {
                                    setshowpassword((prev) => !prev);
                                }}
                            >
                                {showpassord}
                            </span>
                        </div>
                    </label>
                    <label className="block mb-2 text-gray-700 font-bold">
                        <p>Confirm Password <sup className="text-red-500">*</sup></p>
                        <div className="relative">
                            <input
                                className="block w-full p-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                type={showpassord ? 'text' : 'password'}
                                name="conpassword"
                                value={formdata.conpassword}
                                placeholder="Confirm password"
                                onChange={changeHandler}
                            />
                            <span
                                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer text-gray-600"
                                onClick={() => {
                                    setshowpassword((prev) => !prev);
                                }}
                            >
                                {showpassord}
                            </span>
                        </div>
                    </label>
                </div>

                <div className='flex justify-center mt-2'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Sign Up
                    </button>
                </div>


            </form>
        </div>
    )
}

export default SignupForm
