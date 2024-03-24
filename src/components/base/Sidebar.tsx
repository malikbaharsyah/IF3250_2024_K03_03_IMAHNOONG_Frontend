import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { LuTicket } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { SetStateAction, useState } from "react";

const Sidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [clickedItem, setClickedItem] = useState(null);

    const handleToggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleItemClick = (itemName : SetStateAction<any>) => {
        setClickedItem(itemName === clickedItem ? null : itemName);
    };

    const NavItem = ({ children, icon, clicked, onClick}: { children: React.ReactNode, icon: React.ReactNode, clicked: boolean, onClick: () => void }) => {
        let className = "flex items-center px-2 py-2 rounded-md transition-colors duration-300";
        // px-2 py-2 rounded-md transition-colors duration-300 flex items-center
        if (clicked) {
            className += " bg-white bg-opacity-40 hover:rounded-md cursor-default";
        } else {
            className += " hover:bg-white hover:bg-opacity-40 cursor-pointer";
        }
    
        return (
            <div className={className} onClick={onClick}>
                {isSidebarOpen && (
                    <div className="flex items-center">
                        {icon && <span className="mr-4">{icon}</span>}
                        {children}
                    </div>
                )}    
                {!isSidebarOpen && (
                    <div className="flex items-center">
                        {icon && <span>{icon}</span>}
                        {children}
                    </div>
                )}    
            </div>
        );
    }

    return (
        <div className={`flex flex-col self-stretch w-fit bg-stars text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-fit'}`}>
            <div className={`flex flex-row my-4 ${isSidebarOpen ? 'ml-8 justify-between' : 'ml-4 justify-end'}`}>
                <div className={`text-2xl font-bold flex items-center mr-12 ${isSidebarOpen ? '' : 'hidden'}`}>
                    Logo
                </div>
                <div className="flex justify-end">
                    {isSidebarOpen && (
                        <button className="h-fit text-md py-2 border-y border-l rounded-l-md" onClick={handleToggleSidebar}>
                            <IoIosArrowBack />
                        </button>                        
                    )}
                    {!isSidebarOpen && (
                        <button className="text-md py-2 border-y border-l rounded-l-md" onClick={handleToggleSidebar}>
                            <IoIosArrowForward />
                        </button>                        
                    )}
                </div>
            </div>
            {isSidebarOpen && (
                <div className="space-y-2 font-semibold text-sm mx-4">
                    <NavItem icon={<GoHome className="text-2xl"/>} clicked={clickedItem === "Dashboard"} onClick={() => handleItemClick("Dashboard")}>
                        Dashboard
                    </NavItem>
                    <NavItem icon={<LuTicket className="text-2xl"/>} clicked={clickedItem === "Pemesanan"} onClick={() => handleItemClick("Pemesanan")}>
                        Pemesanan
                    </NavItem>
                    <NavItem icon={<LuCalendar className="text-2xl"/>} clicked={clickedItem === "Jadwal"} onClick={() => handleItemClick("Jadwal")}>
                        Jadwal
                    </NavItem>
                    <NavItem icon={<FaRegStar className="text-2xl"/>} clicked={clickedItem === "Ulasan"} onClick={() => handleItemClick("Ulasan")}>
                        Ulasan
                    </NavItem>
                    <NavItem icon={<FaRegEdit className="text-2xl"/>} clicked={clickedItem === "Edit Profil"} onClick={() => handleItemClick("Edit Profil")}>
                        Edit Profil
                    </NavItem>
                </div>
            )}
            {!isSidebarOpen && (
                <div className="space-y-4 font-semibold text-4xl mx-2">
                    <NavItem icon={<GoHome className="text-2xl "/>} clicked={clickedItem === "Dashboard"} onClick={() => handleItemClick("Dashboard")}> </NavItem>
                    <NavItem icon={<LuTicket className="text-2xl"/>} clicked={clickedItem === "Pemesanan"} onClick={() => handleItemClick("Pemesanan")}> </NavItem>
                    <NavItem icon={<LuCalendar className="text-2xl"/>} clicked={clickedItem === "Jadwal"} onClick={() => handleItemClick("Jadwal")}> </NavItem>
                    <NavItem icon={<FaRegStar className="text-2xl"/>} clicked={clickedItem === "Ulasan"} onClick={() => handleItemClick("Ulasan")}> </NavItem>
                    <NavItem icon={<FaRegEdit className="text-2xl"/>} clicked={clickedItem === "Edit Profil"} onClick={() => handleItemClick("Edit Profil")}> </NavItem>
                </div>
                
            )}
        </div>
    );
}

export default Sidebar;
