"use client";

import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import ApplicationCard from "./Cards/ApplicationCard";
import SingleApplicationModal from "./subpage/SingleApplicationPage";
import { dummyApplications } from "../../../data/AdminData";



export default function PendingApplications() {
    const [applications, setApplications] = useState(dummyApplications);
    const [search, setSearch] = useState("");
    const [openModal, setOpenModal] = useState(null);

    const filtered = applications.filter((app) =>
        app.bidderName.toLowerCase().includes(search.toLowerCase()) ||
        app.tenderId.toLowerCase().includes(search.toLowerCase()) ||
        app.tenderTitle.toLowerCase().includes(search.toLowerCase())
    );


    // Disable background scroll when modal is open
    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = "hidden";   // Disable scroll
        } else {
            document.body.style.overflow = "auto";     // Enable scroll
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openModal]);


    const updateStatus = (id, status) => {
        setApplications((prev) =>
            prev.map((app) =>
                app.id === id ? { ...app, status } : app
            )
        );
    };

    return (
        <div className="p-4">

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Pending Applications</h1>

                {/* Search */}
                <div className="flex items-center gap-2 border px-3 py-2 rounded-lg bg-white shadow-sm">
                    <Search size={18} className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search applications..."
                        className="outline-none"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            {/* Table */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="w-full border-collapse">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            <th className="p-3 text-left">Application ID</th>
                            <th className="p-3 text-left">Bidder Name</th>
                            <th className="p-3 text-left">Tender ID</th>
                            <th className="p-3 text-left">Tender Title</th>
                            <th className="p-3 text-left">Amount</th>
                            <th className="p-3 text-left">Applied On</th>
                            <th className="p-3 text-right">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filtered.map((app) => (
                            <ApplicationCard
                                key={app.id}
                                app={app}
                                onView={setOpenModal}
                                onApprove={() => updateStatus(app.id, "APPROVED")}
                                onReject={() => updateStatus(app.id, "REJECTED")}
                            />
                        ))}

                        {filtered.length === 0 && (
                            <tr>
                                <td colSpan="7" className="text-center p-4 text-gray-500">
                                    No pending applications found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {openModal && (
                <SingleApplicationModal
                    app={openModal}
                    onClose={() => setOpenModal(null)}
                    onApprove={(id) => updateStatus(id, "APPROVED")}
                    onReject={(id) => updateStatus(id, "REJECTED")}
                />

            )}
        </div>
    );
}
