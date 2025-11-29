'use client'
import React, { useEffect, useState } from "react";
import { statsDataStatic, recentTendersStatic, recentUsersStatic } from "../../../data/AdminData.js";
import Loader from "../common/Loader";


const Dashboard = () => {

    const [loading, setLoading] = useState(false);
    const [statsData, setStatsData] = useState(statsDataStatic);
    const [recentTenders, setRecentTenders] = useState(recentTendersStatic);
    const [recentUsers, setRecentUsers] = useState(recentUsersStatic);

    return (
        <div className="p-6 w-full">
            {
                loading ?
                    <div>
                        <Loader />
                    </div>
                    :
                    <div>
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                            {statsData.map((item, index) => (
                                <div key={index} className="p-6 bg-white rounded-xl shadow-md border border-gray-300">
                                    <h3 className="text-gray-600">{item.title}</h3>
                                    <p className="text-3xl font-bold mt-2">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Recent Tenders */}
                        <div className="bg-white shadow-md border border-gray-300 rounded-xl p-6 mb-6">
                            <h2 className="text-xl font-semibold mb-4">Recent Tenders</h2>

                            <ul className="space-y-4">
                                {recentTenders.map((tender, index) => (
                                    <li key={index} className="flex justify-between border-b pb-3 border-gray-300">
                                        <span className="text-gray-700">{tender.name}</span>
                                        <span className={tender.color}>{tender.status}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Recent Users */}
                        <div className="bg-white shadow-md border border-gray-300 rounded-xl p-6">
                            <h2 className="text-xl font-semibold mb-4">Recent Users</h2>

                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-3 text-left">Name</th>
                                        <th className="p-3 text-left">Email</th>
                                        <th className="p-3 text-left">Role</th>
                                        <th className="p-3 text-left">Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {recentUsers.map((user, index) => (
                                        <tr key={index} className="border-b border-gray-300">
                                            <td className="p-3">{user.name}</td>
                                            <td className="p-3">{user.email}</td>
                                            <td className="p-3">{user.role}</td>
                                            <td className={`p-3 ${user.color}`}>{user.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Dashboard;
