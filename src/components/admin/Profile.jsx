"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Pencil, CheckCircle } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { callApi } from "@/utils/api";
import Loader from "../common/Loader";

const Profile = () => {

    const { user, adminProfile } = useAppContext();
    console.log("adminProfile from context:", adminProfile);

    const [adminData, setAdminData] = useState({
        name: "",
        email: "",
        phone: "",
        role: ""
    });

    const adminOldData = useRef(null);

    const [error, setError] = useState("");
    const [updateLoading, setUpdateLoading] = useState(false);
    const [editMode, setEditMode] = useState(false);

    // Sync context profile → local editable state
    useEffect(() => {

        if (!adminProfile) return;

        console.log("Admin profile loaded:", adminProfile);

        const formattedData = {
            name: adminProfile?.name || "",
            email: adminProfile?.email || "",
            phone: adminProfile?.phone || "",
            role: adminProfile?.role || ""
        };

        setAdminData(formattedData);
        adminOldData.current = formattedData;

    }, [adminProfile]);

    useEffect(() => {

        if (adminProfile) return;

        const timer = setTimeout(() => {
            setError("Failed to load profile. Please try again.");
        }, 5000);

        return () => clearTimeout(timer);

    }, [adminProfile]);

    const handleChange = useCallback((e) => {

        const { name, value } = e.target;

        setAdminData(prev => ({
            ...prev,
            [name]: value
        }));

    }, []);

    const handleSubmit = async () => {

        if (!editMode) return;

        const oldData = adminOldData.current || {};

        if (
            adminData.name.trim() === "" ||
            adminData.email.trim() === "" ||
            adminData.phone.trim() === ""
        ) {
            alert("All fields are required.");
            return;
        }

        if (
            adminData.name === oldData.name &&
            adminData.email === oldData.email &&
            adminData.phone === oldData.phone
        ) {
            alert("No changes detected.");
            return;
        }

        if (adminData.phone.length !== 10 || !/^\d+$/.test(adminData.phone)) {
            alert("Phone number must be exactly 10 digits.");
            return;
        }

        try {

            setUpdateLoading(true);

            const response = await callApi(
                `/admin/${user.roleId}`,
                "PATCH",
                adminData
            );

            if (!response?.success) {
                setError(response?.message);
                return;
            }

            adminOldData.current = adminData;
            setEditMode(false);

            alert("Profile Updated Successfully!");

        } catch (err) {

            setError(err.message);

        } finally {

            setUpdateLoading(false);

        }
    };

    if (!adminProfile && !error) {
        return <Loader />;
    }


    if (error) return <h2>{error}</h2>;

    return (
        <div className="px-6 flex justify-center items-center animate-fadeIn">

            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">

                {/* Profile Avatar */}
                <div className="flex flex-col items-center mb-4">

                    <div className="w-28 h-28 rounded-full flex items-center justify-center text-4xl font-bold border shadow-md">
                        {adminData?.name?.charAt(0)}
                    </div>

                    <h2 className="text-2xl font-semibold mt-3">
                        {adminData?.name}
                    </h2>

                    <p className="text-gray-500 text-md">
                        <span className="font-semibold">Role: </span>
                        {adminData?.role}
                    </p>

                </div>

                {/* Form */}
                <div className="space-y-5">

                    {["name", "email", "phone"].map((field) => (

                        <div key={field}>

                            <label className="block font-medium mb-1 capitalize">
                                {field}
                            </label>

                            <input
                                type={field === "email" ? "email" : "text"}
                                name={field}
                                value={adminData[field]}
                                onChange={handleChange}
                                disabled={!editMode}
                                maxLength={field === "phone" ? 10 : undefined}
                                className={`w-full px-4 py-2 border rounded-xl transition outline-none
                                ${editMode
                                        ? "border-blue-500"
                                        : "border-gray-200 bg-gray-100 cursor-not-allowed"
                                    }`}
                            />

                        </div>

                    ))}

                    <div className="flex flex-col sm:flex-row justify-around gap-2">

                        <button
                            onClick={() => setEditMode(prev => !prev)}
                            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-white
                            ${!editMode
                                    ? "bg-[#2e5f9b] hover:bg-[#084c9d]"
                                    : "bg-[#d74040] hover:bg-[#b03333]"
                                }`}
                        >
                            <Pencil size={18} />
                            {editMode ? "Cancel" : "Edit Profile"}
                        </button>

                        <button
                            disabled={!editMode}
                            onClick={handleSubmit}
                            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl
                            ${editMode
                                    ? "bg-[#2e5f9b] hover:bg-[#084c9d] text-white"
                                    : "bg-gray-400 text-gray-200 cursor-not-allowed"
                                }`}
                        >
                            <CheckCircle size={20} />
                            Save Changes
                        </button>

                    </div>

                </div>

            </div>

            {updateLoading && (
                <div className="w-full h-full absolute left-0 bg-black/20">
                    <Loader />
                </div>
            )}

        </div>
    );
};

export default Profile;