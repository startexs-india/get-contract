import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import React from 'react'

const UserLayout = ({ children }) => {
    return (
        <div className='bg-white'>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default UserLayout