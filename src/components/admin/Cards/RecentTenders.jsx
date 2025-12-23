'use client'
import { motion } from 'framer-motion'
import React from 'react'
import TenderCard from './TenderCard'

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

                {/* 🔹 TENDER TABLE */}
                <table className="w-full border-collapse bg-white rounded-sm">
                    <thead>
                        <tr className="text-left border-b-2 border-gray-400">
                            <th className="pl-5">Tender/RFQ ID</th>
                            <th className="p-2">Tender Description</th>
                            <th className="p-2">Reference No.</th>
                            <th className="p-2">Department</th>
                            <th className="p-2">End Date</th>
                            <th className="p-2">Status</th>
                            {/* <th className="p-2">Visiablity</th> */}
                            <th className="pr-5 p-2 text-end">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {recentTenders?.map((tender) => (
                            <TenderCard
                                key={tender._id}
                                tender={tender}
                                onOpenTender={() => setSelectedTenderId(tender._id)}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecentTenders


