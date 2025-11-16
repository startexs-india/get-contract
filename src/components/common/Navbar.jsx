'use client'

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="relative w-full bg-gray-900 text-white shadow-md flex justify-between items-center px-5 md:px-10 py-2">

            {/* Logo */}
            <Link href="/" className="text-2xl font-semibold">
                Contract Explorer
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8 text-sm">
                <Link href="/" className="hover:text-gray-300">Home</Link>
                <Link href="/explore" className="hover:text-gray-300">Explore</Link>
                <Link href="/about" className="hover:text-gray-300">About</Link>
                <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            </div>

            <div className="flex gap-3">
                {/* Login Button */}
                <div>
                    <button className="border-2 border-black rounded-lg px-3 py-1 cursor-pointer">
                        Login
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setOpen(!open)}
                >
                    <span className="text-xl">☰</span>
                </button>

            </div>

            {/* Mobile Menu */}
            <div className="absolute right-0 top-13 h-screen">
                {open && (
                    <div className="md:hidden bg-gray-800 px-4 py-4 space-y-4 text-sm">
                        <Link href="/" className="block hover:text-gray-300">Home</Link>
                        <Link href="/explore" className="block hover:text-gray-300">Explore</Link>
                        <Link href="/about" className="block hover:text-gray-300">About</Link>
                        <Link href="/contact" className="block hover:text-gray-300">Contact</Link>
                    </div>
                )}
            </div>

        </nav>
    );
}
