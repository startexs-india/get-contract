import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Navbar from '@/components/common/Navbar'
import React from 'react'

const UserLayout = ({ children }) => {
    return (
        <div className='bg-white'>
            <Navbar />
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default UserLayout