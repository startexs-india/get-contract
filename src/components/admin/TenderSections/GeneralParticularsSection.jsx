"use client";
import React from "react";

export default function GeneralParticularsSection({ data = [], editMode, onChange }) {
    if (!Array.isArray(data) || data.length === 0) return null;

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">General Particulars</h2>

            {data.map((item, idx) => (
                <div
                    key={idx}
                    className="border border-gray-300 rounded mb-3 grid grid-cols-1 md:grid-cols-2"
                >
                    {/* Label */}
                    <div className="border p-3 flex gap-4">
                        <div className="text-sm font-semibold text-gray-600 min-w-[120px]">
                            LABEL
                            <span className="text-black font-semibold text-lg ml-1">:</span>
                        </div>

                        {!editMode ? (
                            <div className="text-gray-800">{item.label ?? "N/A"}</div>
                        ) : (
                            <input
                                className="border-2 border-gray-300 rounded px-2 py-1 w-full"
                                value={item.label ?? ""}
                                onChange={(e) =>
                                    onChange(idx, "label", e.target.value)
                                }
                            />
                        )}
                    </div>

                    {/* Value */}
                    <div className="border p-3 flex gap-4">
                        <div className="text-sm font-semibold text-gray-600 min-w-[120px]">
                            VALUE
                            <span className="text-black font-semibold text-lg ml-1">:</span>
                        </div>

                        {!editMode ? (
                            <div className="text-gray-800">{item.value ?? "N/A"}</div>
                        ) : (
                            <input
                                className="border-2 border-gray-300 rounded px-2 py-1 w-full"
                                value={item.value ?? ""}
                                onChange={(e) =>
                                    onChange(idx, "value", e.target.value)
                                }
                            />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
