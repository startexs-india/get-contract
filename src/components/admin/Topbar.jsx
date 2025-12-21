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
        { id: "pendingApplication", label: "PendingApplication", icon: <FileSpreadsheet size={20} /> },
        { id: "logout", label: "Logout", icon: <LogOut size={20} /> },
    ];

    return (
        <div className="w-full bg-white  shadow-md py-1 md:py-2 px-3 flex gap-3 overflow-x-auto 
            z-50 sticky top-0">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex  items-center justify-around px-4 py-2
                        w-full rounded-lg transition
                        ${activeTab === tab.id
                            ? " bg-[#084c9d] text-white scale-105  shadow-sm"
                            : "hover:bg-blue-200 text-black"
                        }`}
                >
                    <div className="flex flex-col sm:flex-row sm:gap-2 items-center justify-between md:justify-around">
                        {tab.icon}
                        <span className=" text-[8px] sm:text-[12px] md:text-[14px] font-medium">{tab.label}</span>
                    </div>
                </button>
            ))}
        </div>
    );
};

export default Topbar;
