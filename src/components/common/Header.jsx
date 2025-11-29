// components/Header.jsx
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserRound } from "lucide-react"; // Optional icon

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Live Tenders', href: '/tenders' },
    { name: 'Tender Results', href: '/tender-results' },
    { name: 'Tender By Category', href: '/tender-category' },
    { name: 'Bid Analysis', href: '/bid-analysis' },
    { name: 'My Bids', href: '/my-bids' },
    { name: 'My Projects', href: '/projects' },
    { name: 'Premium Plans', href: '/premium' },
    { name: 'Help & Support', href: '/support' },
    { name: 'Documentation', href: '/documentation' },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <div className="w-full bg-[#084c9d] text-white shadow-sm border-b top-14 z-40 flex justify-between">

            <div className="hidden md:flex mx-auto px-4 items-center justify-between">
                {/* LEFT - MENU ITEMS */}
                <ul className="flex gap-8 overflow-x-auto whitespace-nowrap py-3 scrollbar-hide">
                    {menuItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`text-sm font-medium transition-all duration-300 pb-2
                  ${pathname === item.href
                                        ? "text-blue-600 border-b-2 border-blue-600"
                                        : " hover:text-blue-600 hover:border-b-2 hover:border-blue-400"}
                `}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}
