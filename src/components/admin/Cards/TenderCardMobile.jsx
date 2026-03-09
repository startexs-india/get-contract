"use client";
import { HoverText } from "@/components/ui/HoverText";
import { formatDateTime } from "@/utils/formatDate";
import { Eye } from "lucide-react";

export default function TenderCardMobile({ tender, onOpenTender }) {

    const description = tender?.description || "Untitled Tender";

    const department =
        tender?.department?.join(" → ") || "Not Available";

    const deadline =
        tender?.endDate?.formatted || "No Deadline";

    const status = tender?.status || "UNKNOWN";

    return (
        <div className="bg-white border rounded-xl p-4 shadow-sm flex flex-col gap-2">

            {/* Tender ID */}
            <div className="flex justify-start items-center">
                <span className="text-sm text-black">Tender ID : </span>&nbsp;
                <span className="font-semibold text-gray-700">
                    <HoverText text={tender?.externalSystemDisplayTenderId} maxLength={18} />
                </span>
            </div>

            {/* Title */}
            <div>
                <p className="text-xs text-gray-500">Description</p>
                <p className="font-semibold text-gray-800">
                    <HoverText text={description} maxLength={100} />
                </p>
            </div>

            {/* Amount */}
            <div className="flex justify-between">
                <div>
                    <p className="text-xs text-gray-500">Amount</p>
                    <p className="font-medium">{tender?.amount}</p>
                </div>

                <div>
                    <p className="text-xs text-gray-500">Deadline</p>
                    <p className="font-medium">
                        {formatDateTime(deadline)}
                    </p>
                </div>
            </div>

            {/* Department */}
            <div>
                <p className="text-xs text-gray-500">Department</p>
                <p className="text-gray-700">
                    <HoverText text={department} maxLength={40} />
                </p>
            </div>

            {/* Status + Button */}
            <div className="flex justify-between items-center mt-2">

                {status === "PUBLISHED" ? (
                    <span className="px-2 py-1 text-xs bg-green-100 border border-green-900 text-green-800 rounded-full">
                        Public
                    </span>
                ) : (
                    <span className="px-2 py-1 text-xs bg-gray-100 border border-gray-700 text-gray-600 rounded-full">
                        Private
                    </span>
                )}

                <button
                    onClick={() => onOpenTender(tender._id)}
                    className="px-3 py-2 bg-[#2e5f9b] hover:bg-[#084c9d] text-white rounded-lg flex items-center gap-1"
                >
                    <Eye size={16} />
                    View
                </button>

            </div>

        </div>
    );
}