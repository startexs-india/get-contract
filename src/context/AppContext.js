'use client';

import { useRouter } from "next/navigation";
import { createContext, useState, useContext, useEffect } from "react";
import { callApi } from "@/utils/api";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState(null);
    const [adminProfile, setAdminProfile] = useState(null);

    const router = useRouter();

    const fetchAdminProfile = async (id) => {

        console.log("Fetching admin profile for ID:", id);
        if (!id) return;

        try {
            const res = await callApi(`/admin/${id}`, "GET");

            if (res?.success) {
                console.log("Admin profile fetched:", res.data);
                setAdminProfile(res.data);
            }

        } catch (err) {
            console.error("Admin profile fetch failed:", err);
        }
    };

    // Load user from localStorage
    useEffect(() => {

        const dataString = localStorage.getItem("data");

        if (!dataString) return;

        try {

            const data = JSON.parse(dataString);

            if (data?.accessToken && data?.user) {
                setIsLogin(true);
                setUser(data.user);

            }

        } catch {
            localStorage.removeItem("data");
        }

    }, []);

    // Fetch admin profile when user exists
    useEffect(() => {
        if (!user?.userId) return;
        fetchAdminProfile(user.userId);
    }, [user]);

    const logout = () => {

        localStorage.removeItem("data");

        router.push("/");

        setTimeout(() => {
            window.location.reload();
        }, 300);
    };

    return (
        <AppContext.Provider
            value={{
                isLogin,
                setIsLogin,
                user,
                setUser,
                logout,
                adminProfile,
                setAdminProfile
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);