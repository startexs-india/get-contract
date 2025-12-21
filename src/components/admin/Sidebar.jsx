"use client";

import {
    Home,
    User,
    Users,
    FileSpreadsheet,
    LogOut,
} from "lucide-react";

import React from "react";

const Sidebar = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: "dashboard", label: "Dashboard", icon: <Home size={20} /> },
        { id: "profile", label: "Profile", icon: <User size={20} /> },
        { id: "users", label: "Manage Users", icon: <Users size={20} /> },
        { id: "tenders", label: "Manage Tenders", icon: <FileSpreadsheet size={20} /> },
        { id: "pendingApplication", label: "Pending Application", icon: <FileSpreadsheet size={20} /> },
        { id: "logout", label: "Logout", icon: <LogOut size={20} /> },
    ];

    return (
        <div className="w-60 bg-white shadow-lg py-5 flex flex-col">

            <h2 className="text-2xl font-heading font-semibold mb-8 px-4">Admin Panel</h2>

            {/* Navigation Tabs */}
            <nav className="flex flex-col space-y-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-4 text-[16px] px-4 py-3 rounded-r-lg text-left transition font-medium
                            ${activeTab === tab.id
                                ? "bg-[#084c9d] text-white shadow"
                                : "text-gray-700 hover:bg-blue-300"
                            }`}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </nav>

        </div>
    );
};

export default Sidebar;
