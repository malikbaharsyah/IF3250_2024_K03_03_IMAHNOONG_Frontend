import React from 'react';
import SidebarSuperAdmin from './Sidebar_SuperAdmin';

const SuperAdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex">
            <SidebarSuperAdmin />
            <div className="flex-grow">
                {children}
            </div>
        </div>
    );
};

export default SuperAdminLayout;
