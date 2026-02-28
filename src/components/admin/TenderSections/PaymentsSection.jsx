"use client";
import React from "react";

export default function PaymentsSection({ data = [], editMode, onChange }) {
    if (!Array.isArray(data) || data.length === 0) return null;

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">Payments</h2>

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="border px-4 py-2 text-left">Payment Type</th>
                            <th className="border px-4 py-2 text-right">Amount</th>
                            <th className="border px-4 py-2 text-center">Mode</th>
                            <th className="border px-4 py-2 text-center">Currency</th>
                            <th className="border px-4 py-2 text-center">
                                Exemption Allowed
                            </th>
                            <th className="border px-4 py-2 text-left">
                                Exemption Reason
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((payment, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                                {/* Payment Type */}
                                <td className="border px-4 py-2">
                                    {!editMode ? (
                                        payment.paymentType || "—"
                                    ) : (
                                        <input
                                            className="border rounded px-2 py-1 w-full"
                                            value={payment.paymentType ?? ""}
                                            onChange={(e) =>
                                                onChange(idx, "paymentType", e.target.value)
                                            }
                                        />
                                    )}
                                </td>

                                {/* Amount */}
                                <td className="border px-4 py-2 text-right">
                                    {!editMode ? (
                                        payment.amount ?? "—"
                                    ) : (
                                        <input
                                            type="number"
                                            className="border rounded px-2 py-1 w-full text-right"
                                            value={payment.amount ?? ""}
                                            onChange={(e) =>
                                                onChange(idx, "amount", e.target.value)
                                            }
                                        />
                                    )}
                                </td>

                                {/* Payment Mode */}
                                <td className="border px-4 py-2 text-center">
                                    {!editMode ? (
                                        payment.paymentMode || "—"
                                    ) : (
                                        <input
                                            className="border rounded px-2 py-1 w-full"
                                            value={payment.paymentMode ?? ""}
                                            onChange={(e) =>
                                                onChange(idx, "paymentMode", e.target.value)
                                            }
                                        />
                                    )}
                                </td>

                                {/* Currency */}
                                <td className="border px-4 py-2 text-center">
                                    {!editMode ? (
                                        payment.paymentCurrency || "—"
                                    ) : (
                                        <input
                                            className="border rounded px-2 py-1 w-full"
                                            value={payment.paymentCurrency ?? ""}
                                            onChange={(e) =>
                                                onChange(idx, "paymentCurrency", e.target.value)
                                            }
                                        />
                                    )}
                                </td>

                                {/* Exemption Allowed */}
                                <td className="border px-4 py-2 text-center">
                                    {!editMode ? (
                                        payment.exemptionAllowed === "Y" ? "Yes" : "No"
                                    ) : (
                                        <select
                                            className="border rounded px-2 py-1 w-full"
                                            value={payment.exemptionAllowed ?? "N"}
                                            onChange={(e) =>
                                                onChange(idx, "exemptionAllowed", e.target.value)
                                            }
                                        >
                                            <option value="Y">Yes</option>
                                            <option value="N">No</option>
                                        </select>
                                    )}
                                </td>

                                {/* Exemption Reason */}
                                <td className="border px-4 py-2">
                                    {!editMode ? (
                                        payment.exemptionReason || "—"
                                    ) : (
                                        <input
                                            className="border rounded px-2 py-1 w-full"
                                            value={payment.exemptionReason ?? ""}
                                            onChange={(e) =>
                                                onChange(idx, "exemptionReason", e.target.value)
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