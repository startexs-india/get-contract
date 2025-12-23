"use client";

import React, { useState } from "react";
import { Plus, Search } from "lucide-react";
import CircularCard from "./Cards/CircularCard";
import { circulars } from "../../../data/AdminData";
import AddCircularPage from "./subpage/AddCircularPage";

const CircularsPage = () => {

    const [search, setSearch] = useState("");
    const [openAddCircular, setOpenAddCircular] = useState(false);

    const filteredCirculars = circulars.filter(c =>
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.department.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6 w-full">

            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                    Circulars & Notices
                </h2>

                <button
                    onClick={() => setOpenAddCircular(!openAddCircular)}
                    className="flex items-center gap-2 px-4 py-2 
                                   bg-[#2e5f9b] hover:bg-[#084c9d] 
                                   text-white rounded-lg cursor-pointer">
                    <Plus size={18} />
                    Add Circular
                </button>
            </div>

            {/* Search */}
            <div className="mb-6 relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                    type="text"
                    placeholder="Search circulars..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-1 border rounded-lg focus:outline-none"
                />
            </div>

            {/* List */}
            {filteredCirculars.length > 0 ? (
                <div className="flex flex-col gap-3">
                    {filteredCirculars.map(circular => (
                        <CircularCard
                            key={circular._id}
                            circular={circular}
                            onView={(c) => console.log("View:", c)}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-10">
                    No circulars found.
                </p>
            )}

            {
                openAddCircular && (
                    <AddCircularPage
                        isOpen={openAddCircular}
                        onClose={() => setOpenAddCircular(false)}
                        onSubmit={(data) => {
                            console.log("New Circular:", data);
                            // API call here later
                        }}
                    />
                )
            }

        </div>
    );
};

export default CircularsPage;
