"use client";
import React, { useState, useEffect } from "react";
import { users } from "@/../data/AdminData";
import UserCard from "../ui/UserCard";
import Loader from "../common/Loader";

const ManageUsers = () => {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState([]);

    const handleView = (user) => alert(`Viewing details of ${user.name}`);
    const handleEdit = (user) => alert(`Editing ${user.name}`);
    const handleDelete = (id) => alert(`Deleting user ID: ${id}`);

    useEffect(() => {
        // Simulating API call
        setTimeout(() => {
            setUserData(users);
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) return <Loader />;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-heading font-semibold mb-5">
                Manage Users
            </h2>

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

export default ManageUsers;
