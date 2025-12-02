"use client";

import React, { useEffect, useState } from "react";
import { Pencil, CheckCircle } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

const Profile = () => {

    const { user, setUser } = useAppContext();

    useEffect(() => {

    }, []);

    const [editMode, setEditMode] = useState(false);

    const handleSubmit = () => {
        if (editMode) {
            setEditMode(false);
            alert("Profile Updated!");
        }
        else {
            return;
        }
    };

    return (
        <div className="p-6 flex justify-center items-center animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg hover:shadow-xl transition-all duration-300">

                {/* Profile Image */}
                <div className="flex flex-col items-center mb-4">
                    <div className="w-28 h-28 rounded-full  from-blue-500 to-blue-700 
                                    flex items-center justify-center text-4xl font-bold border-2 border-[] shadow-md">
                        {user.name.charAt(0)}
                    </div>
                    <h2 className="text-2xl font-semibold mt-3">{user?.name}</h2>
                    <p className="text-gray-500 text-md">
                        <span className="font-semibold">Role: </span>
                        {user?.role}
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
                            value={user?.name}
                            disabled={!editMode}
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
                            value={user.email}
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
                            name="role"
                            value={user.phone ? user.phone : "9456904597"}
                            disabled={!editMode}
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
