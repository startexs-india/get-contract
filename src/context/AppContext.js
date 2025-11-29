'use client';
import { useRouter } from "next/navigation";
import { createContext, useState, useContext, useEffect } from "react";


const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState(null);

    const router = useRouter();

    useEffect(() => {
        const dataString = localStorage.getItem("data");
        if (dataString) {
            try {
                const data = JSON.parse(dataString);
                if (data.authToken && data.username) {
                    setIsLogin(true);
                    setUser(String(data.username));
                }
            } catch {
                // invalid JSON in localStorage, ignore or clear
                localStorage.removeItem("data");
            }
        }
    }, []); // run once on mount, NOT on isLogin

    const logout = () => {
        localStorage.removeItem("data");
        const timer = setTimeout(() => {
            router.push("/");
            window.location.reload();
        }, 1200);

        return () => clearTimeout(timer);
    };

    return (
        <AppContext.Provider value={{ isLogin, setIsLogin, user, setUser, logout }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
