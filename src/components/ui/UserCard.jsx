// components/UserCard.jsx
import React from "react";

const UserCard = ({ user, onView, onEdit, onDelete }) => {
    return (
        <div className="bg-white shadow-card rounded-xl p-5 w-full md:w-72 animate-fade hover:shadow-lg transition">

            {/* User Info */}
            <h3 className="text-lg font-semibold mb-1">{user.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{user.email}</p>

            <div className="flex justify-between items-center mb-4">
                <span
                    className={`text-xs font-medium px-2 py-1 rounded-lg
                    ${user.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : user.status === "Pending"
                                ? "bg-orange-100 text-orange-600"
                                : "bg-red-100 text-red-600"
                        }`}
                >
                    {user.status}
                </span>

                <span className="text-xs font-semibold text-blue-600">
                    {user.role}
                </span>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between mt-2">
                <button
                    className="px-3 py-1 text-sm rounded-lg bg-blue-100 hover:bg-blue-200 transition"
                    onClick={() => onView(user)}
                >
                    View
                </button>
                <button
                    className="px-3 py-1 text-sm rounded-lg bg-yellow-100 hover:bg-yellow-200 transition"
                    onClick={() => onEdit(user)}
                >
                    Edit
                </button>
                <button
                    className="px-3 py-1 text-sm rounded-lg bg-red-100 hover:bg-red-200 transition"
                    onClick={() => onDelete(user.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default UserCard;
