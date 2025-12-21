"use client";

import Loader from "@/components/common/Loader";
import { callApi } from "@/utils/api";
import { X, ToggleLeft, ToggleRight } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function SingleUserPage({ userId, setViewUserModel }) {

    const [userData, setUserData] = useState(null);
    const [subscription, setSubscription] = useState({
        active: false,
        endDate: null
    });
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const fetchUser = async () => {
        try {
            setLoading(true);
            const response = await callApi(`/contractor/${userId}`, "GET");

            if (response.success) {
                const user = response.data.user;
                setUserData(user);

                // if premium logic added later
                setSubscription({
                    active: user.isPremiumMember || false,
                    endDate: user.premiumPlan || null
                });
            } else {
                setErrorMessage(response.message);
            }
        } catch (error) {
            setErrorMessage(error.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (userId) fetchUser();
    }, [userId]);

    // Close modal on outside click
    useEffect(() => {
        const handler = (e) => {
            if (e.target.id === "user-modal-overlay") {
                setViewUserModel(false);
            }
        };
        window.addEventListener("mousedown", handler);
        return () => window.removeEventListener("mousedown", handler);
    }, [setViewUserModel]);

    if (loading) {
        return (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center text-white">
                <Loader />
            </div>
        );
    }

    if (errorMessage) {
        return (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center text-red-500">
                {errorMessage}
            </div>
        );
    }

    if (!userData) return null;

    return (
        <div
            id="user-modal-overlay"
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 overflow-auto"
        >
            <div className="bg-white p-6 rounded-lg shadow-xl w-[95%] md:w-[70%] lg:w-[50%] max-h-[95%] overflow-auto">

                {/* HEADER */}
                <div className="flex justify-between items-center mb-4 bg-[#084c9d] px-3 py-2 text-white rounded">
                    <h2 className="text-xl font-semibold">User Details</h2>
                    <button onClick={() => setViewUserModel(false)}>
                        <X size={22} />
                    </button>
                </div>

                {/* USER DETAILS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <Field label="Name" value={userData.name} />
                    <Field label="Email" value={userData.email} />
                    <Field label="Phone" value={userData.phone} />
                    <Field label="Role" value={userData.role} />
                    <Field label="Status" value={userData.status} />
                    {/* <Field label="User ID" value={userData.userId} />
                    <Field label="Role ID" value={userData.roleId} /> */}

                    <Field
                        label="Email Verified"
                        value={userData.emailVerified ? "Yes" : "No"}
                    />
                    <Field
                        label="Phone Verified"
                        value={userData.phoneVerified ? "Yes" : "No"}
                    />

                    <Field
                        label="Premium Member"
                        value={userData.isPremiumMember ? "Yes" : "No"}
                    />

                    <Field
                        label="Created At"
                        value={new Date(userData.createdAt).toLocaleString()}
                    />

                    <Field
                        label="Updated At"
                        value={new Date(userData.updatedAt).toLocaleString()}
                    />
                </div>

                {/* SUBSCRIPTION */}
                <div className="mt-6 p-4 bg-gray-100 rounded-lg border">
                    <h3 className="text-lg font-semibold mb-2">Subscription</h3>

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">
                                Status:{" "}
                                {subscription.active ? (
                                    <span className="text-green-700">Active</span>
                                ) : (
                                    <span className="text-red-700">Inactive</span>
                                )}
                            </p>

                            <p className="text-sm text-gray-600">
                                Plan: {subscription.endDate || "N/A"}
                            </p>
                        </div>

                        <button
                            onClick={() => alert("Connect this to backend")}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            {subscription.active ? (
                                <>
                                    <ToggleLeft size={22} /> Deactivate
                                </>
                            ) : (
                                <>
                                    <ToggleRight size={22} /> Activate
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="flex justify-end mt-6">
                    <button
                        onClick={() => setViewUserModel(false)}
                        className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

/* Reusable Field Component */
function Field({ label, value }) {
    return (
        <div>
            <label className="text-sm font-semibold text-gray-600">
                {label}
            </label>
            <div className="w-full border p-2 rounded mt-1 bg-gray-100">
                {value || "N/A"}
            </div>
        </div>
    );
}
