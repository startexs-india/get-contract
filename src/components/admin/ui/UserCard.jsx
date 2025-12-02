'use client';
import { Eye, Pencil, Trash2, UserRound } from "lucide-react";

export default function UserCard({ user, onView, onEdit, onDelete }) {
    return (
        <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-all">

            {/* Avatar */}
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
                    {user?.name ? (
                        <p className="text-lg font-semibold text-primary">
                            {user.name.slice(0, 1).toUpperCase()}
                        </p>
                    ) : (
                        <UserRound size={28} />
                    )}
                </div>

                {/* User Info */}
                <div>
                    <h3 className="text-lg font-semibold">{user?.name || "No Name"}</h3>
                    <p className="text-sm text-gray-500">{user?.email || "No Email"}</p>
                    <p className="text-xs text-gray-400">{user?.role || "User"}</p>
                </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-2">
                {/* View Button */}
                <button
                    onClick={() => onView(user)}
                    className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                    <Eye size={18} />
                </button>

                {/* Edit Button */}
                <button
                    onClick={() => onEdit(user)}
                    className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    <Pencil size={18} />
                </button>

                {/* Delete Button */}
                <button
                    onClick={() => onDelete(user._id)}
                    className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                    <Trash2 size={18} />
                </button>
            </div>
        </div>
    );
}
