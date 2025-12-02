"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import ManageUser from "./ManageUser";
import ManageTender from "./ManageTender";
import Logout from "./Logout";
import Dashboard from "./Dashboard";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import { ArrowBigRightDash, SquareX } from "lucide-react";
import Topbar from "./Topbar";

const DashboardPanel = () => {

    const [activeTab, setActiveTab] = useState("dashboard");
    const [closePanel, setClosePanel] = useState(true);

    const { isLogin } = useAppContext();
    const route = useRouter();

    // redirect when not logged in
    useEffect(() => {
        if (!isLogin) route.push("/admin");
    }, [isLogin, route]);

    // Disable scroll when sidebar is open (mobile only)
    useEffect(() => {
        document.body.style.overflow = closePanel ? "auto" : "hidden";
    }, [closePanel]);

    return (
        <div className="flex bg-gray-100 h-screen overflow-hidden">

            {/* ---------------- MOBILE SCREEN (< md) ---------------- */}
            <div className="md:hidden">

                {/* Toggle Button */}
                <button
                    className="absolute top-4 left-0 z-50 bg-[#084c9d] p-2 rounded-r-md"
                    onClick={() => setClosePanel(!closePanel)}
                >
                    {closePanel ? (
                        <ArrowBigRightDash size={20} color="white" />
                    ) : (
                        <SquareX size={26} color="white" />
                    )}
                </button>

                {/* Slide-in Sidebar */}
                {!closePanel && (
                    <div className="fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-40">
                        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>
                )}
            </div>

            {/* ---------------- TABLET SCREEN (md to xl) ---------------- */}
            <div className="hidden md:flex xl:hidden w-full fixed top-0 z-40">
                <Topbar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* ---------------- DESKTOP SCREEN (xl and above) ---------------- */}
            <div className="hidden xl:flex h-full">
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* ---------------- MAIN CONTENT ---------------- */}
            <div className="flex-1 p-4 overflow-y-auto h-screen 
                md:mt-[60px] xl:mt-0">
                {activeTab === "dashboard" && <Dashboard />}
                {activeTab === "profile" && <Profile />}
                {activeTab === "users" && <ManageUser />}
                {activeTab === "tenders" && <ManageTender />}
                {activeTab === "logout" && <Logout />}
            </div>
        </div>
    );
};

export default DashboardPanel;
