"use client";

import { FileText, Download, Eye, Calendar, Trash, Globe } from "lucide-react";
import { useState } from "react";

export default function CircularCard({ circular }) {

    const [isArchive, setIsArchive] = useState(true);

    const handleDelete = () => {
        alert("Circular is delete");
    }

    const handleArchive = () => {
        alert("Circular is archived");
    }

    const handlePublic = () => {
        alert("Circular is Public Now");
    }

    const handleDownlaod = () => {
        alert("Circular is downloaded");
    }

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition px-5 py-4 lg:py-2 flex flex-col md:flex-row justify-between items-center gap-4 w-full">

            {/* Header */}
            <div className="flex justify-between items-start">
                <h3 className="font-semibold text-gray-800">
                    {circular.title}
                </h3>

                <span className={`text-xs px-2 py-1 rounded-full
                    ${circular.status === "public"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-600"}`}>
                    {circular.status}
                </span>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 justify-between">

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-3">

                    {circular.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                    <Calendar size={14} />
                    {new Date(circular.issueDate).toLocaleDateString()}
                </div>
            </div>


            {/* Actions */}
            <div className="flex flex-row sm:flex-col md:flex-row justify-between w-full md:w-fit gap-2 mt-2">

                <div className="flex flex-row gap-5">
                    <a
                        href={circular.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-2 
                               bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 cursor-pointer">
                        <Eye size={16} />
                        <span className="hidden xl:flex">View</span>
                    </a>

                    <a
                        href={circular.documentUrl}
                        download
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-1 
                               bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                        onClick={() => handleDownlaod()}>
                        <Download size={16} />
                        <span className="hidden xl:flex">Download</span>
                    </a>
                </div>

                <div className="flex flex-row gap-5">

                    {
                        isArchive ?
                            <button className="flex-1 flex items-center justify-center gap-1 px-3 py-1 border-2 border-red-400 
                               bg-gray-100 text-red-500 rounded-lg hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleDelete()}>
                                <Trash size={16} />
                                <span className="hidden xl:flex">Delete</span>
                            </button>
                            :
                            <button className="flex-1 flex items-center justify-center gap-1 px-3 py-1 
                               bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleArchive()}>

                                <span className="hidden xl:flex">Archive</span>
                            </button>

                    }

                    {
                        isArchive &&
                        <button className="flex-1 flex items-center justify-center gap-1 px-3 py-1 border-2 border-[#084c9d]]
                               bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 cursor-pointer"
                            onClick={() => handlePublic()}>
                            <Globe size={16} />
                            <span className="hidden xl:flex">Public</span>
                        </button>
                    }
                </div>
            </div>

        </div>
    );
}
