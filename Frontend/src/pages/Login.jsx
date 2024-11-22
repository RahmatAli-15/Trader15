import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { APIUrl, handleError, handleSuccess } from '../utils';
import journal from '../assets/1.png';

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('Email and password are required');
        }
        try {
            const url = `${APIUrl}/auth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;
            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/home');
                }, 1000);
            } else if (error) {
                handleError(error.details[0].message);
            } else {
                handleError(message);
            }
        } catch (err) {
            handleError(err);
        }
    };

    return (
        <div className=" flex items-center justify-center h-screen">
            <div className="container w-full lg:w-4/5 h-screen lg:h-3/4 lg:border border-gray-300 rounded-lg flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">
                
                {/* Product Side */}
                <div className="w-full lg:w-1/2 h-28 lg:h-full mt-32 lg:mt-0 lg:bg-theme-yellow-dark flex relative order-2 lg:order-1">
                    <div className="hidden lg:flex items-center justify-start h-full w-full select-none text-center">
                    </div>
                    <div className="absolute right-0 bottom-0 flex items-center justify-center w-full opacity-50 lg:opacity-100">
                        <img src={journal} alt="product" className="product h-[500px] xl:h-[700px] 2xl:h-[900px] w-auto object-cover  lg:duration-700 ease-in-out hover:scale-105 transform transition-all duration-300"/>
                        <div className="shadow w-full h-5 bg-black bg-opacity-25 filter blur absolute bottom-0 lg:bottom-14 left-0 lg:left-24 rounded-full transform skew-x-10"></div>
                    </div>
                </div>

              {/* Login Form */}
<div className="w-full lg:w-1/2 order-1 lg:order-2">
    <div className="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
        <div className="w-full space-y-5">
            <div className="form-caption flex items-end justify-center text-center space-x-3 mb-12">
                <span className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-center tracking-wide text-gray-300 hover:scale-105 transform transition-all duration-300">Login</span>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
                <div className="form-element">
                    <label className="w-full lg:w-4/5 block mx-auto">
                        <span className="block text-lg font-extrabold  tracking-wide text-gray-300 hover:scale-105 transform transition-all duration-300">Email</span>
                        <input
                            type="email"
                            name="email"
                            value={loginInfo.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="bg-gray-900 border lg:border-2 border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 shadow-sm"
                        />
                    </label>
                </div>
                <div className="form-element">
    <label className="w-full lg:w-4/5 block mx-auto">
        <span className="block text-lg font-extrabold  tracking-wide text-gray-300 hover:scale-105 transform transition-all duration-300">Password</span>
        <input
            type="password"
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
            placeholder="Password"
            className="bg-gray-900 border lg:border-2 border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 shadow-sm"
        />
    </label>
</div>
                <div className="form-element">
                    <button type="submit" className="cursor-pointer border-2 border-yellow-200 rounded-lg w-full p-3 bg-yellow-300 hover:bg-yellow-100  shadow-lg hover:scale-105 transform transition-all duration-300">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;