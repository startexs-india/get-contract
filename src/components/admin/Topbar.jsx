"use client";

import {
    Home,
    User,
    Users,
    FileSpreadsheet,
    LogOut,
} from "lucide-react";

import React from "react";

const Topbar = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: "dashboard", label: "Dashboard", icon: <Home size={20} /> },
        { id: "profile", label: "Profile", icon: <User size={20} /> },
        { id: "users", label: "Users", icon: <Users size={20} /> },
        { id: "tenders", label: "Tenders", icon: <FileSpreadsheet size={20} /> },
        { id: "logout", label: "Logout", icon: <LogOut size={20} /> },
    ];

    return (
        <div className="w-full bg-white shadow-md py-3 px-3 flex gap-3 overflow-x-auto 
            lg:hidden sticky top-0 z-50">

            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col items-center justify-center px-4 py-2
                        min-w-[80px] rounded-lg transition
                        ${activeTab === tab.id
                            ? "bg-[#084c9d] text-white shadow"
                            : "text-gray-700 hover:bg-blue-200"
                        }`}
                >
                    {tab.icon}
                    <span className="text-[12px] mt-1 font-medium">{tab.label}</span>
                </button>
            ))}
        </div>
    );
};

export default Topbar;
