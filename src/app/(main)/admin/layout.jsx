import Navbar from '@/components/common/Navbar'
import React from 'react'

const AdminLayout = ({ children }) => {
    return (
        <div className='bg-white h-screen text-black font-sans'>
            <Navbar />
            {children}
        </div>
    )
}

export default AdminLayout