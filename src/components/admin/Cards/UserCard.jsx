"use client";

import { Eye, UserRound, CheckCircle, XCircle, Crown } from "lucide-react";

export default function UserCard({
    user,
    setSelectedUserId,
    setViewUserModel
}) {

    const formatDate = (dateValue) => {
        if (!dateValue) return "N/A";

        const date = new Date(dateValue);
        if (isNaN(date.getTime())) return "Invalid Date";

        return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };


    const joinedDate = user?.subscribeAt
        ? new Date(user.subscribeAt).toLocaleDateString()
        : "N/A";


    const getEndDate = (user) => {
        if (!user?.subscribeAt || !user?.premiumPlan || user.premiumPlan === "FREE") {
            return null;
        }

        const startDate = new Date(user.subscribeAt);
        let daysToAdd = 0;

        switch (user.premiumPlan) {
            case "MONTHLY":
                daysToAdd = 30;
                break;

            case "YEARLY":
                daysToAdd = 365;
                break;

            case "LIFETIME":
                daysToAdd = 6 * 365; // 6 years
                break;

            default:
                return null;
        }

        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + daysToAdd);

        return endDate;
    };

    const expiryDate = getEndDate(user);
    const formattedEndDate = expiryDate
        ? expiryDate.toLocaleDateString()
        : "N/A";


    return (
        <tr className="border-b hover:bg-gray-50 transition">

            {/* USER */}
            <td className="p-3 flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full">
                    {user?.name ? (
                        <p className="text-lg font-semibold">
                            {user.name.charAt(0).toUpperCase()}
                        </p>
                    ) : (
                        <UserRound size={22} />
                    )}
                </div>

                <div>
                    <p className="font-semibold text-gray-800">{user.name}</p>

                </div>
            </td>

            {/* ROLE */}
            <td className="p-3 text-gray-700 capitalize">
                <p className="text-sm text-gray-500">{user.email}</p>
            </td>

            {/* MEMBERSHIP */}

            {/* <td className="p-3">
                {user.isPremiumMember ? (
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium 
            rounded-md bg-purple-100 text-purple-700 border border-purple-300">
                        <Crown size={14} />
                       
                        MONTHLY
                    </span>
                ) : (
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium 
            rounded-md bg-blue-100 text-blue-700 border border-blue-300">
                        Free
                    </span>
                )}
            </td> */}

            {/* JOINED DATE */}
            <td className="p-3 text-gray-700">
                {formatDate(user.subscribeAt)}
            </td>
            {/* END DATE */}
            <td className="p-3 text-gray-700">
                {formatDate(user.premiumExpiresAt)}
            </td>

            {/* STATUS */}
            <td className="p-3">
                {user.status === "active" ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 text-sm rounded-md bg-green-100 text-green-700">
                        <CheckCircle size={14} />
                        Active
                    </span>
                ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1 text-sm rounded-md bg-red-100 text-red-700">
                        <XCircle size={14} />
                        Inactive
                    </span>
                )}
            </td>

            {/* ACTIONS */}
            <td className="p-3 text-right">
                <button
                    onClick={() => {
                        setSelectedUserId(user._id);
                        setViewUserModel(true);
                    }}
                    className="p-2 bg-[#2e5f9b] hover:bg-[#084c9d] text-white rounded-lg transition cursor-pointer"
                    title="View User"
                >
                    <Eye size={18} />
                </button>
            </td>
        </tr>
    );
}
