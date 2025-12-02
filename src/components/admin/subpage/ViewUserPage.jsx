"use client";
import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import Loader from "@/components/common/Loader";
import UserCard from "../ui/UserCard";
import { users } from "../../../../data/AdminData";


const ViewUserPage = ({ setAddUserPage }) => {

    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState(users);

    const handleView = (user) => alert(`Viewing details of ${user.name}`);
    const handleEdit = (user) => alert(`Editing ${user.name}`);
    const handleDelete = (id) => alert(`Deleting user ID: ${id}`);


    if (loading) return <Loader />;

    return (
        <div className="pt-6">
            <div className="w-full flex px-2 justify-end text-2xl font-heading font-semibold mb-5">
                <button
                    onClick={() => setAddUserPage(true)}
                    className="border-2 px-4 py-1 rounded-xl flex items-center gap-2 bg-[#2e5f9b] text-white cursor-pointer hover:bg-[#084c9d]">
                    <Plus size={18} className="border-2 rounded-full" />
                    <span>
                        Add User
                    </span>
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {userData.map((user) => (
                    <UserCard key={user.id}
                        user={user}
                        onView={handleView}
                        onEdit={handleEdit}
                        onDelete={handleDelete} />
                ))}
            </div>

        </div>
    );
};

export default ViewUserPage;
