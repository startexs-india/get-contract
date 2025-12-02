"use client";
import { useEffect, useState } from "react";
import { callApi } from "@/utils/api";
import { PlusCircle, Loader2, XCircle } from "lucide-react";

export default function AddTenderPage({ setAddTender }) {
    const [tenderData, setTenderData] = useState({
        title: "",
        description: "",
        budget: "",
        deadline: "",
        dueDate: "",
        postDate: "",
        tdr: "",
        tenderAuthority: "",
        tenderBrief: "",
        biddingType: "",
        competitionType: "",
        state: "",
        city: "",
        lastBidDate: "",
        tenderValue: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });

    useEffect(() => {
        if (message.text) {
            const timer = setTimeout(() => setMessage({ type: "", text: "" }), 2000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format
        setTenderData(prev => ({ ...prev, postDate: today }));
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setTenderData({ ...tenderData, [name]: value });
    };

    const handleSubmit = async () => {
        if (!tenderData.title || !tenderData.budget || !tenderData.deadline || !tenderData.postDate || !tenderData.tenderAuthority) {
            setMessage({ type: "error", text: "⚠️ Please fill all required fields!" });
            return;
        }

        setLoading(true);
        setMessage({ type: "", text: "" });

        try {
            const response = await callApi("tenders/add", "POST", tenderData);
            if (response?.success) {
                setMessage({ type: "success", text: "🎉 Tender added successfully!" });
                setTenderData({
                    title: "", description: "", budget: "", deadline: "", dueDate: "", postDate: "", tdr: "",
                    tenderAuthority: "", tenderBrief: "", biddingType: "", competitionType: "", state: "", city: "",
                    lastBidDate: "", tenderValue: "",
                });
                setAddTender(false);
            } else {
                setMessage({ type: "error", text: response?.message || "Failed to add tender" });
            }
        } catch (error) {
            setMessage({ type: "error", text: "Server error. Please try again." });
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center bg-gray-100 p-4">

            <div className="w-full bg-white p-6 md:p-8 rounded-xl shadow-xl border border-gray-200">

                {/* Header */}
                <div className="flex items-center justify-between mb-6 bg-[#2e5f9b] text-white rounded-lg px-3 py-1">
                    <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
                        Add New Tender
                    </h1>
                    <button
                        onClick={() => setAddTender(false)}
                        className="text-white hover:text-red-500 transition cursor-pointer"
                    >
                        <XCircle size={28} />
                    </button>
                </div>

                {message.text && (
                    <div className={`p-3 rounded-lg text-center font-medium mb-4 ${message.type === "error" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
                        }`}>
                        {message.text}
                    </div>
                )}

                {/* FORM */}
                <div className="space-y-4">

                    {/* Title & Budget */}
                    <div className="flex gap-6">
                        <div className="flex-1">
                            <label className="block font-medium mb-1">Tender Title *</label>
                            <input type="text" name="title" value={tenderData.title} onChange={handleChange}
                                placeholder="E.g: School Construction Project"
                                className="w-full px-3 py-2 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                        <div className="flex-1">
                            <label className="block font-medium mb-1">Tender Value (₹)</label>
                            <input type="number" name="tenderValue" value={tenderData.tenderValue} onChange={handleChange}
                                placeholder="E.g: 5000000"
                                className="w-full px-3 py-2 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                    </div>

                    {/* Authority & TDR */}
                    <div className="flex gap-6">
                        <div className="flex-1">
                            <label className="block font-medium mb-1">Tender Authority *</label>
                            <input type="text" name="tenderAuthority" value={tenderData.tenderAuthority} onChange={handleChange}
                                placeholder="Authority Name"
                                className="w-full px-3 py-2 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                        <div className="flex-1">
                            <label className="block font-medium mb-1">TDR Number</label>
                            <input type="text" name="tdr" value={tenderData.tdr} onChange={handleChange}
                                placeholder="E.g: TDR-2025-001"
                                className="w-full px-3 py-2 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                    </div>

                    {/* Brief */}
                    <div>
                        <label className="block font-medium mb-1">Tender Brief</label>
                        <textarea name="tenderBrief" value={tenderData.tenderBrief} onChange={handleChange}
                            rows={3} placeholder="Short details about tender"
                            className="w-full px-3 py-2 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-primary outline-none"></textarea>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block font-medium mb-1">Description</label>
                        <textarea name="description" value={tenderData.description} onChange={handleChange}
                            rows={4} placeholder="Explain the tender details..."
                            className="w-full px-3 py-2 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-primary outline-none"></textarea>
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block font-medium mb-1">Post Date *</label>
                            <input type="date" name="postDate" value={tenderData.postDate} onChange={handleChange}
                                readOnly
                                className="w-full px-3 py-2 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Due Date</label>
                            <input type="date" name="dueDate" value={tenderData.dueDate} onChange={handleChange}
                                className="w-full px-3 py-2 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Deadline *</label>
                            <input type="date" name="deadline" value={tenderData.deadline} onChange={handleChange}
                                className="w-full px-3 py-2 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Last Bid Submission</label>
                            <input type="date" name="lastBidDate" value={tenderData.lastBidDate} onChange={handleChange}
                                className="w-full px-3 py-2 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex gap-6">
                        <div className="flex-1">
                            <label className="block font-medium mb-1">State</label>
                            <input type="text" name="state" value={tenderData.state} onChange={handleChange}
                                placeholder="E.g: Maharashtra"
                                className="w-full px-3 py-2 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                        <div className="flex-1">
                            <label className="block font-medium mb-1">City</label>
                            <input type="text" name="city" value={tenderData.city} onChange={handleChange}
                                placeholder="E.g: Pune"
                                className="w-full px-3 py-2 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                    </div>

                    {/* Types */}
                    <div className="flex gap-6">
                        <div className="flex-1">
                            <label className="block font-medium mb-1">Bidding Type</label>
                            <input type="text" name="biddingType" value={tenderData.biddingType} onChange={handleChange}
                                placeholder="Open / Closed"
                                className="w-full px-3 py-2 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                        <div className="flex-1">
                            <label className="block font-medium mb-1">Competition Type</label>
                            <input type="text" name="competitionType" value={tenderData.competitionType} onChange={handleChange}
                                placeholder="Domestic / Global"
                                className="w-full px-3 py-2 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex w-full gap-4 mt-6">
                        <button
                            disabled={loading}
                            onClick={handleSubmit}
                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl 
                                font-semibold shadow-md transition cursor-pointer ${loading ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                                    : "bg-[#2e5f9b] hover:bg-[#084c9d] text-white"
                                }`}
                        >
                            {loading ? <Loader2 className="animate-spin" /> : <PlusCircle />}
                            {loading ? "Adding..." : "Add Tender"}
                        </button>

                        <button
                            onClick={() => setAddTender(false)}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl 
                            bg-red-500 hover:bg-red-600 text-white shadow-md transition font-semibold cursor-pointer"
                        >
                            <XCircle /> Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
