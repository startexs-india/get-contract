"use client";

import { Eye, UserRound } from "lucide-react";

export default function UserCard({
    user,
    setSelectedUserId,
    setViewUserModel
}) {
    const isSubscribed = user?.subscription?.active;
    const endDate = user?.subscription?.endDate;

    return (
        <tr className="border-b hover:bg-gray-50 transition">

            {/* USER */}
            <td className="p-3 flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
                    {user?.name ? (
                        <p className="text-lg font-semibold">
                            {user.name.charAt(0).toUpperCase()}
                        </p>
                    ) : (
                        <UserRound size={24} />
                    )}
                </div>

                <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                </div>
            </td>

            {/* ROLE */}
            <td className="p-3 text-gray-700">{user.role || "User"}</td>

            {/* SUBSCRIPTION STATUS */}
            <td className="p-3">
                {isSubscribed ? (
                    <span className="px-3 py-1 text-sm rounded-md bg-green-100 text-green-700">
                        Active
                    </span>
                ) : (
                    <span className="px-3 py-1 text-sm rounded-md bg-red-100 text-red-700">
                        Not Subscribed
                    </span>
                )}
            </td>

            {/* SUBSCRIPTION END DATE */}
            <td className="p-3 text-gray-700">
                {endDate ? endDate : "N/A"}
            </td>

            {/* ACTIONS */}
            <td className="p-3 text-right">
                <button
                    onClick={() => {
                        setSelectedUserId(user._id);
                        setViewUserModel(true);
                    }}
                    className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                    <Eye size={18} />
                </button>
            </td>
        </tr>
    );
}
