'use client'
import { motion } from 'framer-motion'
import React from 'react'

const RecentUsers = ({ recentUsers }) => {
    return (
        <div>
            <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
                <motion.h2
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="text-xl font-semibold mb-4 text-gray-700"
                >
                    Recent Users
                </motion.h2>

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
                            <motion.tr
                                key={index}
                                whileHover={{ backgroundColor: "#f3f4f6" }}
                                className="border-b border-gray-200"
                            >
                                <td className="p-3">{user.name}</td>
                                <td className="p-3">{user.email}</td>
                                <td className="p-3">{user.role}</td>
                                <td className={`p-3 font-semibold ${user.color}`}>{user.status}</td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecentUsers