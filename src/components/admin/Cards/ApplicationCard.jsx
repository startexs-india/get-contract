"use client";

import { HoverText } from "@/components/ui/HoverText";
import { Eye, CheckCircle, XCircle } from "lucide-react";

export default function ApplicationCard({ app, onView, onApprove, onReject }) {
    return (
        <tr className="hover:bg-gray-100 transition-all border-b">

            <td className="p-3">{app.id}</td>
            <td className="p-3">{app.bidderName}</td>
            <td className="p-3">{app.tenderId}</td>
            <td className="p-3"><HoverText text={app.tenderTitle} maxLength={30} /></td>
            <td className="p-3">{app.amount}</td>
            <td className="p-3">{app.date}</td>

            <td className="p-3 flex justify-end gap-2">

                {/* View */}
                <button
                    onClick={() => onView(app)}
                    className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    <Eye size={18} />
                </button>

                {/* Approve */}
                <button
                    onClick={() => onApprove(app.id)}
                    className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                    <CheckCircle size={18} />
                </button>

                {/* Reject */}
                <button
                    onClick={() => onReject(app.id)}
                    className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                    <XCircle size={18} />
                </button>
            </td>

        </tr>
    );
}
