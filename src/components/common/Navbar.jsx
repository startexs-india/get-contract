'use client'

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-white text-black shadow-card px-5 md:px-10 py-3 flex justify-between items-center">

            {/* Logo */}
            <Link href="/" className="text-2xl font-heading font-semibold hover:text-accent transition">
                Contract Explorer
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8 text-sm font-medium">
                <Link href="/" className="hover:text-accent transition">Home</Link>
                <Link href="/explore" className="hover:text-accent transition">Explore</Link>
                <Link href="/about" className="hover:text-accent transition">About</Link>
                <Link href="/contact" className="hover:text-accent transition">Contact</Link>
            </div>

            <div className="flex items-center gap-3">
                {/* Login Button */}
                <button className="text-primary font-medium rounded-xl px-4 py-2 shadow-soft hover:bg-gray-400 transition">
                    Login
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="absolute top-16 right-5 bg-primary/90 backdrop-blur-md shadow-card px-6 py-6 rounded-2xl space-y-4 text-sm md:hidden animate-slideUp">
                    <Link href="/" className="block hover:text-accent transition">Home</Link>
                    <Link href="/explore" className="block hover:text-accent transition">Explore</Link>
                    <Link href="/about" className="block hover:text-accent transition">About</Link>
                    <Link href="/contact" className="block hover:text-accent transition">Contact</Link>
                </div>
            )}

        </nav>
    );
}
