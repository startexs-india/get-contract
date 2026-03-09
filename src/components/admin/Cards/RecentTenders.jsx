'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import TenderCard from './TenderCard'
import SingleTenderViewPage from '../subpage/SingleTenderPage'

const RecentTenders = ({ recentTenders }) => {

    const [selectedTenderId, setSelectedTenderId] = useState(null);

    const startResizing = (index) => (e) => {
        const startX = e.clientX;
        const col = document.querySelectorAll("col")[index];
        const startWidth = col.offsetWidth;

        const onMouseMove = (e) => {
            const newWidth = startWidth + (e.clientX - startX);
            col.style.width = `${newWidth}px`;
        };

        const onMouseUp = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    };

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

                {/* 🔹 TENDER TABLE FOR DEAKTOP SCREEN */}
                <div className="overflow-x-auto">
                    <table className=" w-full table-fixed border-collapse bg-white rounded-sm">
                        <colgroup>
                            <col style={{ width: "150px" }} />
                            <col style={{ width: "300px" }} />
                            <col style={{ width: "120px" }} />
                            <col style={{ width: "180px" }} />
                            <col style={{ width: "220px" }} />
                            <col style={{ width: "160px" }} />
                            <col style={{ width: "90px" }} />
                            <col style={{ width: "50px" }} />
                        </colgroup>
                        <thead>
                            <tr className="text-left border-b-2 border-gray-200 text-sm lg:text-[16px]">
                                <th className="pl-5 relative border-r-2 border-gray-400">Tender/RFQ ID
                                    <div
                                        onMouseDown={startResizing(0)}
                                        className="absolute top-0 right-0 h-full w-[5px] cursor-col-resize hover:bg-blue-400"
                                    /></th>
                                <th className="p-2 relative border-r-2 border-gray-300 ">Tender Description
                                    <div
                                        onMouseDown={startResizing(1)}
                                        className="absolute top-0 right-0 h-full w-[5px] cursor-col-resize hover:bg-blue-400"
                                    /></th>
                                <th className="p-2 relative border-r-2 border-gray-300">By Amount
                                    <div
                                        onMouseDown={startResizing(2)}
                                        className="absolute top-0 right-0 h-full w-[5px] cursor-col-resize hover:bg-blue-400"
                                    />
                                </th>
                                <th className="p-2 relative border-r-2 border-gray-300">Reference No.
                                    <div
                                        onMouseDown={startResizing(3)}
                                        className="absolute top-0 right-0 h-full w-[5px] cursor-col-resize hover:bg-blue-400"
                                    />
                                </th>
                                <th className="p-2 relative border-r-2 border-gray-300">Department
                                    <div
                                        onMouseDown={startResizing(4)}
                                        className="absolute top-0 right-0 h-full w-[5px] cursor-col-resize hover:bg-blue-400"
                                    />
                                </th>
                                <th className="p-2 relative border-r-2 border-gray-300">End Date
                                    <div
                                        onMouseDown={startResizing(5)}
                                        className="absolute top-0 right-0 h-full w-[5px] cursor-col-resize hover:bg-blue-400"
                                    />
                                </th>
                                <th className="p-2 relative border-r-2 border-gray-300">Status
                                    <div
                                        onMouseDown={startResizing(6)}
                                        className="absolute top-0 right-0 h-full w-[5px] cursor-col-resize hover:bg-blue-400"
                                    />
                                </th>
                                {/* <th className="p-2">Visiablity</th> */}
                                <th className="pr-5 p-2 relative">Action
                                    <div
                                        onMouseDown={startResizing(7)}
                                        className="absolute top-0 right-0 h-full w-[5px] cursor-col-resize hover:bg-blue-400"
                                    />
                                </th>
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


                {/* 🔹 SINGLE TENDER VIEW / EDIT MODAL */}
                {selectedTenderId && (
                    <SingleTenderViewPage
                        tender_id={selectedTenderId}
                        onClose={() => setSelectedTenderId(null)}
                    />
                )}
            </div>
        </div>
    )
}

export default RecentTenders


