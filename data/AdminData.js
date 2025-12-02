export const statsDataStatic = [
    { title: "Total Users", value: 1240 },
    { title: "Active Tenders", value: 32 },
    { title: "Assigned Tenders", value: 26 },
    { title: "Prime Members", value: 14 },
];

export const recentTendersStatic = [
    { name: "Road Construction Project", status: "Active", color: "text-blue-600" },
    { name: "Office Stationery Supply", status: "Completed", color: "text-green-600" },
    { name: "IT Infrastructure Upgrade", status: "Pending", color: "text-yellow-600" },
];

export const recentUsersStatic = [
    { name: "Rahul Sharma", email: "rahul@gmail.com", role: "Admin", status: "Active", color: "text-green-600" },
    { name: "Neha Verma", email: "neha@gmail.com", role: "User", status: "Pending", color: "text-blue-600" },
    { name: "Amit Singh", email: "amit@gmail.com", role: "Manager", status: "Blocked", color: "text-red-500" },
];

// data/users.js
export const users = [
    {
        id: 1,
        name: "Rahul Sharma",
        email: "rahul@example.com",
        role: "Admin",
        status: "Active",
    },
    {
        id: 2,
        name: "Amit Verma",
        email: "amit@example.com",
        role: "User",
        status: "Pending",
    },
    {
        id: 3,
        name: "Priya Singh",
        email: "priya@example.com",
        role: "Manager",
        status: "Suspended",
    },
];

// data/AdminData.js

