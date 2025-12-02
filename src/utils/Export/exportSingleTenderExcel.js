import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export function exportTenderToExcel(tender) {
    const workbook = XLSX.utils.book_new();

    //--------------------------------------------
    // Helper: Convert Object → 2-column Sheet
    //--------------------------------------------
    const objectToSheet = (obj) => {
        const rows = Object.entries(obj).map(([key, value]) => ({
            Field: key,
            Value: typeof value === "object" ? JSON.stringify(value) : value,
        }));
        return XLSX.utils.json_to_sheet(rows);
    };

    //--------------------------------------------
    // Helper: Convert Array → Table Sheet
    //--------------------------------------------
    const arrayToSheet = (arr) => {
        return XLSX.utils.json_to_sheet(
            arr.map((item) => {
                const row = {};
                for (const key in item) {
                    row[key] =
                        typeof item[key] === "object"
                            ? JSON.stringify(item[key])
                            : item[key];
                }
                return row;
            })
        );
    };

    //--------------------------------------------
    // Add Workbook Sheets
    //--------------------------------------------
    XLSX.utils.book_append_sheet(
        workbook,
        objectToSheet(tender.generalInformation),
        "General Information"
    );

    XLSX.utils.book_append_sheet(
        workbook,
        objectToSheet(tender.dateSchedule),
        "Date Schedule"
    );

    XLSX.utils.book_append_sheet(
        workbook,
        objectToSheet(tender.preBidDiscussion),
        "Pre-Bid Discussion"
    );

    XLSX.utils.book_append_sheet(
        workbook,
        arrayToSheet(tender.payments),
        "Payments"
    );

    XLSX.utils.book_append_sheet(
        workbook,
        arrayToSheet(tender.generalParticulars),
        "General Particulars"
    );

    XLSX.utils.book_append_sheet(
        workbook,
        arrayToSheet(tender.termsAndConditions),
        "Terms & Conditions"
    );

    XLSX.utils.book_append_sheet(
        workbook,
        arrayToSheet(tender.attachments),
        "Attachments"
    );

    XLSX.utils.book_append_sheet(
        workbook,
        arrayToSheet(tender.requiredAttachments),
        "Required Attachments"
    );

    XLSX.utils.book_append_sheet(
        workbook,
        arrayToSheet(tender.boq),
        "BOQ"
    );

    // META
    if (tender.meta) {
        XLSX.utils.book_append_sheet(
            workbook,
            objectToSheet(tender.meta),
            "Meta"
        );
    }

    //--------------------------------------------
    // Export File
    //--------------------------------------------
    const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
    });

    const blob = new Blob([excelBuffer], {
        type: "application/octet-stream",
    });

    saveAs(blob, `${tender.tenderId || "Tender"}.xlsx`);
}
