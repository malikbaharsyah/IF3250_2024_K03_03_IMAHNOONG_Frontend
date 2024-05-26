import React, { useState } from 'react';
import SidebarSuperAdmin from './Sidebar_SuperAdmin';
import NavbarAdmin from './Navbar_Admin';

const SuperAdminLayout = ({ children }: { children: React.ReactNode }) => {
    const [isOpen] = useState(false); // Define the state for isOpen

    return (
        <div className="flex">
            <SidebarSuperAdmin />
            
            <div className="flex-grow">
                <div className="w-full">
                    <NavbarAdmin />
                </div>
                {children}
            </div>
            {/* <div className="w-full">
                <NavbarAdmin/>
                <div className={`pl-[200px] transition-all duration-500 ${isOpen ? 'pl-[200px]' : 'pl-[70px]'}`}>
                    {children}
                </div>
            </div> */}
        </div>
    );
};


export default SuperAdminLayout;
