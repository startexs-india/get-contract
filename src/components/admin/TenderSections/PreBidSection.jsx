"use client";
import React from "react";

export default function PreBidSection({ data = {}, editMode, onChange }) {
    const {
        discussionType,
        meetingStartDate,
        meetingEndDate,
        venue,
        remarks,
    } = data || {};

    const getFormatted = (obj) => obj?.formatted ?? obj?.raw ?? "N/A";

    const renderInput = (label, key, value, isTextarea = false) => (
        <div className="border p-3 flex gap-4">
            <div className="text-sm font-semibold text-gray-600 min-w-[180px]">
                {label}
                <span className="text-black font-semibold text-lg ml-1">:</span>
            </div>

            {!editMode ? (
                <div className="text-gray-800">{value ?? "N/A"}</div>
            ) : isTextarea ? (
                <textarea
                    className="border-2 border-gray-300 rounded px-2 py-1 w-full min-h-[70px]"
                    value={value ?? ""}
                    onChange={(e) => onChange(key, e.target.value)}
                />
            ) : (
                <input
                    className="border-2 border-gray-300 rounded px-2 py-1 w-full"
                    value={value ?? ""}
                    onChange={(e) => onChange(key, e.target.value)}
                />
            )}
        </div>
    );

    const renderDate = (label, key, obj) => (
        <div className="border p-3 flex gap-4">
            <div className="text-sm font-semibold text-gray-600 min-w-[180px]">
                {label}
                <span className="text-black font-semibold text-lg ml-1">:</span>
            </div>

            {!editMode ? (
                <div className="text-gray-800">{getFormatted(obj)}</div>
            ) : (
                <input
                    type="datetime-local"
                    className="border-2 border-gray-300 rounded px-2 py-1 w-full"
                    value={obj?.raw ?? ""}
                    onChange={(e) =>
                        onChange(key, { ...(obj || {}), raw: e.target.value })
                    }
                />
            )}
        </div>
    );

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">Pre-Bid Discussion</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-300">
                {renderInput("Discussion Type", "discussionType", discussionType)}
                {renderInput("Venue", "venue", venue)}
                {renderDate("Meeting Start Date", "meetingStartDate", meetingStartDate)}
                {renderDate("Meeting End Date", "meetingEndDate", meetingEndDate)}
            </div>

            <div className="border border-t-0 border-gray-300">
                {renderInput("Remarks", "remarks", remarks, true)}
            </div>
        </div>
    );
}
