// utils/exportSingleTenderPdf.js
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";   // ✔ CORRECT IMPORT

export const exportSingleTenderToPDF = (tender) => {
    const doc = new jsPDF();

    doc.text("Tender Details Report", 14, 16);

    const rows = Object.entries(tender).map(([key, value]) => [
        key.replace(/([A-Z])/g, " $1").toUpperCase(),
        value?.toString(),
    ]);

    autoTable(doc, {
        head: [["Field", "Value"]],
        body: rows,
        startY: 25,
    });

    doc.save(`${tender?.tenderRefNo || "tender"}_details.pdf`);
};
