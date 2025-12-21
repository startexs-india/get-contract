"use client";
import { useState } from "react";
import * as XLSX from "xlsx";
import { X } from "lucide-react";

export default function UploadExcel({ isOpen, onClose }) {
    const [excelData, setExcelData] = useState([]);

    // Read Excel File
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (evt) => {
            const bstr = evt.target.result;
            const workbook = XLSX.read(bstr, { type: "binary" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(sheet);
            setExcelData(data);
        };

        reader.readAsBinaryString(file);
    };

    // Send to Backend API
    const handleSubmit = async () => {
        try {
            const res = await fetch("/api/upload-tenders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(excelData),
            });

            if (res.ok) {
                alert("Tenders uploaded successfully!");
                onClose();
            } else {
                alert("Error uploading tenders!");
            }
        } catch (error) {
            console.error(error);
            alert("Server error!");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-[600px] p-6">

                {/* HEADER */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Upload Tender Excel</h2>
                    <button onClick={onClose}>
                        <X className="w-6 h-6 text-red-600 hover:text-red-700" />
                    </button>
                </div>

                {/* FILE INPUT */}
                <input
                    type="file"
                    accept=".xlsx, .xls"
                    className="border p-2 w-full"
                    onChange={handleFileUpload}
                />

                {/* PREVIEW */}
                {excelData.length > 0 && (
                    <div className="mt-4 max-h-56 overflow-auto border p-3 rounded-lg">
                        <h3 className="font-semibold mb-2">Preview Data:</h3>
                        <table className="w-full border text-sm">
                            <thead>
                                <tr>
                                    {Object.keys(excelData[0]).map((key) => (
                                        <th key={key} className="border px-2 py-1 bg-gray-100">
                                            {key}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {excelData.map((row, idx) => (
                                    <tr key={idx}>
                                        {Object.values(row).map((value, i) => (
                                            <td key={i} className="border px-2 py-1">
                                                {value}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* BUTTONS */}
                <div className="mt-4 flex justify-end gap-2">
                    <button
                        className="bg-gray-400 text-white px-4 py-1 rounded-lg hover:bg-gray-500"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        disabled={excelData.length === 0}
                        className="bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700 disabled:bg-gray-400"
                        onClick={handleSubmit}
                    >
                        Upload to Database
                    </button>
                </div>

            </div>
        </div>
    );
}
