"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, Upload } from "lucide-react";

export default function AddCircularPage({ isOpen, onClose, onSubmit }) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        department: "",
        issueDate: "",
        status: "active",
        file: null
    });

    const modalRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        // Disable background scroll
        document.body.style.overflow = "hidden";

        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen, onClose]);


    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setForm(prev => ({ ...prev, file: e.target.files[0] }));
    };

    const handleSubmit = () => {
        if (!form.title || !form.issueDate || !form.file) {
            alert("Title, Issue Date and Document are required");
            return;
        }

        onSubmit(form);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

            {/* Modal */}
            <div ref={modalRef}
                className="bg-white  w-[600px] rounded-2xl shadow-xl p-6 relative">

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <X size={20} />
                </button>

                {/* Header */}
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Add New Circular
                </h2>

                {/* Form */}
                <div className="space-y-4">

                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                            placeholder="Enter circular title"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                            placeholder="Brief description"
                        />
                    </div>

                    {/* Issue Date */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Issue Date
                        </label>
                        <input
                            type="date"
                            name="issueDate"
                            value={form.issueDate}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                        />
                    </div>

                    {/* Status */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Status
                        </label>
                        <select
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                        >
                            <option value="active">Active</option>
                            <option value="archived">Archived</option>
                        </select>
                    </div>

                    {/* File Upload */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Upload Document (PDF)
                        </label>
                        <label className="flex items-center gap-2 px-4 py-2 
                                          border-2 border-dashed rounded-lg cursor-pointer 
                                          hover:bg-gray-50">
                            <Upload size={18} />
                            <span className="text-sm text-gray-600">
                                {form.file ? form.file.name : "Choose file"}
                            </span>
                            <input
                                type="file"
                                accept=".pdf"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </label>
                    </div>

                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 mt-6">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 rounded-lg bg-[#2e5f9b] hover:bg-[#084c9d] text-white"
                    >
                        Save Circular
                    </button>
                </div>

            </div>

        </div>
    );
}
