import Navbar from '@/components/common/Navbar'

const AdminLayout = ({ children }) => {

    return (
        <div className="bg-white min-h-screen text-black font-sans">
            <Navbar />
            {children}
        </div>
    );
};

export default AdminLayout;


// "use client"
// import Navbar from '@/components/common/Navbar'
// import { useEffect, useRef, useState } from 'react'

// const AdminLayout = ({ children }) => {
//     const [showNavbar, setShowNavbar] = useState(true);
//     const lastScrollY = useRef(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;
//             // DEBUG
//             console.log('scrollY:', currentScrollY, 'lastScrollY:', lastScrollY.current);

//             if (currentScrollY > lastScrollY.current) {
//                 setShowNavbar(false);
//             } else if (currentScrollY < lastScrollY.current) {
//                 setShowNavbar(true);
//             }

//             lastScrollY.current = currentScrollY;
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <div className="bg-white min-h-screen text-black font-sans">
//             <div
//                 className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
//                 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
//             >
//                 <Navbar />
//             </div>

//             {/* add padding top equal to navbar height to avoid content hiding */}
//             <div className="pt-16">
//                 {children}
//             </div>
//         </div>
//     );
// };

// export default AdminLayout;

