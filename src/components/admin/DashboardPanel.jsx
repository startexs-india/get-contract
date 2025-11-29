'use client'
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import ManageUser from "./ManageUser";
import ManageTender from "./ManageTender";
import Logout from "./Logout";
import Dashboard from "./Dashboard";
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';


const DashboardPanel = () => {

    const [activeTab, setActiveTab] = useState("dashboard");
    const [closePanel, setClosePanel] = useState(true);

    const { isLogin, user } = useAppContext();
    const route = useRouter();

    useEffect(() => {
        if (!isLogin) {
            route.push("/admin");
        }
    });

    return (
        <div className="flex h-screen bg-gray-50">

            <div className="hidden md:flex">
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="absolute h-full">
                <div className="relative flex md:hidden flex-col">
                    <button className="absolute w-full text-right px-3 text-xl" onClick={() => setClosePanel(!closePanel)}>
                        X
                    </button>
                    {closePanel && <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />}
                </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto">
                {activeTab === "dashboard" && (
                    <Dashboard />
                )}

                {activeTab === "profile" && (
                    <Profile />
                )}

                {activeTab === "users" && (
                    <ManageUser />
                )}

                {activeTab === "tenders" && (
                    <ManageTender />
                )}

                {activeTab === "logout" && (
                    <Logout />
                )}

            </div>

        </div>
    );
};

export default DashboardPanel;
