'use client';

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { UserRound, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import logo from '@/../public/logo.svg';
import { useAppContext } from "@/context/AppContext";
import {
    FileText,
    CheckSquare,
    FolderTree,
    BarChart2,
    ClipboardList,
    Hammer,
    Crown,
    HelpCircle,
    BookOpen,
    LogOut,
} from "lucide-react";
import AuthModel from "../auth/AuthModel";


export default function Navbar() {

    const [open, setOpen] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const [showDeskServices, setShowDeskServices] = useState(false);

    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [authType, setAuthType] = useState("login");

    const mobileMenuRef = useRef(null);
    const desktopServiceRef = useRef(null);

    const { isLogin, setIsLogin, user, logout } = useAppContext();

    const services = [
        { name: 'Live Tenders', href: '/tenders', icon: FileText },
        { name: 'Tender Results', href: '/tender-results', icon: CheckSquare },
        { name: 'Tender By Category', href: '/tender-category', icon: FolderTree },
        { name: 'Bid Analysis', href: '/bid-analysis', icon: BarChart2 },
        { name: 'My Bids', href: '/my-bids', icon: ClipboardList },
        { name: 'My Projects', href: '/projects', icon: Hammer },
        { name: 'Premium Plans', href: '/premium', icon: Crown },
        { name: 'Help & Support', href: '/support', icon: HelpCircle },
        { name: 'Documentation', href: '/documentation', icon: BookOpen },
    ];

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                desktopServiceRef.current &&
                !desktopServiceRef.current.contains(event.target)
            ) {
                setShowDeskServices(false);
            }

            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target)
            ) {
                setOpen(false);
                setShowServices(false);
            }
        }

        if (open) {
            document.body.style.overflow = "hidden";  // disable scroll
        } else {
            document.body.style.overflow = "auto";  // enable scroll
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    return (
        <nav className="w-full text-black px-5 sm:px-10 md:px-20 py-5 rounded-md shadow-md relative">
            <div className="flex justify-between items-center text-lg">

                {/* Logo */}
                <Link href="/" className="flex gap-2 items-center text-2xl font-heading font-semibold hover:text-accent transition leading-tight">
                    <Image src={logo} alt="DT" width={40} />
                    Dummy Tender
                </Link>

                {/* DESKTOP LINKS */}
                <div className="hidden md:flex gap-10 text-[16px] md:text-lg font-medium items-center relative">
                    <Link href="/" className="hover:text-accent transition">Home</Link>

                    {/* Desktop Services Dropdown */}
                    <div className="relative" ref={desktopServiceRef}>
                        <button
                            className="flex items-center gap-1 hover:text-accent transition cursor-pointer"
                            onClick={() => setShowDeskServices(!showDeskServices)}
                        >
                            Services <ChevronDown size={18} className={`${showDeskServices ? "rotate-180" : ""} transition`} />
                        </button>

                        {showDeskServices && (
                            <div className="absolute top-full left-0 mt-1 bg-[#084c9d] text-white shadow-md border rounded-lg p-3 w-56 animate-slideUp text-[16px]">
                                {services.map((service, index) => (
                                    <Link
                                        key={index}
                                        href={service.href}
                                        className="flex py-2 px-2 hover:bg-[#09458e] rounded items-center gap-3"
                                    >
                                        <service.icon size={16} />
                                        <p>
                                            {service.name}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/about" className="hover:text-accent transition">About</Link>
                    <Link href="/contact" className="hover:text-accent transition">Contact</Link>
                </div>

                {/* MOBILE MENU BUTTON */}
                <div className="flex items-center gap-3">
                    {
                        isLogin ?
                            <div className="flex gap-3 items-center">
                                <div className="text-primary shadow-soft border-[#0b2543] transition border-3 rounded-full bg-gray-100 hover:text-white cursor-pointer flex items-center justify-center w-10 h-10">
                                    {user ? (
                                        //<p className="text-2xl font-semibold text-orange-600">{user?.slice(0, 1)}</p>
                                        <p className="text-2xl font-semibold hover:text-[#084c9d]">{typeof user === "string"
                                            ? user.slice(0, 1)
                                            : user?.username?.slice(0, 1) || 'U'}</p>
                                    ) : (
                                        <UserRound size={24} color="gray" />
                                    )}
                                </div>
                                <button className="hidden md:flex border-2 px-2 py-1 text-lg rounded-md cursor-pointer hover:bg-[#084c9d] hover:text-white transition-all delay-200 items-center gap-1" onClick={() => logout()}>Logout
                                    <LogOut size={18} />
                                </button>
                            </div>
                            :
                            <div className="bg-[#084c9d] text-white rounded-lg border-2 hover:bg-[#0b2543] ">
                                <button onClick={() => { setAuthType("login"); setIsAuthOpen(true); }} className="px-3 py-1 cursor-pointer">
                                    Login
                                </button>
                            </div>
                    }
                    <div className="md:hidden">
                        <button
                            className="text-2xl"
                            onClick={() => setOpen(!open)}
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}

            {open && (
                <div ref={mobileMenuRef} className="fixed top-1 right-1 bg-[#084c9d] text-white px-2  py-3 rounded-2xl space-y-4 text-lg md:hidden animate-slideUp h-full w-[60%] sm:w-[40%] flex flex-col items-center z-50">
                    <button className="w-full flex justify-end px-4" onClick={() => setOpen(false)}>
                        <X size={24} strokeWidth={2} />
                    </button>

                    <div className="flex flex-col items-center gap-5 w-full">
                        <Link href="/" className="block hover:text-accent transition border-b-2 border-gray-300 rounded-lg shadow w-full text-center py-2">
                            Home
                        </Link>

                        {/* MOBILE SERVICES DROPDOWN */}
                        <div className="w-full">
                            <button
                                onClick={() => setShowServices(!showServices)}
                                className="flex justify-between items-center w-full py-2 px-4 border-b-2 border-gray-300 rounded-lg shadow hover:text-accent transition"
                            >
                                <span className="w-full text-center">Services</span>
                                <ChevronDown size={18} className={`${showServices ? "rotate-180" : ""} transition`} />
                            </button>

                            {showServices && (
                                <div className="mt-2 flex flex-col gap-3 px-4 animate-slideUp">
                                    {services.map((service, index) => (
                                        <Link
                                            key={index}
                                            href={service.href}
                                            className="block py-2 text-sm border rounded-lg shadow hover:bg-gray-100 text-center"
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link href="/about" className="block hover:text-accent transition border-gray-300 border-b-2 rounded-lg shadow w-full text-center py-2">
                            About
                        </Link>
                        <Link href="/contact" className="block hover:text-accent transition border-gray-300 border-b-2 rounded-lg shadow w-full text-center py-2">
                            Contact
                        </Link>
                    </div>
                </div>
            )}


            <AuthModel
                isOpen={isAuthOpen}
                onClose={() => setIsAuthOpen(false)}
            />
        </nav>
    );
}
