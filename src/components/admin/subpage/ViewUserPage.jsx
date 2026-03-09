"use client";
import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Loader from "@/components/common/Loader";
//import { dummyUsers } from "../../../../data/AdminData";
import SingleUserPage from "./SingleUserPage";
import UserCard from "../Cards/UserCard";
import { callApi } from "@/utils/api";

const ViewUserPage = ({ setAddUserPage }) => {

    const [loading, setLoading] = useState(false);
    const [viewUserModel, setViewUserModel] = useState(false);

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedUserId, setSelectedUserId] = useState(null);

    const fetchAllUsers = async () => {
        setLoading(true);
        setErrorMessage("");

        try {
            const response = await callApi("/contractor/list", "GET");

            if (response?.success) {
                console.log(response.data);
                setUsers(response.data);
            } else {
                setErrorMessage(response?.message || "Error fetching Users");
            }
        } catch (error) {
            setErrorMessage(error?.message || "Server Error");
        }
        finally {
            setLoading(false);
        }

    };
    useEffect(() => {
        fetchAllUsers();
    }, []);


    useEffect(() => {
        if (selectedUserId) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedUserId]);

    // FIXED SEARCH — now searches inside your schema correctly
    const filteredUsers = users?.filter((u) => {
        const name = u?.name || "";
        const email = u?.email || "";

        return (
            name.toLowerCase().includes(search.toLowerCase()) ||
            email.toLowerCase().includes(search.toLowerCase())
        );
    });


    if (loading) return <Loader />;
    if (errorMessage) return (
        <div className="w-full">
            <h2>{errorMessage}</h2>
        </div>
    )

    return (
        <div className="px-2">

            <div className="w-full flex justify-between items-center mb-5 gap-2">
                <input
                    type="text"
                    placeholder="Search User..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border p-2 w-full rounded-lg max-w-[400px]"
                />

                <button
                    onClick={() => setAddUserPage(true)}
                    className="flex items-center gap-2 bg-[#2e5f9b] text-white px-4 py-2 rounded-lg hover:bg-[#084c9d]"
                >
                    <Plus size={18} />
                    <span className="hidden lg:flex">Add User</span>
                    <span className="flex lg:hidden">Add</span>
                </button>

            </div>


            {/* TABLE */}
            <div className="bg-white shadow-md rounded-lg overflow-x-auto ">
                <table className="w-full">
                    <thead className="bg-gray-200 text-gray-700 font-semibold">
                        <tr>
                            <th className="p-3 text-left">User</th>
                            <th className="p-3 text-left">Email</th>
                            {/* <th className="p-3 text-left">Subscription Plan</th> */}
                            <th className="p-3 text-left">Joined Date</th>
                            <th className="p-3 text-left">End Date</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-right">Actions</th>
                        </tr>
                    </thead>

                    {filteredUsers.length > 0 ? (
                        <tbody>
                            {filteredUsers.map((user) => (
                                <UserCard
                                    key={user._id}
                                    user={user}
                                    setSelectedUserId={setSelectedUserId}
                                    setViewUserModel={setViewUserModel}
                                />
                            ))}
                        </tbody>
                    ) : (
                        <tbody>
                            <tr>
                                <td colSpan={5} className="text-center py-6 text-gray-500">
                                    No users found
                                </td>
                            </tr>
                        </tbody>
                    )}

                </table>
            </div>

            {/* MODAL */}
            {viewUserModel && selectedUserId && (
                <SingleUserPage
                    userId={selectedUserId}
                    setViewUserModel={setViewUserModel}
                />
            )}
        </div>
    );
};

export default ViewUserPage;
