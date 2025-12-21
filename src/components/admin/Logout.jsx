"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

const Logout = () => {
    const router = useRouter();

    // MANUAL LOGOUT ONLY
    const handleLogout = () => {
        localStorage.removeItem("data"); // remove auth/session
        router.push("/admin");           // redirect to login
        window.location.reload();        // reload to reset states
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 px-4 mt-20">

            <div className="bg-white p-10 rounded-xl shadow-lg text-center w-full max-w-md">

                <div className="flex justify-center mb-4">
                    <LogOut size={50} className="text-red-600" />
                </div>
                <h1 className="text-3xl font-semibold text-red-600 mb-3">
                    Logout
                </h1>
                <p className="text-gray-600 mb-6">
                    Click the button below to log out.
                </p>
                <button
                    onClick={handleLogout}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center gap-2 mx-auto transition-all"
                >
                    <LogOut size={20} />
                    Logout
                </button>

            </div>
        </div>
    );
};

export default Logout;
