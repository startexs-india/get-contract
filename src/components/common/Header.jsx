"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const headerLinks = [
    { name: "Home", href: "/" },

    {
        name: "Tenders",
        dropdown: [
            { name: "Live Tenders", href: "/tenders" },
            { name: "Tender Results", href: "/tender-results" },
            { name: "Tender By Category", href: "/tender-category" },
        ],
    },

    { name: "Bid Analysis", href: "/bid-analysis" },
    { name: "My Bids", href: "/my-bids" },
    { name: "My Projects", href: "/projects" },
    { name: "Premium Plans", href: "/premium" },
    { name: "Help & Support", href: "/support" },
    { name: "Documentation", href: "/documentation" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
];

export default function Header() {
    const pathname = usePathname();
    const [activeDropdown, setActiveDropdown] = useState(null);

    return (
        <div className="w-full bg-[#084c9d] text-white shadow-sm border-b z-40 flex items-center justify-center py-3 relative">

            <div className="flex gap-8 items-center">
                {headerLinks.map((item, index) => (
                    <div
                        key={index}
                        className="relative"
                        onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        {/* Main Link */}
                        {!item.dropdown ? (
                            <Link
                                href={item.href}
                                className={`text-sm font-medium transition-all duration-300 
                                    ${pathname === item.href
                                        ? "text-blue-300 border-b-2 border-blue-300"
                                        : "hover:text-blue-300"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ) : (
                            <button
                                className={`flex items-center gap-1 text-sm font-medium pb-2 transition-all duration-300 
                                    ${pathname.includes("/tender")
                                        ? "text-blue-300 border-b-2 border-blue-300"
                                        : "hover:text-blue-300"
                                    }`}
                            >
                                {item.name} <ChevronDown size={14} />
                            </button>
                        )}

                        {/* Dropdown */}
                        {item.dropdown && activeDropdown === index && (
                            <div
                                className="absolute top-full left-0 mt-2 bg-white text-black w-52 rounded-md shadow-lg py-2 z-50"
                                onMouseEnter={() => setActiveDropdown(index)}   // keep open
                                onMouseLeave={() => setActiveDropdown(null)}    // close only after full leave
                            >
                                {item.dropdown.map((sub, idx) => (
                                    <div key={idx} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        <Link href={sub.href}>{sub.name}</Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
