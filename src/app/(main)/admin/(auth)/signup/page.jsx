"use client";
import logo from '@/../public/logo.svg';
import { callApi } from '@/utils/api';
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminSignUpPage() {

    const [name, setName] = useState("");
    const [role, setRole] = useState("Admin");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const route = useRouter();

    useEffect(() => {
        if (errorMsg || successMessage) {
            const timer = setTimeout(() => {
                setErrorMsg("");
                setSuccessMessage("");
            }, 2000);

            return () => clearTimeout(timer);  // Cleanup
        }
    }, [errorMsg, successMessage]);

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMsg("Passwords do not match");
            return;
        }
        if (!name || !email || !password || !role) {
            setErrorMsg("All fields are required");
            return;
        }
        setLoading(true);
        setErrorMsg("");

        // TODO: Call backend API
        const body = {
            name,
            email,
            password,
            role
        };

        await signupApiCall(body);
        console.log("Signup Data:", body);
    };

    const signupApiCall = async (body) => {
        setErrorMsg("");
        try {
            const response = await callApi("auth/signup", "POST", body);
            if (!response || !response.success) {
                setErrorMsg(response?.message || "Signup failed. Try again!");

                return;
            }
            else {
                console.log(response);
                setSuccessMessage("Account Created Successfully, you can login now🙂");
                setTimeout(() => {
                    setLoading(false);
                    route.push("/admin");  // Redirect to login page
                }, 2000);
            }

        } catch (err) {
            console.error(err);
            setErrorMsg("Server error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white px-8 py-3 rounded-xl shadow-lg w-full max-w-md">

                <div className="flex justify-center mb-3">
                    <Image src={logo} alt='DT' width={60} />
                </div>

                <h2 className="text-2xl font-bold text-center text-dark mb-2">
                    Admin Registration
                </h2>

                <p className="text-center text-xl text-gray-600 mb-1">
                    Create your account 🔐
                </p>

                {/* Error Message */}
                {errorMsg && (
                    <p className="text-center text-lg font-semibold border-2 rounded-2xl text-red-500 mb-1">{errorMsg}</p>
                )}

                {/* FORM */}
                <form className="space-y-3" onSubmit={handleSignup}>

                    <div>
                        <label className="block text-gray-600 mb-1 font-medium">Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-3 py-2 border rounded-xl bg-white focus:ring-1 focus:ring-primary"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="admin@example.com"
                            className="w-full px-3 py-2 border rounded-xl bg-white focus:ring-1 focus:ring-primary"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1 font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full px-3 py-2 border rounded-xl bg-white focus:ring-1 focus:ring-primary"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1 font-medium">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full px-3 py-2 border rounded-xl bg-white focus:ring-1 focus:ring-primary"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* ROLE DROPDOWN */}
                    <div>
                        <label className="block text-gray-600 mb-1 font-medium">Role</label>
                        <select
                            className="w-full px-3 py-2 border rounded-xl bg-white focus:ring-1 focus:ring-primary"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="Admin">Admin</option>
                            {/* <option value="Employee">Employee</option>
                            <option value="Manager">Manager</option> */}
                        </select>
                    </div>

                    {/* SIGNUP BUTTON */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`mt-4 w-full px-3 py-2 rounded-xl text-lg shadow-md cursor-pointer
                        ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}
                    >
                        {loading ? "Creating Account..." : "Sign Up"}
                    </button>
                </form>

                {/* Login link */}
                <p className="text-center text-gray-600 mt-4 text-sm">
                    Already have an account?{" "}
                    <Link href="/admin" className="text-blue-600 hover:underline font-semibold">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}