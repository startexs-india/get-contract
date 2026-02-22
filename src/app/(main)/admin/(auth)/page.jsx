"use client";
import logo from '@/../public/logo.svg';
import { useAppContext } from '@/context/AppContext';
import { callApi } from '@/utils/api';
import { Eye, EyeClosed } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function AdminLoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [logging, setLogging] = useState(false);
    const [loginError, setLoginError] = useState("");
    const route = useRouter();

    const { isLogin, setIsLogin } = useAppContext();


    useEffect(() => {
        if (isLogin) {
            route.push("/admin/dashboard");
        }
    }, [isLogin, route]);

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent page reload on form submit
        console.log(email, password);

        if (email != "" && password != "") {
            setLogging(true);
            const body = {
                email,
                password
            }
            await loginApiCall(body);
            console.log("Login Data:", body);
        }
        else {
            setLoginError("Enter email or password");
        }

        setTimeout(() => {
            setLoginError("");
        }, 2000);
    }


    const loginApiCall = async (body) => {
        setLoginError("");
        try {
            const response = await callApi("auth/login", "POST", body);
            if (!response || !response.success) {
                setLoginError(response?.message || "Login failed. Try again!");
                return;
            }
            else if (response.success) {

                console.log(response.data);

                localStorage.setItem("data", JSON.stringify(response.data));
                setIsLogin(true);
                setTimeout(() => {
                    setLogging(false);
                    route.push("/admin/dashboard");  // Redirect to login page
                }, 2000);
            }

        } catch (err) {
            console.error(err);
            setLoginError("Server error. Please try again.");
        } finally {
            setLogging(false);
        }
    };


    return (
        <div className=" flex items-center justify-center">
            {/* CARD */}
            <div className="bg-gray-100 p-8 rounded-xl shadow-md w-full max-w-md mx-2 mt-6">

                <div className='flex justify-center mb-3'>
                    <Image src={logo} alt='DT' width={60} />
                </div>

                {/* TITLE */}
                <div className="text-2xl font-bold text-center text-dark mb-6">
                    <h2 className='text-[#084c9d]'>
                        Hi Admin,
                    </h2>
                    <span className='text-gray-600 text-xl'>
                        Login your account 🔐
                    </span>
                </div>

                {/* Message section */}
                <div className='w-full text-center text-red-500'>
                    {loginError &&
                        <p> {loginError}
                        </p>
                    }
                </div>

                {/* FORM */}
                <form className="space-y-2" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-gray-600 mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="admin@example.com"
                            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-primary bg-white"
                            onChange={(e) => setEmail(e.target.value)}
                            required

                        />
                    </div>

                    <div className="relative">
                        <label className="block text-gray-600 mb-1 font-medium">Password</label>

                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="********"
                            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-primary bg-white"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        {/* Icon Button */}
                        <span
                            className="absolute right-3 top-9 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <Eye /> : <EyeClosed />}
                        </span>
                    </div>


                    {/* LOGIN BUTTON */}
                    <button
                        type="submit"
                        disabled={logging}
                        className={`mt-5 w-full px-3 py-1 rounded-xl shadow-md border-2 border-gray-400 text-lg
                            cursor-pointer text-white hover:bg-[#094185]
                            ${logging ? "bg-[#094185] cursor-not-allowed" : "text-black bg-[#084c9d]"}`}
                    >
                        {logging ? (
                            <div className="flex justify-center items-center gap-2">
                                <div className="animate-spin w-5 h-5 border-2 border-t-transparent border-white rounded-full"></div>
                                Logging...
                            </div>
                        ) : (
                            "Login"
                        )}
                    </button>
                </form>

                {/* Signup link */}
                {/* <p className="text-center text-[16px] text-gray-600 mt-4">
                    Already have an account?{" "}
                    <Link href={"/admin"} className="text-blue-500 hover:underline cursor-pointer font-semibold">
                        LogIn
                    </Link>
                </p> */}
            </div>
        </div>
    );
}