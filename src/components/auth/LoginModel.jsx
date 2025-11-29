'use client';

import { Mail, Lock } from "lucide-react";

export default function LoginModel({ setLoginModel }) {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="bg-white w-[70%] md:w-[60%] p-8 rounded-2xl shadow-xl border">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center mb-6 text-[#084c9d]">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    Login to access your dashboard
                </p>

                {/* FORM */}
                <form className="space-y-5">
                    {/* Email Input */}
                    <div>
                        <label className="text-sm font-medium">Email</label>
                        <div className="flex items-center border rounded-lg p-3 mt-1">
                            <Mail className="mr-2 w-5 h-5 text-gray-500" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full outline-none"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div>
                        <label className="text-sm font-medium">Password</label>
                        <div className="flex items-center border rounded-lg p-3 mt-1">
                            <Lock className="mr-2 w-5 h-5 text-gray-500" />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full outline-none"
                            />
                        </div>
                    </div>

                    {/* Login Button */}
                    <button
                        className="w-full bg-[#084c9d] hover:bg-blue-700 text-white p-3 rounded-lg font-medium shadow-md transition-all"
                    >
                        Login
                    </button>
                </form>

                {/* LINK TO SIGNUP */}
                <p className="mt-5 text-center text-sm">
                    {"Don't have an account? "}
                    <span
                        className="text-[#084c9d] cursor-pointer font-semibold"
                        onClick={() => setLoginModel(false)}
                    >
                        Sign Up
                    </span>
                </p>
            </div>
        </div>
    );
}
