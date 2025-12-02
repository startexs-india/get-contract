"use client";

import { useEffect, useRef, useState } from "react";
import { FileSpreadsheet, FileText, Pencil, Save, X } from "lucide-react";
import { exportToPDF } from "@/utils/Export/exportPdf";
import { exportTenderToExcel } from "@/utils/Export/exportSingleTenderExcel";

export default function SingleTenderViewPage({ tenderData, onSave, onClose }) {
    const [editMode, setEditMode] = useState(false);
    const [form, setForm] = useState(tenderData);
    const modalRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose(); // Close modal
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    const update = (section, key, value) => {
        setForm((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [key]: value,
            },
        }));
    };

    const updateArray = (section, index, key, value) => {
        const updated = [...form[section]];
        updated[index][key] = value;
        setForm((prev) => ({ ...prev, [section]: updated }));
    };

    const save = () => {
        onSave(form);
        setEditMode(false);
    };

    const renderSection = (title, sectionObj, sectionKey) => (
        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">{title}</h2>

            <div className="grid grid-cols-2 border border-gray-300">
                {Object.entries(sectionObj).map(([key, val]) => (
                    <div key={key} className="border p-3 flex justify-between">

                        <div className="text-gray-500 text-sm font-semibold">
                            {key.replace(/([A-Z])/g, " $1").toUpperCase()}
                        </div>

                        {!editMode ? (
                            <div className="text-gray-900">{JSON.stringify(val)}</div>
                        ) : (
                            <input
                                className="border-2 border-gray-300 w-full rounded px-2 py-1"
                                value={val || ""}
                                onChange={(e) => update(sectionKey, key, e.target.value)}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    const renderArraySection = (title, arrData, sectionKey) => (
        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">{title}</h2>

            {arrData.map((item, idx) => (
                <div
                    key={idx}
                    className="grid grid-cols-2 border border-gray-300 mb-3"
                >
                    {Object.entries(item).map(([key, val]) => (
                        <div key={key} className="border p-3">
                            <div className="text-gray-500 text-sm font-semibold">
                                {key.replace(/([A-Z])/g, " $1").toUpperCase()}
                            </div>

                            {!editMode ? (
                                <div className="text-gray-900">{val}</div>
                            ) : (
                                <input
                                    className="border-2 border-gray-300 w-full rounded px-2 py-1"
                                    value={val || ""}
                                    onChange={(e) =>
                                        updateArray(sectionKey, idx, key, e.target.value)
                                    }
                                />
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );

    return (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 overflow-auto">
            <div ref={modalRef} className="p-6 bg-white shadow-xl rounded-md w-[1100px] mx-auto mt-6 overflow-y-auto h-[90%] border-4 border-gray-400">

                {/* HEADER */}
                <div className="flex justify-between items-center bg-[#084c9d] px-2 rounded-sm text-white mb-4">
                    <h1 className="text-2xl font-bold py-2">Tender
                        <span className="text-lg"> ({tenderData.tenderId})
                        </span>
                    </h1>
                </div>
                <div className="w-full flex justify-between">

                    {/* LEFT — EXPORT BUTTONS */}
                    <div className="flex items-center gap-3">

                        {/* Export PDF */}
                        <button
                            className={`px-4 py-2 rounded flex items-center gap-2
                ${editMode
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "bg-red-600 text-white hover:bg-red-700"
                                }`}
                            onClick={() => exportToPDF(form)}
                            disabled={editMode}
                        >
                            <FileText size={18} />
                            Export PDF
                        </button>

                        {/* Export Excel */}
                        <button
                            className={`px-4 py-2 rounded flex items-center gap-2
                ${editMode
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "bg-green-600 text-white hover:bg-green-700"
                                }`}
                            onClick={() => exportTenderToExcel(form)}
                            disabled={editMode}
                        >
                            <FileSpreadsheet size={18} />
                            Export Excel
                        </button>

                    </div>

                    {/* RIGHT — EDIT / SAVE / CLOSE / CANCEL */}
                    <div className="flex items-center gap-3">

                        {!editMode ? (
                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700"
                                onClick={() => setEditMode(true)}
                            >
                                <Pencil size={18} />
                                Edit
                            </button>
                        ) : (
                            <button
                                className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-700"
                                onClick={save}
                            >
                                <Save size={18} />
                                Save
                            </button>
                        )}

                        {!editMode ? (
                            <button
                                className="bg-gray-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-600"
                                onClick={onClose}
                            >
                                <X size={18} />
                                Close
                            </button>
                        ) : (
                            <button
                                className="bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-red-700"
                                onClick={() => {
                                    setForm(tenderData);
                                    setEditMode(false);
                                }}
                            >
                                <X size={18} />
                                Cancel
                            </button>
                        )}

                    </div>

                </div>

                {/* RENDER ALL SCHEMA SECTIONS */}
                {renderSection("General Information", form.generalInformation, "generalInformation")}

                {renderSection("Date Schedule", form.dateSchedule, "dateSchedule")}

                {renderSection("Pre-Bid Discussion", form.preBidDiscussion, "preBidDiscussion")}

                {renderArraySection("Payments", form.payments, "payments")}

                {renderArraySection("General Particulars", form.generalParticulars, "generalParticulars")}

                {renderArraySection("Terms & Conditions", form.termsAndConditions, "termsAndConditions")}

                {renderArraySection("Attachments", form.attachments, "attachments")}

                {renderArraySection("Required Attachments", form.requiredAttachments, "requiredAttachments")}

                {renderArraySection("BOQ Items", form.boq, "boq")}

            </div>
        </div>
    );
}
