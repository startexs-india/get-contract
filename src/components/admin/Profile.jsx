"use client";

import React, { useEffect, useState } from "react";
import { Pencil, CheckCircle } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { callApi } from "@/utils/api";
import Loader from "../common/Loader";

const Profile = () => {

    const { user } = useAppContext();
    const [adminData, setAdminData] = useState({
        name: "",
        email: "",
        phone: "",
        role: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [editMode, setEditMode] = useState(false);

    const fetchAdmin = async () => {
        setLoading(true);
        try {
            const response = await callApi(`/admin/${user.roleId}`, "GET");
            if (response.success) {
                const user = response.data.user;
                setAdminData({
                    name: user.name || "",
                    email: user.email || "",
                    phone: user.phone || "",
                    role: user.role || ""
                });
            }
            else {
                setError(response.message);
            }
        } catch (error) {
            setError(error.message)
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user?.roleId && adminData.name == '') {
            fetchAdmin();
        }
    }, [user?.roleId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        if (!editMode) return;

        try {
            setLoading(true);
            const response = await callApi(
                `/admin/${user.roleId}`,
                "PATCH",
                adminData
            );

            if (response.success) {
                alert("Profile Updated Successfully!");
                setEditMode(false);
            } else {
                setError(response.message);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    if (loading) {
        return (
            <div>
                <Loader />
            </div>
        )
    }
    if (error) {
        return (
            <div>
                <h2>{error}</h2>
            </div>
        )
    }



    return (
        <div className="px-6 flex justify-center items-center animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg hover:shadow-xl transition-all duration-300">

                {/* Profile Image */}
                <div className="flex flex-col items-center mb-4">
                    <div className="w-28 h-28 rounded-full  from-blue-500 to-blue-700 
                                    flex items-center justify-center text-4xl font-bold border-2 border-[] shadow-md">
                        {adminData?.name?.charAt(0)}
                    </div>
                    <h2 className="text-2xl font-semibold mt-3">{adminData?.name}</h2>
                    <p className="text-gray-500 text-md">
                        <span className="font-semibold">Role: </span>
                        {adminData?.role}
                    </p>
                </div>

                {/* Form */}
                <div className="space-y-5">

                    {/* Name */}
                    <div>
                        <label className="block font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={adminData.name}
                            disabled={!editMode}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-xl transition outline-none 
                                ${editMode ? "border-blue-500 focus:border-blue-600" : "border-gray-200 bg-gray-100 cursor-not-allowed"}`}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block font-medium mb-1">Email</label>
                        <input

                            type="email"
                            name="email"
                            value={adminData.email}
                            onChange={handleChange}
                            disabled={!editMode}
                            className={`w-full px-4 py-2 border rounded-xl transition outline-none 
                                ${editMode ? "border-blue-500 focus:border-blue-600" : "border-gray-200 bg-gray-100 cursor-not-allowed"}`}
                        />
                    </div>

                    {/* Role */}
                    <div>
                        <label className="block font-medium mb-1">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={adminData.phone}
                            onChange={handleChange}
                            disabled={!editMode}
                            maxLength={10}
                            placeholder="Phone without +91"
                            className={`w-full px-4 py-2 border rounded-xl transition outline-none 
                                ${editMode ? "border-blue-500 focus:border-blue-600" : "border-gray-200 bg-gray-100 cursor-not-allowed"}`}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row justify-around gap-2">

                        {/* Edit Button */}
                        <button
                            onClick={() => setEditMode(!editMode)}
                            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl border-2 border-white
                                ${!editMode ? "bg-[#2e5f9b] hover:bg-[#084c9d]" : "bg-[#d74040] hover:bg-[#b03333]"}  text-white shadow-md transition cursor-pointer`}
                        >
                            <Pencil size={18} /> {editMode ? "Cancel" : "Edit Profile"}
                        </button>

                        {/* Submit Button */}
                        <button
                            disabled={!editMode}
                            onClick={() => handleSubmit()}
                            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl 
                                border-2 border-white font-semibold shadow-md transition cursor-pointer
                                ${editMode
                                    ? "bg-[#2e5f9b] hover:bg-[#084c9d] text-white" // ACTIVE STYLE
                                    :
                                    "bg-gray-400 text-gray-200 cursor-not-allowed"   // DISABLED STYLE

                                }`}
                        >
                            <CheckCircle size={20} /> Save Changes
                        </button>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;
