'use client'
import { motion } from 'framer-motion'
import React from 'react'


const RecentTenders = ({ recentTenders }) => {
    return (
        <div>
            <div className="bg-white shadow-md rounded-xl p-6 mb-6 border border-gray-200">
                <motion.h2
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="text-xl font-semibold mb-4 text-gray-700"
                >
                    Recent Tenders
                </motion.h2>

                <ul className="space-y-4">
                    {recentTenders.map((tender, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ scale: 1.01 }}
                            className="flex justify-between border-b pb-3 border-gray-200"
                        >
                            <span className="text-gray-700">{tender.name}</span>
                            <span className={`font-semibold ${tender.color}`}>{tender.status}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RecentTenders