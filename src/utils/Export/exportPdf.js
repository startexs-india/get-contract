"use client";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportToPDF = (data) => {
    const doc = new jsPDF();

    doc.text("Tender Report", 14, 16);

    const headers = [
        "Title",
        "Description",
        "Budget",
        "Deadline",
        "Due Date",
        "Post Date",
        "TDR",
        "Tender Authority",
        "Tender Brief",
        "Bidding Type",
        "Competition Type",
        "State",
        "City",
        "Last Bid Date",
        "Tender Value",
        "Visibility",
    ];

    const tableData = data.map(t => [
        t.title || "",
        t.description || "",
        t.budget || "",
        t.deadline || "",
        t.dueDate || "",
        t.postDate || "",
        t.tdr || "",
        t.tenderAuthority || "",
        t.tenderBrief || "",
        t.biddingType || "",
        t.competitionType || "",
        t.state || "",
        t.city || "",
        t.lastBidDate || "",
        t.tenderValue || "",
        t.isPublic ? "Public" : "Private",
    ]);

    autoTable(doc, {
        head: [headers],
        body: tableData,
        startY: 25,
        styles: { fontSize: 7 },          // smaller font to fit wide data
        headStyles: { fillColor: [40, 40, 40] },  // dark header background
        margin: { left: 10, right: 10 },
        tableWidth: 'auto',
    });

    doc.save("tenders-full-report.pdf");
};
