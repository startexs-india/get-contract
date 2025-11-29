"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Logout = () => {
    const router = useRouter();

    useEffect(() => {
        // Clear any stored auth tokens (adjust based on your app)
        localStorage.removeItem("data");

        // Redirect after short delay
        const timer = setTimeout(() => {
            window.location.reload();
            router.push("/admin");
        }, 1200);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">

            <div className="bg-white p-10 rounded-xl shadow-card text-center animate-fade">

                <h1 className="text-3xl font-heading font-semibold text-red-600 mb-4">
                    Logging Out...
                </h1>

                <p className="text-gray-600">
                    Please wait while we securely sign you out.
                </p>

            </div>
        </div>
    );
};

export default Logout;
