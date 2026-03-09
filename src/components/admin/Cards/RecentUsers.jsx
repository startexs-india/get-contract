'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import UserCard from './UserCard'
import SingleUserPage from '../subpage/SingleUserPage'

const RecentUsers = ({ recentUsers }) => {

    const [viewUserModel, setViewUserModel] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);

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

                {/* TABLE */}
                <div className="bg-white shadow-md rounded-lg overflow-x-auto ">
                    <table className="w-full">
                        <thead className="bg-gray-200 text-gray-700 font-semibold">
                            <tr>
                                <th className="p-3 text-left">User</th>
                                <th className="p-3 text-left">Email</th>
                                {/* <th className="p-3 text-left">Subscription Plan</th> */}
                                <th className="p-3 text-left">Joined Date</th>
                                <th className="p-3 text-left">End Date</th>
                                <th className="p-3 text-left">Status</th>
                                <th className="p-3 text-right">Actions</th>
                            </tr>
                        </thead>

                        {recentUsers.length > 0 ? (
                            <tbody>
                                {recentUsers.map((user) => (
                                    <UserCard
                                        key={user._id}
                                        user={user}
                                        setSelectedUserId={setSelectedUserId}
                                        setViewUserModel={setViewUserModel}
                                    />
                                ))}
                            </tbody>
                        ) : (
                            <tbody>
                                <tr>
                                    <td colSpan={5} className="text-center py-6 text-gray-500">
                                        No users found
                                    </td>
                                </tr>
                            </tbody>
                        )}

                    </table>
                </div>

                {/* MODAL */}
                {viewUserModel && selectedUserId && (
                    <SingleUserPage
                        userId={selectedUserId}
                        setViewUserModel={setViewUserModel}
                    />
                )}

            </div>
        </div>
    )
}

export default RecentUsers