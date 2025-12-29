'use client'

import React, { useEffect } from 'react'
import { ShieldCheck, Lock, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Page = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/admin/dashboard')
        }, 1000);
    }, [])


    return (
        <div className="min-h-screen flex items-center justify-center bg-white text-white">

            <div className="bg-gradient-to-br from-[#084c9d] to-[#0b2543] border border-white/10 rounded-2xl p-10 max-w-md w-full text-center shadow-2xl ">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-indigo-500/20 p-4 rounded-full">
                        <ShieldCheck className="w-10 h-10 text-indigo-400" />
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-3xl font-bold mb-2">
                    Admin Control Panel
                </h1>

                <p className="text-gray-400 mb-6">
                    Secure access for authorized administrators only.
                </p>

                {/* Info */}
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-8">
                    <Lock className="w-4 h-4 text-green-400" />
                    <span>All actions are monitored & logged</span>
                </div>

                {/* Footer */}
                <p className="mt-6 text-xs text-gray-500">
                    © {new Date().getFullYear()} Admin System · Restricted Access
                </p>
            </div>
        </div>
    )
}

export default Page