export const dummyTenders = [
    {
        "tenderId": "TND001",
        "generalInformation": {
            "bidParts": 2,
            "category": "ITEM RATE",
            "tenderCreator": "Mr. Ajeet Kumar (MD)",
            "organizationHierarchy": [
                "Government of Bihar",
                "BFDCL",
                "Head Office"
            ],
            "systemTenderNo": "118315",
            "tenderReferenceNo": "BFDCL/NIQ/2026-27/A",
            "tenderTitle": "Purchase of Kendu Leaves Lots",
            "procurementCategory": "GENERAL",
            "tenderCurrency": "INR",
            "biddingCurrency": "INR",
            "tenderType": "Open Tender",
            "estimatedValueVisibilityFlag": "N",
            "minimumNumberOfBids": 2,
            "rankingSequence": "H1 Ranking",
            "offerValidityInDays": 365,
            "tenderIssuingAuthorityName": "Shri Alok Kumar",
            "tenderApprovingAuthorityName": "Shri Alok Kumar",
            "detailedDescription": "Advance purchase of Kendu leaves from Aurangabad range.",
            "shortTenderReason": "Seasonal tender",
            "NIT": "Tender for purchase of Kendu leaves.",
            "createdate": 1700000000,
            "createdOn": {
                "raw": "2025-12-01T10:00:00Z",
                "formatted": "01 Dec 2025"
            }
        },
        "dateSchedule": {
            "bidSubmissionStartDate": {
                "raw": "2025-12-02T10:00:00Z",
                "formatted": "02 Dec 2025"
            },
            "bidSubmissionDueDate": {
                "raw": "2025-12-20T17:00:00Z",
                "formatted": "20 Dec 2025"
            },
            "bidOpenDate": {
                "raw": "2025-12-21T15:00:00Z",
                "formatted": "21 Dec 2025"
            },
            "physicalDocSubmissionEndDate": {
                "raw": "2025-12-20T00:00:00Z",
                "formatted": "20 Dec 2025"
            }
        },
        "preBidDiscussion": {
            "discussionType": "OFFLINE",
            "meetingStartDate": {
                "raw": "2025-12-05T14:00:00Z",
                "formatted": "05 Dec 2025"
            },
            "meetingEndDate": {
                "raw": "2025-12-05T15:00:00Z",
                "formatted": "05 Dec 2025"
            },
            "venue": "BFDCL Head Office",
            "remarks": ""
        },
        "payments": [
            {
                "paymentType": "EMD",
                "amount": 25000,
                "paymentMode": "Challan/IPG",
                "paymentCurrency": "INR",
                "exemptionAllowed": "N",
                "exemptionReason": ""
            }
        ],
        "generalParticulars": [
            {
                "label": "Name of Bidder",
                "value": ""
            },
            {
                "label": "Address",
                "value": ""
            }
        ],
        "termsAndConditions": [
            {
                "clauseNo": "01",
                "specification": "Standard terms apply",
                "attachment": ""
            }
        ],
        "attachments": [
            {
                "label": "NIQ",
                "fileName": "niq.pdf",
                "url": "https://example.com/niq.pdf"
            }
        ],
        "requiredAttachments": [
            {
                "supportingDocument": "PAN Card",
                "mandatory": "Y",
                "allowExemption": "N"
            }
        ],
        "boq": [
            {
                "itemName": "Kendu Leaves Lot A",
                "quantity": 1,
                "uom": "Lot",
                "rate": 0
            }
        ],
        "meta": {
            "createdBy": "System",
            "createdOn": {
                "raw": "2025-12-01T10:00:00Z",
                "formatted": "01 Dec 2025"
            },
            "source": "BFDCL",
            "sourceUrl": "https://bihar.gov.in"
        },
        "isDeleted": false,
        "isActive": true,
        "adminId": null,
        "status": "ACTIVE",
        "cancelReason": "",
        "cancelTime": null
    },
    {
        "tenderId": "TND002",
        "generalInformation": {
            "bidParts": 2,
            "category": "ITEM RATE",
            "tenderCreator": "Mr. Ajeet Kumar (MD)",
            "organizationHierarchy": [
                "Government of Bihar",
                "BFDCL",
                "Head Office"
            ],
            "systemTenderNo": "118315",
            "tenderReferenceNo": "BFDCL/NIQ/2026-27/A",
            "tenderTitle": "Purchase of Kendu Leaves Lots",
            "procurementCategory": "GENERAL",
            "tenderCurrency": "INR",
            "biddingCurrency": "INR",
            "tenderType": "Open Tender",
            "estimatedValueVisibilityFlag": "N",
            "minimumNumberOfBids": 2,
            "rankingSequence": "H1 Ranking",
            "offerValidityInDays": 365,
            "tenderIssuingAuthorityName": "Shri Alok Kumar",
            "tenderApprovingAuthorityName": "Shri Alok Kumar",
            "detailedDescription": "Advance purchase of Kendu leaves from Aurangabad range.",
            "shortTenderReason": "Seasonal tender",
            "NIT": "Tender for purchase of Kendu leaves.",
            "createdate": 1700000000,
            "createdOn": {
                "raw": "2025-12-01T10:00:00Z",
                "formatted": "01 Dec 2025"
            }
        },
        "dateSchedule": {
            "bidSubmissionStartDate": {
                "raw": "2025-12-02T10:00:00Z",
                "formatted": "02 Dec 2025"
            },
            "bidSubmissionDueDate": {
                "raw": "2025-12-20T17:00:00Z",
                "formatted": "20 Dec 2025"
            },
            "bidOpenDate": {
                "raw": "2025-12-21T15:00:00Z",
                "formatted": "21 Dec 2025"
            },
            "physicalDocSubmissionEndDate": {
                "raw": "2025-12-20T00:00:00Z",
                "formatted": "20 Dec 2025"
            }
        },
        "preBidDiscussion": {
            "discussionType": "OFFLINE",
            "meetingStartDate": {
                "raw": "2025-12-05T14:00:00Z",
                "formatted": "05 Dec 2025"
            },
            "meetingEndDate": {
                "raw": "2025-12-05T15:00:00Z",
                "formatted": "05 Dec 2025"
            },
            "venue": "BFDCL Head Office",
            "remarks": ""
        },
        "payments": [
            {
                "paymentType": "EMD",
                "amount": 25000,
                "paymentMode": "Challan/IPG",
                "paymentCurrency": "INR",
                "exemptionAllowed": "N",
                "exemptionReason": ""
            }
        ],
        "generalParticulars": [
            {
                "label": "Name of Bidder",
                "value": ""
            },
            {
                "label": "Address",
                "value": ""
            }
        ],
        "termsAndConditions": [
            {
                "clauseNo": "01",
                "specification": "Standard terms apply",
                "attachment": ""
            }
        ],
        "attachments": [
            {
                "label": "NIQ",
                "fileName": "niq.pdf",
                "url": "https://example.com/niq.pdf"
            }
        ],
        "requiredAttachments": [
            {
                "supportingDocument": "PAN Card",
                "mandatory": "Y",
                "allowExemption": "N"
            }
        ],
        "boq": [
            {
                "itemName": "Kendu Leaves Lot A",
                "quantity": 1,
                "uom": "Lot",
                "rate": 0
            }
        ],
        "meta": {
            "createdBy": "System",
            "createdOn": {
                "raw": "2025-12-01T10:00:00Z",
                "formatted": "01 Dec 2025"
            },
            "source": "BFDCL",
            "sourceUrl": "https://bihar.gov.in"
        },
        "isDeleted": false,
        "isActive": true,
        "adminId": null,
        "status": "ACTIVE",
        "cancelReason": "",
        "cancelTime": null
    },
    {
        "tenderId": "TND003",
        "generalInformation": {
            "bidParts": 2,
            "category": "ITEM RATE",
            "tenderCreator": "Mr. Ajeet Kumar (MD)",
            "organizationHierarchy": [
                "Government of Bihar",
                "BFDCL",
                "Head Office"
            ],
            "systemTenderNo": "118315",
            "tenderReferenceNo": "BFDCL/NIQ/2026-27/A",
            "tenderTitle": "Purchase of Kendu Leaves Lots",
            "procurementCategory": "GENERAL",
            "tenderCurrency": "INR",
            "biddingCurrency": "INR",
            "tenderType": "Open Tender",
            "estimatedValueVisibilityFlag": "N",
            "minimumNumberOfBids": 2,
            "rankingSequence": "H1 Ranking",
            "offerValidityInDays": 365,
            "tenderIssuingAuthorityName": "Shri Alok Kumar",
            "tenderApprovingAuthorityName": "Shri Alok Kumar",
            "detailedDescription": "Advance purchase of Kendu leaves from Aurangabad range.",
            "shortTenderReason": "Seasonal tender",
            "NIT": "Tender for purchase of Kendu leaves.",
            "createdate": 1700000000,
            "createdOn": {
                "raw": "2025-12-01T10:00:00Z",
                "formatted": "01 Dec 2025"
            }
        },
        "dateSchedule": {
            "bidSubmissionStartDate": {
                "raw": "2025-12-02T10:00:00Z",
                "formatted": "02 Dec 2025"
            },
            "bidSubmissionDueDate": {
                "raw": "2025-12-20T17:00:00Z",
                "formatted": "20 Dec 2025"
            },
            "bidOpenDate": {
                "raw": "2025-12-21T15:00:00Z",
                "formatted": "21 Dec 2025"
            },
            "physicalDocSubmissionEndDate": {
                "raw": "2025-12-20T00:00:00Z",
                "formatted": "20 Dec 2025"
            }
        },
        "preBidDiscussion": {
            "discussionType": "OFFLINE",
            "meetingStartDate": {
                "raw": "2025-12-05T14:00:00Z",
                "formatted": "05 Dec 2025"
            },
            "meetingEndDate": {
                "raw": "2025-12-05T15:00:00Z",
                "formatted": "05 Dec 2025"
            },
            "venue": "BFDCL Head Office",
            "remarks": ""
        },
        "payments": [
            {
                "paymentType": "EMD",
                "amount": 25000,
                "paymentMode": "Challan/IPG",
                "paymentCurrency": "INR",
                "exemptionAllowed": "N",
                "exemptionReason": ""
            }
        ],
        "generalParticulars": [
            {
                "label": "Name of Bidder",
                "value": ""
            },
            {
                "label": "Address",
                "value": ""
            }
        ],
        "termsAndConditions": [
            {
                "clauseNo": "01",
                "specification": "Standard terms apply",
                "attachment": ""
            }
        ],
        "attachments": [
            {
                "label": "NIQ",
                "fileName": "niq.pdf",
                "url": "https://example.com/niq.pdf"
            }
        ],
        "requiredAttachments": [
            {
                "supportingDocument": "PAN Card",
                "mandatory": "Y",
                "allowExemption": "N"
            }
        ],
        "boq": [
            {
                "itemName": "Kendu Leaves Lot A",
                "quantity": 1,
                "uom": "Lot",
                "rate": 0
            }
        ],
        "meta": {
            "createdBy": "System",
            "createdOn": {
                "raw": "2025-12-01T10:00:00Z",
                "formatted": "01 Dec 2025"
            },
            "source": "BFDCL",
            "sourceUrl": "https://bihar.gov.in"
        },
        "isDeleted": false,
        "isActive": true,
        "adminId": null,
        "status": "ACTIVE",
        "cancelReason": "",
        "cancelTime": null
    },
    {
        "tenderId": "TND004",
        "generalInformation": {
            "bidParts": 2,
            "category": "ITEM RATE",
            "tenderCreator": "Mr. Ajeet Kumar (MD)",
            "organizationHierarchy": [
                "Government of Bihar",
                "BFDCL",
                "Head Office"
            ],
            "systemTenderNo": "118315",
            "tenderReferenceNo": "BFDCL/NIQ/2026-27/A",
            "tenderTitle": "Purchase of Kendu Leaves Lots",
            "procurementCategory": "GENERAL",
            "tenderCurrency": "INR",
            "biddingCurrency": "INR",
            "tenderType": "Open Tender",
            "estimatedValueVisibilityFlag": "N",
            "minimumNumberOfBids": 2,
            "rankingSequence": "H1 Ranking",
            "offerValidityInDays": 365,
            "tenderIssuingAuthorityName": "Shri Alok Kumar",
            "tenderApprovingAuthorityName": "Shri Alok Kumar",
            "detailedDescription": "Advance purchase of Kendu leaves from Aurangabad range.",
            "shortTenderReason": "Seasonal tender",
            "NIT": "Tender for purchase of Kendu leaves.",
            "createdate": 1700000000,
            "createdOn": {
                "raw": "2025-12-01T10:00:00Z",
                "formatted": "01 Dec 2025"
            }
        },
        "dateSchedule": {
            "bidSubmissionStartDate": {
                "raw": "2025-12-02T10:00:00Z",
                "formatted": "02 Dec 2025"
            },
            "bidSubmissionDueDate": {
                "raw": "2025-12-20T17:00:00Z",
                "formatted": "20 Dec 2025"
            },
            "bidOpenDate": {
                "raw": "2025-12-21T15:00:00Z",
                "formatted": "21 Dec 2025"
            },
            "physicalDocSubmissionEndDate": {
                "raw": "2025-12-20T00:00:00Z",
                "formatted": "20 Dec 2025"
            }
        },
        "preBidDiscussion": {
            "discussionType": "OFFLINE",
            "meetingStartDate": {
                "raw": "2025-12-05T14:00:00Z",
                "formatted": "05 Dec 2025"
            },
            "meetingEndDate": {
                "raw": "2025-12-05T15:00:00Z",
                "formatted": "05 Dec 2025"
            },
            "venue": "BFDCL Head Office",
            "remarks": ""
        },
        "payments": [
            {
                "paymentType": "EMD",
                "amount": 25000,
                "paymentMode": "Challan/IPG",
                "paymentCurrency": "INR",
                "exemptionAllowed": "N",
                "exemptionReason": ""
            }
        ],
        "generalParticulars": [
            {
                "label": "Name of Bidder",
                "value": ""
            },
            {
                "label": "Address",
                "value": ""
            }
        ],
        "termsAndConditions": [
            {
                "clauseNo": "01",
                "specification": "Standard terms apply",
                "attachment": ""
            }
        ],
        "attachments": [
            {
                "label": "NIQ",
                "fileName": "niq.pdf",
                "url": "https://example.com/niq.pdf"
            }
        ],
        "requiredAttachments": [
            {
                "supportingDocument": "PAN Card",
                "mandatory": "Y",
                "allowExemption": "N"
            }
        ],
        "boq": [
            {
                "itemName": "Kendu Leaves Lot A",
                "quantity": 1,
                "uom": "Lot",
                "rate": 0
            }
        ],
        "meta": {
            "createdBy": "System",
            "createdOn": {
                "raw": "2025-12-01T10:00:00Z",
                "formatted": "01 Dec 2025"
            },
            "source": "BFDCL",
            "sourceUrl": "https://bihar.gov.in"
        },
        "isDeleted": false,
        "isActive": true,
        "adminId": null,
        "status": "ACTIVE",
        "cancelReason": "",
        "cancelTime": null
    },
    {
        "tenderId": "TND005",
        "generalInformation": {
            "bidParts": 2,
            "category": "ITEM RATE",
            "tenderCreator": "Mr. Ajeet Kumar (MD)",
            "organizationHierarchy": [
                "Government of Bihar",
                "BFDCL",
                "Head Office"
            ],
            "systemTenderNo": "118315",
            "tenderReferenceNo": "BFDCL/NIQ/2026-27/A",
            "tenderTitle": "Purchase of Kendu Leaves Lots",
            "procurementCategory": "GENERAL",
            "tenderCurrency": "INR",
            "biddingCurrency": "INR",
            "tenderType": "Open Tender",
            "estimatedValueVisibilityFlag": "N",
            "minimumNumberOfBids": 2,
            "rankingSequence": "H1 Ranking",
            "offerValidityInDays": 365,
            "tenderIssuingAuthorityName": "Shri Alok Kumar",
            "tenderApprovingAuthorityName": "Shri Alok Kumar",
            "detailedDescription": "Advance purchase of Kendu leaves from Aurangabad range.",
            "shortTenderReason": "Seasonal tender",
            "NIT": "Tender for purchase of Kendu leaves.",
            "createdate": 1700000000,
            "createdOn": {
                "raw": "2025-12-01T10:00:00Z",
                "formatted": "01 Dec 2025"
            }
        },
        "dateSchedule": {
            "bidSubmissionStartDate": {
                "raw": "2025-12-02T10:00:00Z",
                "formatted": "02 Dec 2025"
            },
            "bidSubmissionDueDate": {
                "raw": "2025-12-20T17:00:00Z",
                "formatted": "20 Dec 2025"
            },
            "bidOpenDate": {
                "raw": "2025-12-21T15:00:00Z",
                "formatted": "21 Dec 2025"
            },
            "physicalDocSubmissionEndDate": {
                "raw": "2025-12-20T00:00:00Z",
                "formatted": "20 Dec 2025"
            }
        },
        "preBidDiscussion": {
            "discussionType": "OFFLINE",
            "meetingStartDate": {
                "raw": "2025-12-05T14:00:00Z",
                "formatted": "05 Dec 2025"
            },
            "meetingEndDate": {
                "raw": "2025-12-05T15:00:00Z",
                "formatted": "05 Dec 2025"
            },
            "venue": "BFDCL Head Office",
            "remarks": ""
        },
        "payments": [
            {
                "paymentType": "EMD",
                "amount": 25000,
                "paymentMode": "Challan/IPG",
                "paymentCurrency": "INR",
                "exemptionAllowed": "N",
                "exemptionReason": ""
            }
        ],
        "generalParticulars": [
            {
                "label": "Name of Bidder",
                "value": ""
            },
            {
                "label": "Address",
                "value": ""
            }
        ],
        "termsAndConditions": [
            {
                "clauseNo": "01",
                "specification": "Standard terms apply",
                "attachment": ""
            }
        ],
        "attachments": [
            {
                "label": "NIQ",
                "fileName": "niq.pdf",
                "url": "https://example.com/niq.pdf"
            }
        ],
        "requiredAttachments": [
            {
                "supportingDocument": "PAN Card",
                "mandatory": "Y",
                "allowExemption": "N"
            }
        ],
        "boq": [
            {
                "itemName": "Kendu Leaves Lot A",
                "quantity": 1,
                "uom": "Lot",
                "rate": 0
            }
        ],
        "meta": {
            "createdBy": "System",
            "createdOn": {
                "raw": "2025-12-01T10:00:00Z",
                "formatted": "01 Dec 2025"
            },
            "source": "BFDCL",
            "sourceUrl": "https://bihar.gov.in"
        },
        "isDeleted": false,
        "isActive": true,
        "adminId": null,
        "status": "ACTIVE",
        "cancelReason": "",
        "cancelTime": null
    },
    {
        "tenderId": "TND006",
        "generalInformation": {
            "bidParts": 2,
            "category": "ITEM RATE",
            "tenderCreator": "Mr. Ajeet Kumar (MD)",
            "organizationHierarchy": [
                "Government of Bihar",
                "BFDCL",
                "Head Office"
            ],
            "systemTenderNo": "118315",
            "tenderReferenceNo": "BFDCL/NIQ/2026-27/A",
            "tenderTitle": "Purchase of Kendu Leaves Lots",
            "procurementCategory": "GENERAL",
            "tenderCurrency": "INR",
            "biddingCurrency": "INR",
            "tenderType": "Open Tender",
            "estimatedValueVisibilityFlag": "N",
            "minimumNumberOfBids": 2,
            "rankingSequence": "H1 Ranking",
            "offerValidityInDays": 365,
            "tenderIssuingAuthorityName": "Shri Alok Kumar",
            "tenderApprovingAuthorityName": "Shri Alok Kumar",
            "detailedDescription": "Advance purchase of Kendu leaves from Aurangabad range.",
            "shortTenderReason": "Seasonal tender",
            "NIT": "Tender for purchase of Kendu leaves.",
            "createdate": 1700000000,
            "createdOn": {
                "raw": "2025-12-01T10:00:00Z",
                "formatted": "01 Dec 2025"
            }
        },
        "dateSchedule": {
            "bidSubmissionStartDate": {
                "raw": "2025-12-02T10:00:00Z",
                "formatted": "02 Dec 2025"
            },
            "bidSubmissionDueDate": {
                "raw": "2025-12-20T17:00:00Z",
                "formatted": "20 Dec 2025"
            },
            "bidOpenDate": {
                "raw": "2025-12-21T15:00:00Z",
                "formatted": "21 Dec 2025"
            },
            "physicalDocSubmissionEndDate": {
                "raw": "2025-12-20T00:00:00Z",
                "formatted": "20 Dec 2025"
            }
        },
        "preBidDiscussion": {
            "discussionType": "OFFLINE",
            "meetingStartDate": {
                "raw": "2025-12-05T14:00:00Z",
                "formatted": "05 Dec 2025"
            },
            "meetingEndDate": {
                "raw": "2025-12-05T15:00:00Z",
                "formatted": "05 Dec 2025"
            },
            "venue": "BFDCL Head Office",
            "remarks": ""
        },
        "payments": [
            {
                "paymentType": "EMD",
                "amount": 25000,
                "paymentMode": "Challan/IPG",
                "paymentCurrency": "INR",
                "exemptionAllowed": "N",
                "exemptionReason": ""
            }
        ],
        "generalParticulars": [
            {
                "label": "Name of Bidder",
                "value": ""
            },
            {
                "label": "Address",
                "value": ""
            }
        ],
        "termsAndConditions": [
            {
                "clauseNo": "01",
                "specification": "Standard terms apply",
                "attachment": ""
            }
        ],
        "attachments": [
            {
                "label": "NIQ",
                "fileName": "niq.pdf",
                "url": "https://example.com/niq.pdf"
            }
        ],
        "requiredAttachments": [
            {
                "supportingDocument": "PAN Card",
                "mandatory": "Y",
                "allowExemption": "N"
            }
        ],
        "boq": [
            {
                "itemName": "Kendu Leaves Lot A",
                "quantity": 1,
                "uom": "Lot",
                "rate": 0
            }
        ],
        "meta": {
            "createdBy": "System",
            "createdOn": {
                "raw": "2025-12-01T10:00:00Z",
                "formatted": "01 Dec 2025"
            },
            "source": "BFDCL",
            "sourceUrl": "https://bihar.gov.in"
        },
        "isDeleted": false,
        "isActive": true,
        "adminId": null,
        "status": "ACTIVE",
        "cancelReason": "",
        "cancelTime": null
    }
];
