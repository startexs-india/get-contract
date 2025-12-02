"use client";

import { useEffect, useState } from "react";
import TenderCard from "../ui/TenderCard";
import { exportToExcel } from "../../../utils/Export/exportExcel";
import { FileSpreadsheet, FileText, PlusCircle } from "lucide-react";
import { exportToPDF } from "@/utils/Export/exportPdf";
import UploadExcel from "../ui/UploadExcel";
import SingleTenderPage from "./SingleTenderPage";
import { dummyTenders } from "../../../../data/AdminData";

export default function ViewTenderPage({ setAddTender }) {
    const [search, setSearch] = useState("");
    const [tenders, setTenders] = useState(dummyTenders);
    const [openUpload, setOpenUpload] = useState(false);

    // Tracks the tender opened in the SingleTenderPage
    const [selectedTender, setSelectedTender] = useState(null);

    useEffect(() => {
        if (selectedTender) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedTender]);


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

    // Handle save from SingleTenderPage
    const handleTenderUpdate = (updatedTender) => {
        setTenders((prev) =>
            prev.map((t) => (t.tenderId === updatedTender.tenderId ? updatedTender : t))
        );
        setSelectedTender(null);
    };

    return (
        <div className="">

            {/* 🔹 HEADER BAR */}
            <div className="flex flex-col md:flex-col justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Search tenders..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border p-2 w-full rounded-lg max-w-[400px]"
                />

                <div className="flex gap-2">
                    <button
                        onClick={() => setOpenUpload(true)}
                        className="flex items-center gap-2 bg-[#2e5f9b] text-white px-4 py-2 rounded-lg hover:bg-[#084c9d]"
                    >
                        <PlusCircle size={20} /> Upload Tender Excel
                    </button>

                    <button
                        onClick={() => setAddTender(true)}
                        className="flex items-center gap-2 bg-[#2e5f9b] text-white px-4 py-2 rounded-lg hover:bg-[#084c9d]"
                    >
                        <PlusCircle size={20} /> Add New Tender
                    </button>

                    <button
                        onClick={() => exportToExcel(filteredTenders)}
                        className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    >
                        <FileSpreadsheet size={18} /> Export to Excel
                    </button>

                    <button
                        onClick={() => exportToPDF(filteredTenders)}
                        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        <FileText size={18} /> Export to PDF
                    </button>
                </div>
            </div>

            {/* 🔹 TENDER TABLE */}
            <table className="w-full border-collapse bg-white rounded-sm">
                <thead>
                    <tr className="text-left border-b-2 border-gray-400">
                        <th className="pl-5">Tender/RFQ ID</th>
                        <th className="p-2">Tender Description</th>
                        <th className="p-2">Reference No.</th>
                        <th className="p-2">Department</th>
                        <th className="p-2">End Date</th>
                        <th className="p-2">Status</th>
                        <th className="p-2">Visiablity</th>
                        <th className="pr-5 p-2 text-end">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredTenders?.map((tender) => (
                        <TenderCard
                            key={tender.tenderId}
                            tender={tender}
                            singleTenderpageModel={() => setSelectedTender(tender)}
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
            {selectedTender && (
                <SingleTenderPage
                    tenderData={selectedTender}
                    onClose={() => setSelectedTender(null)}
                    onSave={handleTenderUpdate}
                />
            )}
        </div>
    );
}
