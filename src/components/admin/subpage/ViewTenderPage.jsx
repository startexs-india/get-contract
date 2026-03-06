"use client";

import { useEffect, useState } from "react";
import TenderCard from "../Cards/TenderCard";
import { exportToExcel } from "../../../utils/Export/exportExcel";
import { FileSpreadsheet, FileText, PlusCircle } from "lucide-react";
import { exportToPDF } from "@/utils/Export/exportPdf";
import UploadExcel from "../Cards/UploadExcel";
import SingleTenderPage from "./SingleTenderPage";
import { callApi } from "@/utils/api";
import Loader from "@/components/common/Loader";

export default function ViewTenderPage({ setAddTender }) {

    const [search, setSearch] = useState("");
    const [tenders, setTenders] = useState([]);
    const [openUpload, setOpenUpload] = useState(false);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedTenderId, setSelectedTenderId] = useState(null);

    const fetchAllTenders = async () => {
        setLoading(true);
        setErrorMessage("");

        try {
            const response = await callApi("/tender/list", "GET");

            if (response?.success) {
                setTenders(response.data);
            } else {
                setErrorMessage(response?.message || "Error fetching tenders");
            }
        } catch (error) {
            setErrorMessage(error?.message || "Server Error");
        }
        finally {
            setLoading(false);
        }

    };

    useEffect(() => {
        fetchAllTenders();
    }, []);


    useEffect(() => {
        if (selectedTenderId) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedTenderId]);

    // FIXED SEARCH — now searches inside your schema correctly
    const filteredTenders = tenders?.filter((t) => {
        const title = t?.generalInformation?.tenderTitle || "";
        const desc = t?.generalInformation?.detailedDescription || "";
        const status = t?.status || "";

        return (
            title.toLowerCase().includes(search.toLowerCase()) ||
            desc.toLowerCase().includes(search.toLowerCase()) ||
            status.toLowerCase().includes(search.toLowerCase())
        );
    });

    if (loading) {
        return (
            <div>
                <Loader />
            </div>
        )
    }

    if (errorMessage) {
        return (
            <div>
                <h2>{errorMessage}</h2>
            </div>
        )
    }

    return (
        <div className="">
            {/* 🔹 HEADER BAR */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-3 mb-4">
                <input
                    type="text"
                    placeholder="Search tenders..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border p-2 w-full rounded-lg max-w-[400px]"
                />

                <div className="flex gap-2">

                    {/* Upload Excel */}
                    <button
                        onClick={() => setOpenUpload(true)}
                        className="flex items-center gap-2 bg-[#2e5f9b] text-white px-4 py-2 rounded-lg hover:bg-[#084c9d]"
                    >
                        <PlusCircle size={20} />
                        <span className="flex">Upload Excel</span>
                    </button>

                    {/* Add New Tender */}
                    <button
                        onClick={() => setAddTender(true)}
                        className="flex items-center gap-2 bg-[#2e5f9b] text-white px-4 py-2 rounded-lg hover:bg-[#084c9d]"
                    >
                        <PlusCircle size={20} />
                        <span className="flex">New Tender</span>
                    </button>

                    {/* Export Excel */}
                    <button
                        onClick={() => exportToExcel(filteredTenders)}
                        className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    >
                        <FileSpreadsheet size={18} />
                        <span className="flex">Excel</span>
                    </button>

                    {/* Export PDF */}
                    <button
                        onClick={() => exportToPDF(filteredTenders)}
                        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        <FileText size={18} />
                        <span className="flex">PDF</span>
                    </button>
                </div>
            </div>

            {/* 🔹 TENDER TABLE */}
            <table className="w-full border-collapse bg-white rounded-sm">
                <thead>
                    <tr className="text-left border-b-2 border-gray-400">
                        <th className="pl-5">Tender/RFQ ID</th>
                        <th className="p-2">Tender Description</th>
                        <th className="p-2">By Amount</th>
                        <th className="p-2">Reference No.</th>
                        <th className="p-2">Department</th>
                        <th className="p-2">End Date</th>
                        <th className="p-2">Status</th>
                        {/* <th className="p-2">Visiablity</th> */}
                        <th className="pr-5 p-2 text-end">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredTenders?.map((tender) => (
                        <TenderCard
                            key={tender._id}
                            tender={tender}
                            onOpenTender={() => setSelectedTenderId(tender._id)}
                        />
                    ))}
                </tbody>
            </table>

            {/* 🔹 UPLOAD EXCEL MODAL */}
            {openUpload && (
                <UploadExcel
                    isOpen={openUpload}
                    onClose={() => setOpenUpload(false)}
                />
            )}

            {/* 🔹 SINGLE TENDER VIEW / EDIT MODAL */}
            {selectedTenderId && (
                <SingleTenderPage
                    tender_id={selectedTenderId}
                    onClose={() => setSelectedTenderId(null)}
                />
            )}
        </div>
    );
}
