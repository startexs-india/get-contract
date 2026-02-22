"use client";
import React from "react";

export default function GeneralInfoSection({ data = {}, editMode, onChange }) {

    const {
        tenderTitle,
        tenderReferenceNo,
        systemTenderNo,
        tenderType,
        procurementCategory,
        tenderCurrency,
        biddingCurrency,
        estimatedValueVisibilityFlag,
        minimumNumberOfBids,
        rankingSequence,
        offerValidityInDays,
        tenderCreator,
        tenderIssuingAuthorityName,
        tenderApprovingAuthorityName,
        detailedDescription,
        shortTenderReason,
        NIT,
        organizationHierarchy,
        category,
        createdOn,
    } = data || {};

    const renderField = (label, key, value, isTextArea = false) => (
        <div className="border p-3 flex gap-4">
            <div className="text-sm font-semibold text-gray-600 min-w-[180px]">
                {label}
                <span className="text-black font-semibold text-lg ml-1">:</span>
            </div>

            {!editMode ? (
                <div className="text-gray-800">
                    {value ?? "N/A"}
                </div>
            ) : isTextArea ? (
                <textarea
                    className="border-2 border-gray-300 rounded px-2 py-1 w-full min-h-[80px]"
                    value={value ?? ""}
                    onChange={(e) => onChange(key, e.target.value)}
                />
            ) : (
                <input
                    className="border-2 border-gray-300 rounded px-2 py-1 w-full"
                    value={value ?? ""}
                    onChange={(e) => onChange(key, e.target.value)}
                />
            )}
        </div>
    );

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">General Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-300">
                {renderField("Tender Title", "tenderTitle", tenderTitle)}
                {renderField("Reference No.", "tenderReferenceNo", tenderReferenceNo)}
                {renderField("System Tender No.", "systemTenderNo", systemTenderNo)}
                {renderField("Tender Type", "tenderType", tenderType)}
                {renderField("Procurement Category", "procurementCategory", procurementCategory)}
                {renderField("Tender Currency", "tenderCurrency", tenderCurrency)}
                {renderField("Bidding Currency", "biddingCurrency", biddingCurrency)}
                {renderField("Estimated Value Visibility", "estimatedValueVisibilityFlag", estimatedValueVisibilityFlag)}
                {renderField("Minimum Bids", "minimumNumberOfBids", minimumNumberOfBids)}
                {renderField("Ranking Sequence", "rankingSequence", rankingSequence)}
                {renderField("Offer Validity (Days)", "offerValidityInDays", offerValidityInDays)}
                {/* {renderField("Tender Creator", "tenderCreator", tenderCreator)} */}
                {renderField("Issuing Authority", "tenderIssuingAuthorityName", tenderIssuingAuthorityName)}
                {/* {renderField("Approving Authority", "tenderApprovingAuthorityName", tenderApprovingAuthorityName)} */}
            </div>

            {/* Extra details in full width */}
            <div className="border border-t-0 border-gray-300">
                <div className="border px-3 py-3">
                    <span className="text-sm font-semibold text-gray-600">
                        Department:
                    </span>
                    <span className="ml-2 text-gray-800">
                        {Array.isArray(organizationHierarchy)
                            ? organizationHierarchy.join(" › ")
                            : "N/A"}
                    </span>
                </div>

                <div className="border px-3 py-3">
                    <span className="text-sm font-semibold text-gray-600">
                        Category:
                    </span>
                    <span className="ml-2 text-gray-800">
                        {category?.label ?? "N/A"}{" "}
                        {category?.categoryDescription
                            ? `- ${category.categoryDescription}`
                            : ""}
                    </span>
                </div>

                <div className="border px-3 py-3">
                    <span className="text-sm font-semibold text-gray-600">
                        Created On:
                    </span>
                    <span className="ml-2 text-gray-800">
                        {createdOn?.formatted ?? "N/A"}
                    </span>
                </div>

                {renderField(
                    "Short Tender Reason",
                    "shortTenderReason",
                    shortTenderReason,
                    true
                )}

                {renderField(
                    "Detailed Description",
                    "detailedDescription",
                    detailedDescription,
                    true
                )}

                {renderField("NIT", "NIT", NIT, true)}
            </div>
        </div>
    );
}
