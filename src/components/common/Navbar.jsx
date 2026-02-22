"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { UserRound, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import logo from "@/../public/logo.svg";
import { useAppContext } from "@/context/AppContext";
import { LogOut } from "lucide-react";
import AuthModel from "../auth/AuthModel";
import { useRouter } from "next/navigation";

export default function Navbar() {

    const [open, setOpen] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const route = useRouter();

    const mobileMenuRef = useRef(null);

    const { isLogin, user, logout } = useAppContext();

    useEffect(() => {
        function handleClickOutside(event) {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setOpen(false);
                setShowServices(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    return (
        <nav className="w-full flex justify-between items-center bg-white shadow-md px-5 sm:px-10 md:px-20 py-5 z-50 border-b-2 border-gray-300 ">

            {/* LEFT SIDE → MENU BUTTON + LOGO */}
            <div className="flex items-center gap-5">

                {/* Mobile Menu Button (always visible) */}
                <button
                    className="text-xl lg:text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

                {/* Logo */}
                <Link
                    href="/"
                    className="flex gap-2 items-center text-2xl font-heading font-semibold hover:text-accent transition leading-tight"
                >
                    <Image src={logo} alt="DT" width={60} />
                    <div>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#084c9d] via-[#0c5fb8] to-[#128af0] bg-clip-text text-transparent">
                            Dummy Tender
                        </h2>

                        <p className="text-sm bg-gradient-to-r from-[#0c5fb8] to-[#128af0] bg-clip-text text-transparent">
                            Smart Tender Search. Simple. Fast. Reliable.
                        </p>
                    </div>

                </Link>
            </div>

            {/* RIGHT SIDE → LOGIN / PROFILE */}
            <div className="flex items-center gap-4">

                {isLogin ? (
                    <div className="flex gap-3 items-center">

                        {/* Avatar */}
                        <div className="text-primary border rounded-full bg-gray-100 cursor-pointer flex items-center justify-center w-10 h-10">
                            {user ? (
                                <p className="text-xl font-semibold hover:text-[#084c9d]">
                                    {user?.fullName?.charAt(0)}
                                </p>
                            ) : (
                                <UserRound size={24} color="gray" />
                            )}
                        </div>

                        {/* Logout (Desktop only) */}
                        <button
                            className="flex border px-3 py-1 rounded-md hover:bg-[#084c9d] hover:text-white transition items-center gap-1"
                            onClick={() => logout()}
                        >
                            <span className="hidden sm:flex">Logout</span>
                            <LogOut size={18} />
                        </button>
                    </div>
                ) : (
                    <button
                        //onClick={() => setIsAuthOpen(true)}
                        onClick={() => (route.push("/admin"))}
                        className="hidden md:flex bg-[#084c9d] text-white rounded-lg px-4 py-1 hover:bg-[#0b2543] text-xl"
                    >
                        Login
                    </button>
                )}
            </div>

            {/* ---------------- MOBILE MENU ---------------- */}
            {open && (
                <div
                    ref={mobileMenuRef}
                    className="fixed top-0 left-0 bg-[#084c9d] text-white 
                   w-[45%] md:w-[30%] lg:w-[20%]
                   h-full z-50 overflow-y-auto 
                   shadow-xl transition-transform duration-300"
                >
                    {/* Close Button */}
                    <button
                        className="w-full flex justify-end p-4"
                        onClick={() => setOpen(false)}
                    >
                        <X size={28} strokeWidth={2} />
                    </button>

                    {/* Navigation List */}
                    <nav className="flex flex-col w-full text-lg">

                        <Link
                            href="/"
                            className="px-6 py-3 border-b border-white/20 hover:bg-white/10 transition"
                        >
                            Client Home
                        </Link>


                    </nav>
                </div>
            )}

            <AuthModel isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
        </nav>
    );
}
