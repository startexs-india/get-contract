'use client';

import { Mail, Lock, User } from "lucide-react";

export default function SignupModel({ setLoginModel }) {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="bg-white w-[70%] md:w-[60%] p-8 rounded-2xl shadow-xl border">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center mb-6 text-[#084c9d]">
                    Create Account
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    Join us and explore tenders easily!
                </p>

                {/* FORM */}
                <form className="space-y-5">
                    {/* Username */}
                    <div>
                        <label className="text-sm font-medium">Username</label>
                        <div className="flex items-center border rounded-lg p-3 mt-1">
                            <User className="mr-2 w-5 h-5 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="w-full outline-none"
                            />
                        </div>
                    </div>

                    {/* Email */}
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

                    {/* Password */}
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

                    {/* Submit */}
                    <button
                        className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg font-medium shadow-md transition-all"
                    >
                        Sign Up
                    </button>
                </form>

                {/* SWITCH TO LOGIN */}
                <p className="mt-5 text-center text-sm">
                    Already have an account?{" "}
                    <span
                        className="text-[#084c9d] cursor-pointer font-semibold"
                        onClick={() => setLoginModel(true)}
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
}
