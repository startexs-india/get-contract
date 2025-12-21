"use client";

import { X, CheckCircle, XCircle, FileText } from "lucide-react";
import React, { useEffect } from "react";

export default function SingleApplicationModal({ app, onClose, onApprove, onReject }) {

    // Close modal when clicking outside
    useEffect(() => {
        const handler = (e) => {
            if (e.target.id === "modal-overlay") onClose();
        };
        window.addEventListener("mousedown", handler);
        return () => window.removeEventListener("mousedown", handler);
    }, []);

    // Extract applicant contact details (dummy if not provided)
    const applicantDetails = {
        email: app.email || "not_provided@example.com",
        phone: app.phone || "+91 9876543210",
        company: app.company || "N/A",
        address: app.address || "N/A",
    };

    // Documents array (if user submitted documents)
    const documents = app.documents || [];

    return (
        <div
            id="modal-overlay"
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 overflow-auto"
        >
            <div className="bg-white p-6 rounded-md shadow-lg w-[95%] md:w-[75%] lg:w-[55%] max-h-[95%] overflow-auto border-4 border-gray-400">

                {/* HEADER */}
                <div className="flex justify-between items-center mb-4 bg-[#084c9d] px-2 text-white rounded-sm">
                    <h2 className="text-2xl font-semibold">Application Details</h2>
                    <button className="p-2" onClick={onClose}>
                        <X size={22} />
                    </button>
                </div>

                {/* APPLICANT CONTACT DETAILS */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Applicant Contact Details</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg border">
                        {Object.entries(applicantDetails).map(([key, val]) => (
                            <div key={key}>
                                <label className="text-sm font-semibold text-gray-500">
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </label>
                                <div className="w-full border p-2 rounded mt-1 bg-white">
                                    {val}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* UPLOADED DOCUMENTS */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Uploaded Documents</h3>

                    {documents.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {documents.map((doc, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between border p-3 rounded-lg bg-gray-50"
                                >
                                    <div className="flex items-center gap-3">
                                        <FileText size={22} className="text-blue-600" />
                                        <p className="text-sm font-medium">{doc.name}</p>
                                    </div>

                                    <a
                                        href={doc.url}
                                        target="_blank"
                                        className="text-blue-600 text-sm underline hover:text-blue-800"
                                    >
                                        View
                                    </a>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 italic">No documents uploaded.</p>
                    )}
                </div>

                {/* APPLICATION FIELDS (2 COLUMN LAYOUT) */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Application Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(app).map(([key, val]) => {
                            if (["email", "phone", "company", "address", "documents"].includes(key))
                                return null;

                            return (
                                <div key={key}>
                                    <label className="text-sm font-semibold text-gray-500">
                                        {key.charAt(0).toUpperCase() + key.slice(1)}
                                    </label>
                                    <div className="w-full border p-2 rounded mt-1 bg-gray-100">
                                        {val}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex justify-between mt-8">

                    <div className="flex gap-3">
                        {/* Approve */}
                        <button
                            onClick={() => onApprove(app.id)}
                            className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
                        >
                            <CheckCircle size={20} />
                            Approve
                        </button>

                        {/* Reject */}
                        <button
                            onClick={() => onReject(app.id)}
                            className="flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
                        >
                            <XCircle size={20} />
                            Reject
                        </button>
                    </div>

                    {/* Close */}
                    <button
                        className="bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-700"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>

            </div>
        </div>
    );
}
