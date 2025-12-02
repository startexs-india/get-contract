import { useState } from "react";
import { Plus } from "lucide-react"; // ICON ( + )

export default function AddUserPage({ setAddUserPage }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        role: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            // API CALL
            // await callApi("users", "POST", formData);
            console.log("User added:", formData);
            alert("User added successfully!");
            setViewAddUser(false);
        } catch (err) {
            alert("Error adding user!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full flex flex-col items-center p-6 bg-white rounded-xl shadow-lg mt-4">

            <h2 className="text-2xl font-bold text-[#2e5f9b] mb-6 flex items-center gap-2">
                Add New User
            </h2>

            {/* Form */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">

                <input
                    name="name"
                    placeholder="Full Name"
                    className="border p-2 rounded-xl"
                    onChange={handleChange}
                />

                <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    className="border p-2 rounded-xl"
                    onChange={handleChange}
                />

                <input
                    name="phone"
                    placeholder="Phone Number"
                    className="border p-2 rounded-xl"
                    onChange={handleChange}
                />

                <select
                    name="role"
                    className="border p-2 rounded-xl"
                    onChange={handleChange}
                >
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="contractor">Contractor</option>
                </select>

                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    className="border p-2 rounded-xl"
                    onChange={handleChange}
                />

            </div>

            {/* Buttons */}
            <div className="flex w-full mt-6 justify-between gap-4">
                <button
                    disabled={loading}
                    onClick={handleSubmit}
                    className={`w-1/2 flex items-center justify-center gap-2 px-4 py-2 rounded-xl 
                        border-2 border-white font-semibold shadow-md transition ${loading
                            ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                            : "bg-[#2e5f9b] hover:bg-[#084c9d] text-white"
                        }`}
                >
                    {loading ? "Adding..." : "Add User"}
                </button>

                <button
                    onClick={() => setAddUserPage(false)}
                    className="w-1/2 flex items-center justify-center gap-2 px-4 py-2 rounded-xl 
                    border-2 border-white bg-[#2e5f9b] hover:bg-[#084c9d] text-white shadow-md transition"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}
