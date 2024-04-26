import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { LuTicket, LuCalendar } from "react-icons/lu";
import { FaRegStar, FaRegEdit } from "react-icons/fa";

const Sidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [clickedItem, setClickedItem] = useState<string | null>(null);

    const handleToggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleItemClick = (itemName: string) => {
        setClickedItem(itemName === clickedItem ? null : itemName);
    };

    const NavItem = ({ children, icon, to }: { children?: React.ReactNode; icon: React.ReactNode; to: string; }) => {
        return (
            <NavLink
                to={to}
                activeClassName="bg-white bg-opacity-40 hover:bg-opacity-40 rounded-md"
                className={`flex items-center px-2 py-2 rounded-md hover:bg-white hover:bg-opacity-40 cursor-pointer transition-colors duration-300 ${clickedItem === to ? 'bg-white bg-opacity-40 rounded-md' : ''}`}
                onClick={() => handleItemClick(to)}
            >
                <span className="mr-4">{icon}</span>
                {children}
            </NavLink>
        );
    };

    return (
        <div className={`flex flex-col self-stretch w-fit bg-stars text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-fit'}`}>
            <div className={`flex flex-row my-4 ${isSidebarOpen ? 'ml-8 justify-between' : 'ml-4 justify-end'}`}>
                <div className={`text-2xl font-bold flex items-center mr-12 ${isSidebarOpen ? '' : 'hidden'}`}>
                    Logo
                </div>
                <div className="flex justify-end">
                    {isSidebarOpen ? (
                        <button className="h-fit text-md py-2 border-y border-l rounded-l-md" onClick={handleToggleSidebar}>
                            <IoIosArrowBack />
                        </button>
                    ) : (
                        <button className="text-md py-2 border-y border-l rounded-l-md" onClick={handleToggleSidebar}>
                            <IoIosArrowForward />
                        </button>
                    )}
                </div>
            </div>
            {isSidebarOpen ? (
                <div className="space-y-2 font-semibold text-sm mx-4">
                    <NavItem to="/dashboard" icon={<GoHome className="text-2xl"/>}>Dashboard</NavItem>
                    <NavItem to="/pemesanan" icon={<LuTicket className="text-2xl"/>}>Pemesanan</NavItem>
                    <NavItem to="/jadwal" icon={<LuCalendar className="text-2xl"/>}>Jadwal</NavItem>
                    <NavItem to="/rating" icon={<FaRegStar className="text-2xl"/>}>Ulasan</NavItem>
                    <NavItem to="/profile" icon={<FaRegEdit className="text-2xl"/>}>Edit Profil</NavItem>
                </div>
            ) : (
                <div className="space-y-4 font-semibold text-4xl mx-2">
                    <NavItem to="/dashboard" icon={<GoHome className="text-4xl"/>}></NavItem>
                    <NavItem to="/pemesanan" icon={<LuTicket className="text-4xl"/>}></NavItem>
                    <NavItem to="/jadwal" icon={<LuCalendar className="text-4xl"/>}></NavItem>
                    <NavItem to="/rating" icon={<FaRegStar className="text-4xl"/>}></NavItem>
                    <NavItem to="/profile" icon={<FaRegEdit className="text-4xl"/>}></NavItem>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
