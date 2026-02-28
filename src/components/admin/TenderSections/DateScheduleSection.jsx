"use client";
import React from "react";

export default function DateScheduleSection({ data = {}, editMode, onChange }) {
    if (!data) return null;

    const getFormatted = (obj) => obj?.formatted ?? obj?.raw ?? "—";

    const rows = [
        {
            label: "Bid Submission Start Date",
            key: "bidSubmissionStartDate",
            value: data.bidSubmissionStartDate,
        },
        {
            label: "Bid Submission Due Date",
            key: "bidSubmissionDueDate",
            value: data.bidSubmissionDueDate,
        },
        {
            label: "Bid Open Date",
            key: "bidOpenDate",
            value: data.bidOpenDate,
        },
        {
            label: "Physical Doc Submission End Date",
            key: "physicalDocSubmissionEndDate",
            value: data.physicalDocSubmissionEndDate,
        },
    ];

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">Date Schedule</h2>

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="border px-4 py-2 text-left">Event</th>
                            <th className="border px-4 py-2 text-left">Date & Time</th>
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((row, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                                {/* Label */}
                                <td className="border px-4 py-2 font-medium">
                                    {row.label}
                                </td>

                                {/* Value */}
                                <td className="border px-4 py-2">
                                    {!editMode ? (
                                        getFormatted(row.value)
                                    ) : (
                                        <input
                                            type="datetime-local"
                                            className="border rounded px-2 py-1 w-full"
                                            value={row.value?.raw ?? ""}
                                            onChange={(e) =>
                                                onChange(row.key, {
                                                    ...(row.value || {}),
                                                    raw: e.target.value,
                                                })
                                            }
                                        />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}