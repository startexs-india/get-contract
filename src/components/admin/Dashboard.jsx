'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { statsDataStatic, recentTendersStatic, recentUsersStatic } from "../../../data/AdminData.js";
import Loader from "../common/Loader";
import RecentTenders from "./Cards/RecentTenders.jsx";
import RecentUsers from "./Cards/RecentUsers.jsx";

const Dashboard = () => {
    const [loading, setLoading] = useState(false);
    const [statsData, setStatsData] = useState(statsDataStatic);
    const [recentTenders, setRecentTenders] = useState(recentTendersStatic);
    const [recentUsers, setRecentUsers] = useState(recentUsersStatic);

    return (
        <div className="p-6 w-full">
            {loading ? (
                <Loader />
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        {statsData.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="p-6 text-black rounded-xl shadow-lg"
                            >
                                <h3 className="text-sm opacity-90">{item.title}</h3>
                                <p className="text-3xl font-bold mt-2">{item.value}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Recent Tenders */}
                    <RecentTenders recentTenders={recentTenders} />

                    {/* Recent Users */}
                    <RecentUsers recentUsers={recentUsers} />

                </motion.div>
            )}
        </div>
    );
};

export default Dashboard;
