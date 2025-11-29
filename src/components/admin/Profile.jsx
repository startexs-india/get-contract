"use client";

import React, { useState } from "react";

const Profile = () => {
    const [form, setForm] = useState({
        name: "Abhishek Sharma",
        email: "admin@example.com",
        role: "Administrator",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Profile Updated!");
    };

    return (
        <div className="p-6 animate-fade">
            <h1 className="text-3xl font-heading font-semibold text-primary mb-6">
                Profile
            </h1>
            <div className="w-full flex justify-center items-center">
                <div className="bg-gray-100 rounded-xl shadow-card p-8 w-xl shadow ">

                    {/* Profile Image */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-primary">
                            {form.name.charAt(0)}
                        </div>
                        <h2 className="text-xl font-semibold mt-3">{form.name}</h2>
                        <p className="text-gray-500 text-sm">{form.role}</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">

                        <div>
                            <label className="block font-medium mb-1">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl outline-none focus:border-primary transition"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl outline-none focus:border-primary transition"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Role</label>
                            <input
                                type="text"
                                name="role"
                                value={form.role}
                                disabled
                                className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-xl text-gray-500 cursor-not-allowed"
                            />
                        </div>

                        <button
                            type="submit"
                            className="border-2 border-black text-gary-400  px-6 py-2 rounded-xl shadow-md hover:bg-blue-700 hover:border-blue-700 hover:text-white transition w-full cursor-pointer"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Profile;
