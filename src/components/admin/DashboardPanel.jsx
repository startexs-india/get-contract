"use client";
import React, { useEffect, useRef, useState } from "react";
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
import PendingApplication from "./PendingApplication";

const DashboardPanel = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [closePanel, setClosePanel] = useState(true);

    const sidebarRef = useRef(null);

    const { isLogin } = useAppContext();
    const route = useRouter();

    // Redirect if not logged in
    useEffect(() => {
        if (!isLogin) route.push("/admin");
    }, [isLogin, route]);

    // Disable body scroll when sidebar is open
    useEffect(() => {
        document.body.style.overflow = closePanel ? "auto" : "hidden";
    }, [closePanel]);

    // Close sidebar when clicking outside (mobile)
    useEffect(() => {
        if (closePanel) return;

        const handleClickOutside = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setClosePanel(true);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [closePanel]);

    // Close sidebar when tab selected
    const handleTabSelect = (tab) => {
        setActiveTab(tab);
        setClosePanel(true);
    };

    return (
        <div className="flex bg-gray-100 h-screen overflow-hidden">

            {/* ---------- DESKTOP SIDEBAR (xl) ---------- */}
            <div className="hidden xl:flex h-full">
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* ---------- RIGHT SIDE (Content + Tablet Topbar) ---------- */}
            <div className="flex-1 flex flex-col overflow-hidden">

                {/* TABLET TOPBAR (md–xl) */}
                <div className="flex xl:hidden sticky top-0 z-40 bg-white shadow-sm">
                    <Topbar activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>



                {/* MAIN CONTENT */}
                <div className="flex-1 p-4 overflow-y-auto h-screen">
                    {activeTab === "dashboard" && <Dashboard />}
                    {activeTab === "profile" && <Profile />}
                    {activeTab === "users" && <ManageUser />}
                    {activeTab === "tenders" && <ManageTender />}
                    {activeTab === "pendingApplication" && <PendingApplication />}
                    {activeTab === "logout" && <Logout />}
                </div>

            </div>
        </div>
    );
};

export default DashboardPanel;
