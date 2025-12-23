'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loader from "../common/Loader";
import RecentTenders from "./Cards/RecentTenders.jsx";
import RecentUsers from "./Cards/RecentUsers.jsx";
import { callApi } from "@/utils/api.js";
import { Users, FileText, Clock, Star } from "lucide-react";


const Dashboard = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [statsData, setStatsData] = useState({});
    const [latestTenders, setLatestTenders] = useState([]);
    const [latestUsers, setLatestUsers] = useState([]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await callApi("/admin/dashboard-analytics", "GET");
            if (response.success) {
                setData(response.data);
            } else {
                setErrorMessage("Network Error, please try again!");
            }
        } catch (error) {
            setErrorMessage(error?.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (!data) return;
        setStatsData(data?.statsData);
        setLatestTenders(data?.latestTenders);
        setLatestUsers(data?.latestUsers);

        console.log(latestTenders);
    }, [data]);

    const statsCards = [
        {
            title: "Total Users",
            value: statsData.totalUserCount,
            icon: Users,
            bg: "bg-blue-100",
            text: "text-blue-600"
        },
        {
            title: "Total Tenders",
            value: statsData.totalTenderCount,
            icon: FileText,
            bg: "bg-green-100",
            text: "text-green-600"
        },
        {
            title: "Pending Applications",
            value: statsData.pendingApplication,
            icon: Clock,
            bg: "bg-yellow-100",
            text: "text-yellow-600"
        },
        {
            title: "Prime Members",
            value: statsData.premiumUsers,
            icon: Star,
            bg: "bg-purple-100",
            text: "text-purple-600"
        }
    ];


    if (loading) {
        return (
            <div className="w-full">
                <Loader />
            </div>
        );
    }

    if (errorMessage) {
        return (
            <div className="w-full">
                <h2>{errorMessage}</h2>
            </div>
        );
    }

    return (
        <div className="p-6 w-full">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {statsCards.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="p-4 rounded-xl shadow-lg flex flex-col items-center text-center gap-2 bg-white"
                            >
                                {/* ICON */}
                                <div className={`p-2 rounded-full ${item.bg} ${item.text}`}>
                                    <Icon size={28} />
                                </div>

                                {/* VALUE */}
                                <p className="text-2xl font-bold text-gray-800">
                                    {item.value}
                                </p>

                                {/* TITLE */}
                                <h3 className="text-sm opacity-80 text-gray-600">
                                    {item.title}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>

                <RecentTenders recentTenders={latestTenders} />
                <RecentUsers recentUsers={latestUsers} />
            </motion.div >
        </div >
    );
};

export default Dashboard;
