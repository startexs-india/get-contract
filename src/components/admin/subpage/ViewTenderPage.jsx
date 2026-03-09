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
import TenderCardMobile from "../Cards/TenderCardMobile";

export default function ViewTenderPage({ setAddTender }) {

    const [search, setSearch] = useState("");
    const [tenders, setTenders] = useState([]);
    const [openUpload, setOpenUpload] = useState(false);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedTenderId, setSelectedTenderId] = useState(null);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    const limit = 20;
    const visiblePages = 3;
    let startPage = Math.max(1, page - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);
    if (endPage - startPage < visiblePages - 1) {
        startPage = Math.max(1, endPage - visiblePages + 1);
    }


    const fetchAllTenders = async (currentPage = 1) => {
        setLoading(true);
        setErrorMessage("");

        try {

            const response = await callApi(
                `/tender/list?page=${currentPage}&limit=${limit}`,
                "GET"
            );

            if (response?.success) {

                setTenders(response.data);
                const totalCount = response.meta.total;
                setTotal(totalCount);
                setTotalPages(Math.ceil(totalCount / limit));

            } else {
                setErrorMessage(response?.message || "Error fetching tenders");
            }

        } catch (error) {
            setErrorMessage(error?.message || "Server Error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllTenders(page);
    }, [page]);


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
        const departments = t?.department || [];
        const desc = t?.description || "";
        const tenderReferenceNo = t?.tenderReferenceNo || "";
        const externalSystemDisplayTenderId = t?.externalSystemDisplayTenderId || "";

        const searchText = search.toLowerCase();

        const departmentMatch = departments.some((dept) =>
            dept.toLowerCase().includes(searchText)
        );

        return (
            departmentMatch ||
            desc.toLowerCase().includes(searchText) ||
            tenderReferenceNo.toLowerCase().includes(searchText)
            || externalSystemDisplayTenderId.toLowerCase().includes(searchText)
        );
    });


    const startResizing = (index) => (e) => {
        const startX = e.clientX;
        const col = document.querySelectorAll("col")[index];
        const startWidth = col.offsetWidth;

        const onMouseMove = (e) => {
            const newWidth = startWidth + (e.clientX - startX);
            col.style.width = `${newWidth}px`;
        };

        const onMouseUp = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    };

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
                        className="flex items-center gap-2 bg-[#2e5f9b] text-white px-2 py-1 rounded-md hover:bg-[#084c9d]"
                    >
                        <PlusCircle size={20} />
                        <span className="hidden md:flex">Upload</span>
                        <span className="flex"> Excel</span>
                    </button>

                    {/* Add New Tender */}
                    <button
                        onClick={() => setAddTender(true)}
                        className="flex items-center gap-2 bg-[#2e5f9b] text-white px-2 py-1 rounded-md hover:bg-[#084c9d]"
                    >
                        <PlusCircle size={20} />
                        <span className="hidden md:flex">New </span>
                        <span className="flex">Tender</span>
                    </button>

                    {/* Export Excel */}
                    <button
                        onClick={() => exportToExcel(filteredTenders)}
                        className="flex items-center gap-2 bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600"
                    >
                        <FileSpreadsheet size={18} />
                        <span className="flex">Excel</span>
                    </button>

                    {/* Export PDF */}
                    <button
                        onClick={() => exportToPDF(filteredTenders)}
                        className="flex items-center gap-2 bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
                    >
                        <FileText size={18} />
                        <span className="flex">PDF</span>
                    </button>
                </div>
            </div>

            {/* 🔹 TENDER TABLE FOR DEAKTOP SCREEN */}
            <div className="overflow-x-auto">
                <table className=" w-full table-fixed border-collapse bg-white rounded-sm">
                    <colgroup>
                        <col style={{ width: "150px" }} />
                        <col style={{ width: "300px" }} />
                        <col style={{ width: "120px" }} />
                        <col style={{ width: "180px" }} />
                        <col style={{ width: "220px" }} />
                        <col style={{ width: "160px" }} />
                        <col style={{ width: "90px" }} />
                        <col style={{ width: "50px" }} />
                    </colgroup>
                    <thead>
                        <tr className="text-left border-b-2 border-gray-200 text-sm lg:text-[16px]">
                            <th className="pl-5 relative border-r-2 border-gray-400">Tender/RFQ ID
                                <div
                                    onMouseDown={startResizing(0)}
                                    className="absolute top-0 right-0 h-full w-[5px] cursor-col-resize hover:bg-blue-400"
                                /></th>
                            <th className="p-2 relative border-r-2 border-gray-300 ">Tender Description
                                <div
                                    onMouseDown={startResizing(1)}
                                    className="absolute top-0 right-0 h-full w-[5px] cursor-col-resize hover:bg-blue-400"
                                /></th>
                            <th className="p-2 relative border-r-2 border-gray-300">By Amount
                                <div
                                    onMouseDown={startResizing(2)}
                                    className="absolute top-0 right-0 h-full w-[5px] cursor-col-resize hover:bg-blue-400"
                                />
                            </th>
                            <th className="p-2 relative border-r-2 border-gray-300">Reference No.
                                <div
                                    onMouseDown={startResizing(3)}
                                    className="absolute top-0 right-0 h-full w-[5px] cursor-col-resize hover:bg-blue-400"
                                />
                            </th>
                            <th className="p-2 relative border-r-2 border-gray-300">Department
                                <div
                                    onMouseDown={startResizing(4)}
                                    className="absolute top-0 right-0 h-full w-[5px] cursor-col-resize hover:bg-blue-400"
                                />
                            </th>
                            <th className="p-2 relative border-r-2 border-gray-300">End Date
                                <div
                                    onMouseDown={startResizing(5)}
                                    className="absolute top-0 right-0 h-full w-[5px] cursor-col-resize hover:bg-blue-400"
                                />
                            </th>
                            <th className="p-2 relative border-r-2 border-gray-300">Status
                                <div
                                    onMouseDown={startResizing(6)}
                                    className="absolute top-0 right-0 h-full w-[5px] cursor-col-resize hover:bg-blue-400"
                                />
                            </th>
                            {/* <th className="p-2">Visiablity</th> */}
                            <th className="pr-5 p-2 relative">Action
                                <div
                                    onMouseDown={startResizing(7)}
                                    className="absolute top-0 right-0 h-full w-[5px] cursor-col-resize hover:bg-blue-400"
                                />
                            </th>
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
            </div>

            {/* 🔹 TENDER TABLE FOR MOBILE SCREEN */}
            {/* <div className="lg:hidden flex flex-col gap-3">
                {filteredTenders?.map((tender) => (
                    <TenderCardMobile
                        key={tender._id}
                        tender={tender}
                        onOpenTender={() => setSelectedTenderId(tender._id)}
                    />
                ))}
            </div> */}

            <p className="w-full justify-end text-end text-sm p-2 text-black">
                Showing {(page - 1) * limit + 1} -
                {Math.min(page * limit, total)} of {total} tenders
            </p>


            {/* Paginaiton code */}
            <div className="w-full flex justify-end gap-2">

                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className="px-2 py-1 border rounded disabled:opacity-40"
                >
                    Prev
                </button>

                {startPage > 1 && (
                    <>
                        <button
                            onClick={() => setPage(1)}
                            className="px-2 py-1 border rounded"
                        >
                            1
                        </button>

                        {startPage > 2 && <span className="px-2">...</span>}
                    </>
                )}

                {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
                    const pageNumber = startPage + i;

                    return (
                        <button
                            key={pageNumber}
                            onClick={() => setPage(pageNumber)}
                            className={`flex gap-1 px-2 py-1 border rounded ${page === pageNumber
                                ? "text-blue-500"
                                : ""
                                }`}
                        >
                            {pageNumber}
                        </button>
                    );
                })}

                {endPage < totalPages && (
                    <>
                        {endPage < totalPages - 1 && (
                            <span className="px-2">...</span>
                        )}

                        <button
                            onClick={() => setPage(totalPages)}
                            className="px-2 py-1 border rounded"
                        >
                            {totalPages}
                        </button>
                    </>
                )}

                <button
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                    className="px-2 py-1 border rounded disabled:opacity-40"
                >
                    Next
                </button>
            </div>

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
