"use client";

import { useEffect, useRef, useState } from "react";
import { FileSpreadsheet, FileText, Pencil, Save, X } from "lucide-react";
import { exportToPDF } from "@/utils/Export/exportPdf";
import { exportTenderToExcel } from "@/utils/Export/exportSingleTenderExcel";
import { callApi } from "@/utils/api";
import Loader from "@/components/common/Loader";
import BoqSection from "../TenderSections/BoqSection";
import RequiredAttachmentsSection from "../TenderSections/RequiredAttachmentsSection";
import GeneralInfoSection from "../TenderSections/GeneralInfoSection";
import DateScheduleSection from "../TenderSections/DateScheduleSection";
import PreBidSection from "../TenderSections/PreBidSection";
import PaymentsSection from "../TenderSections/PaymentsSection";
import GeneralParticularsSection from "../TenderSections/GeneralParticularsSection";
import TermsConditionsSection from "../TenderSections/TermsConditionsSection";
import AttachmentsSection from "../TenderSections/AttachmentsSection";

export default function SingleTenderViewPage({ tender_id, onClose }) {

    const [editMode, setEditMode] = useState(false);
    const [tenderData, setTenderData] = useState(null);
    const [form, setForm] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [updateLoading, setUpdateLoading] = useState(false);

    const modalRef = useRef(null);

    const fetchData = async () => {
        if (!tender_id) {
            setErrorMessage("Tender ID required");
            setLoading(false);
            return;
        }
        setLoading(true);
        try {
            const response = await callApi(`/tender/${tender_id}`, "GET");

            if (response?.success) {
                const tender = response.data;
                setTenderData(tender);
                setForm({
                    ...tender,
                    generalInformation: tender.generalInformation || {},
                    dateSchedule: tender.dateSchedule || {},
                    preBidDiscussion: tender.preBidDiscussion || {},
                    payments: tender.payments || [],
                    generalParticulars: tender.generalParticulars || [],
                    termsAndConditions: tender.termsAndConditions || [],
                    attachments: tender.attachments || [],
                    requiredAttachments: tender.requiredAttachments || [],
                    boq: tender.boq || [],
                });

            } else {
                setErrorMessage(response?.message || "Something went wrong");
            }
        } catch (err) {
            setErrorMessage("Error: " + err.message);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [tender_id]);

    useEffect(() => {

        setTimeout(() => {
            if (errorMessage) {
                setErrorMessage(null);
                onClose();
            }
        }, 1000);

        function closeModal(e) {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        }
        document.addEventListener("mousedown", closeModal);
        return () => document.removeEventListener("mousedown", closeModal);
    }, [errorMessage, onClose]);

    const updateTenderHandle = async () => {
        setUpdateLoading(true);
        try {
            const response = await callApi(`/tender/${tender_id}`, "PATCH", form);
            console.log(response);
            if (response) {
                if (response.success) {
                    alert("Tender Data is Updated Successfully");
                    //onClose();
                    fetchData();

                }
                else {
                    let str = `Error: ${response.message}. Please try after some time!`
                    alert(str);
                }
            }
            else {
                alert("Network error!!");
            }

        } catch (error) {
            let str = `Error: ${error.message}`
            alert(str);
        } finally {
            setEditMode(false);
            setUpdateLoading(false);
        }

    };

    const update = (section, key, value) => {
        setForm(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [key]: value
            }
        }));
    };

    const updateArray = (section, index, key, value) => {
        setForm(prev => {
            const updated = [...prev[section]];
            updated[index] = { ...updated[index], [key]: value };

            return { ...prev, [section]: updated };
        });
    };

    return (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 overflow-auto">
            {
                loading ?
                    <div ref={modalRef} className="w-full h-full">
                        <Loader />
                    </div>
                    :
                    errorMessage ?
                        <div ref={modalRef} className="bg-red-400/30 p-5 text-lg text-white font-semibold border-4 border-red-600 rounded-md">
                            <h2>{errorMessage}</h2>
                        </div>
                        :
                        <div
                            ref={modalRef}
                            className="p-6 bg-white shadow-xl rounded-md w-[1100px] mx-auto overflow-y-auto h-[95%] border-4 border-gray-300"
                        >

                            {/* HEADER */}
                            <div className="flex justify-between items-center bg-[#084c9d] px-3 py-2 rounded-sm text-white mb-4">
                                <h1 className="text-2xl font-bold">
                                    Tender <span className="text-lg">({form?.tenderId})</span>
                                </h1>
                                <button onClick={onClose}>
                                    <X size={22} />
                                </button>
                            </div>

                            {/* ACTION BUTTONS */}
                            <div className="flex justify-between mb-4">

                                {/* Export Buttons */}
                                <div className="flex gap-3">
                                    <button
                                        disabled={editMode}
                                        className={`px-4 py-2 rounded flex items-center gap-2 ${editMode
                                            ? "bg-gray-300 text-gray-500"
                                            : "bg-red-600 text-white hover:bg-red-700"
                                            }`}
                                        onClick={() => exportToPDF(form)}
                                    >
                                        <FileText size={18} /> PDF
                                    </button>

                                    <button
                                        disabled={editMode}
                                        className={`px-4 py-2 rounded flex items-center gap-2 ${editMode
                                            ? "bg-gray-300 text-gray-500"
                                            : "bg-green-600 text-white hover:bg-green-700"
                                            }`}
                                        onClick={() => exportTenderToExcel(form)}
                                    >
                                        <FileSpreadsheet size={18} /> Excel
                                    </button>
                                </div>

                                {/* Edit / Save */}
                                <div className="flex gap-3">
                                    {!editMode ? (
                                        <button
                                            className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700"
                                            onClick={() => setEditMode(true)}
                                        >
                                            <Pencil size={18} /> Edit
                                        </button>
                                    ) : (
                                        <button
                                            className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-700"
                                            onClick={() => updateTenderHandle()}
                                        >
                                            <Save size={18} /> Save
                                        </button>
                                    )}

                                    {!editMode ? (
                                        <button
                                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                                            onClick={onClose}
                                        >
                                            Close
                                        </button>
                                    ) : (
                                        <button
                                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                                            onClick={() => {
                                                setForm(tenderData);
                                                setEditMode(false);
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    )}
                                </div>
                            </div>

                            {form && (
                                <>
                                    <GeneralInfoSection
                                        data={form.generalInformation}
                                        editMode={editMode}
                                        onChange={(field, value) => update("generalInformation", field, value)}
                                    />

                                    <DateScheduleSection
                                        data={form.dateSchedule}
                                        editMode={editMode}
                                        onChange={(field, value) => update("dateSchedule", field, value)}
                                    />

                                    <PreBidSection
                                        data={form.preBidDiscussion}
                                        editMode={editMode}
                                        onChange={(field, value) => update("preBidDiscussion", field, value)}
                                    />

                                    <PaymentsSection
                                        data={form.payments}
                                        editMode={editMode}
                                        onChange={(index, field, value) =>
                                            updateArray("payments", index, field, value)
                                        }
                                    />

                                    <GeneralParticularsSection
                                        data={form.generalParticulars}
                                        editMode={editMode}
                                        onChange={(index, field, value) =>
                                            updateArray("generalParticulars", index, field, value)
                                        }
                                    />

                                    <TermsConditionsSection
                                        data={form.termsAndConditions}
                                        editMode={editMode}
                                        onChange={(index, field, value) =>
                                            updateArray("termsAndConditions", index, field, value)
                                        }
                                    />

                                    <AttachmentsSection
                                        data={form.attachments}
                                        editMode={editMode}
                                        onChange={(index, field, value) =>
                                            updateArray("attachments", index, field, value)
                                        }
                                    />

                                    <RequiredAttachmentsSection
                                        data={form.requiredAttachments}
                                        editMode={editMode}
                                        onChange={(index, field, value) =>
                                            updateArray("requiredAttachments", index, field, value)
                                        }
                                    />

                                    <BoqSection
                                        data={form.boq}
                                        editMode={editMode}
                                        onChange={(index, field, value) =>
                                            updateArray("boq", index, field, value)
                                        }
                                    />
                                </>
                            )}

                            {updateLoading &&
                                <div className="w-full h-full bg-black/50">
                                    <Loader />
                                </div>
                            }

                        </div>
            }
        </div>
    );
}
