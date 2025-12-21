"use client";
import React from "react";

export default function DateScheduleSection({ data = {}, editMode, onChange }) {
    const {
        bidSubmissionStartDate,
        bidSubmissionDueDate,
        bidOpenDate,
        physicalDocSubmissionEndDate,
    } = data || {};

    const getFormatted = (obj) => obj?.formatted ?? obj?.raw ?? "N/A";

    const renderField = (label, key, dateObj) => (
        <div className="border p-3 flex gap-4">
            <div className="text-sm font-semibold text-gray-600 min-w-[200px]">
                {label}
                <span className="text-black font-semibold text-lg ml-1">:</span>
            </div>

            {!editMode ? (
                <div className="text-gray-800">{getFormatted(dateObj)}</div>
            ) : (
                <input
                    type="datetime-local"
                    className="border-2 border-gray-300 rounded px-2 py-1 w-full"
                    value={dateObj?.raw ?? ""}
                    onChange={(e) =>
                        onChange(key, { ...(dateObj || {}), raw: e.target.value })
                    }
                />
            )}
        </div>
    );

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">Date Schedule</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-300">
                {renderField(
                    "Bid Submission Start Date",
                    "bidSubmissionStartDate",
                    bidSubmissionStartDate
                )}
                {renderField(
                    "Bid Submission Due Date",
                    "bidSubmissionDueDate",
                    bidSubmissionDueDate
                )}
                {renderField("Bid Open Date", "bidOpenDate", bidOpenDate)}
                {renderField(
                    "Physical Doc Submission End Date",
                    "physicalDocSubmissionEndDate",
                    physicalDocSubmissionEndDate
                )}
            </div>
        </div>
    );
}
