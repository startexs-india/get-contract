"use client";
import { HoverText } from "@/components/ui/HoverText";
import { Eye } from "lucide-react";

export default function TenderCard({ tender, onOpenTender }) {
    // Extracting safe values from schema
    const title = tender?.generalInformation?.tenderTitle || "Untitled Tender";
    const department =
        tender?.generalInformation?.organizationHierarchy?.join(" → ") ||
        "Not Available";

    const deadline =
        tender?.dateSchedule?.bidSubmissionDueDate?.formatted ||
        tender?.dateSchedule?.bidSubmissionDueDate?.raw ||
        "No Deadline";

    const status = tender?.status || "UNKNOWN";

    const isPublic = tender?.isActive ?? false;

    return (
        <tr className="hover:bg-gray-200 transition-all shadow-sm text-sm">

            {/* Tender ID with Tooltip */}
            <td className="pl-5 font-semibold text-gray-700 relative group cursor-pointer">
                <HoverText text={tender?.tenderId} maxLength={12} />
            </td>

            {/* TITLE */}
            <td className="p-2 font-semibold text-gray-700">
                <HoverText text={title} maxLength={30} />
            </td>

            {/* REFERENCE NO */}
            <td className="p-2 text-gray-600">
                {/* {tender.generalInformation.tenderReferenceNo} */}
                <HoverText text={tender.generalInformation.tenderReferenceNo} maxLength={15} />
            </td>

            {/* DEPARTMENT */}
            <td className="p-2 text-gray-600">
                <HoverText text={department} maxLength={30} />
            </td>

            {/* DEADLINE */}
            <td className="p-2 text-gray-700">
                {deadline}
            </td>

            {/* STATUS */}
            <td className="p-2">
                <span
                    className={`px-2 py-1 rounded-md font-medium ${status === "ACTIVE"
                        ? "bg-green-100 text-green-700"
                        : status === "PENDING"
                            ? "bg-yellow-100 text-yellow-700"
                            : status === "CANCELLED"
                                ? "bg-red-100 text-red-700"
                                : status === "CLOSED"
                                    ? "bg-gray-300 text-gray-700"
                                    : "bg-gray-100 text-gray-600"
                        }`}
                >
                    {status}
                </span>
            </td>

            {/* PUBLIC / PRIVATE */}
            {/* <td className="p-2">
                {isPublic ? "✔ Public" : "❌ Private"}
            </td> */}

            {/* VIEW BUTTON */}
            <td className="pr-5 p-2 flex justify-end">
                <button
                    onClick={() => onOpenTender(tender._id)}
                    className="px-4 py-2 bg-[#2e5f9b] hover:bg-[#084c9d] text-white rounded-lg transition-all cursor-pointer flex items-center gap-1"
                >
                    <Eye size={18} />
                </button>
            </td>
        </tr>
    );
}
