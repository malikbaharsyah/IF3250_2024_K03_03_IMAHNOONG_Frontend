import { RxHamburgerMenu } from "react-icons/rx";
import { GoHome } from "react-icons/go";
import { LuTicket } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [clickedItem, setClickedItem] = useState(null);

    const handleToggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleItemClick = (itemName) => {
        setClickedItem(itemName === clickedItem ? null : itemName);
    };

    return (
        <div className={`flex flex-col h-screen w-fit bg-stars text-white pl-4 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-fit'}`}>
            <div className={`flex flex-row items-center mb-16 mx-4 mt-8 ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}>
                <div className={`text-5xl font-bold flex items-center mr-60 ${isSidebarOpen ? '' : 'hidden'}`}>
                    Logo
                </div>
                <div className="flex justify-end">
                    <button className="text-6xl p-4 hover:bg-white hover:bg-opacity-40 hover:rounded-xl" onClick={handleToggleSidebar}>
                        <RxHamburgerMenu />
                    </button>
                </div>
            </div>
            {isSidebarOpen && (
                <div className="space-y-4 font-semibold text-4xl">
                    <NavItem icon={<GoHome className="text-6xl"/>} clicked={clickedItem === "Dashboard"} onClick={() => handleItemClick("Dashboard")}>
                        Dashboard
                    </NavItem>
                    <NavItem icon={<LuTicket className="text-6xl"/>} clicked={clickedItem === "Pemesanan"} onClick={() => handleItemClick("Pemesanan")}>
                        Pemesanan
                    </NavItem>
                    <NavItem icon={<LuCalendar className="text-6xl"/>} clicked={clickedItem === "Jadwal"} onClick={() => handleItemClick("Jadwal")}>
                        Jadwal
                    </NavItem>
                    <NavItem icon={<FaRegStar className="text-6xl"/>} clicked={clickedItem === "Ulasan"} onClick={() => handleItemClick("Ulasan")}>
                        Ulasan
                    </NavItem>
                    <NavItem icon={<FaRegEdit className="text-6xl"/>} clicked={clickedItem === "Edit Profil"} onClick={() => handleItemClick("Edit Profil")}>
                        Edit Profil
                    </NavItem>
                </div>
            )}
            {!isSidebarOpen && (
                <div className="space-y-4 font-semibold text-4xl">
                    <NavItem icon={<GoHome className="text-6xl"/>} clicked={clickedItem === "Dashboard"} onClick={() => handleItemClick("Dashboard")}> </NavItem>
                    <NavItem icon={<LuTicket className="text-6xl"/>} clicked={clickedItem === "Pemesanan"} onClick={() => handleItemClick("Pemesanan")}> </NavItem>
                    <NavItem icon={<LuCalendar className="text-6xl"/>} clicked={clickedItem === "Jadwal"} onClick={() => handleItemClick("Jadwal")}> </NavItem>
                    <NavItem icon={<FaRegStar className="text-6xl"/>} clicked={clickedItem === "Ulasan"} onClick={() => handleItemClick("Ulasan")}> </NavItem>
                    <NavItem icon={<FaRegEdit className="text-6xl"/>} clicked={clickedItem === "Edit Profil"} onClick={() => handleItemClick("Edit Profil")}> </NavItem>
                </div>
                
            )}
        </div>
    );
}

const NavItem = ({ children, icon, clicked, onClick }: { children: React.ReactNode, icon: React.ReactNode, clicked: boolean, onClick: () => void }) => {
    let className = "px-8 py-8 rounded-md transition-colors duration-300 flex items-center";
    if (clicked) {
        className += " bg-white bg-opacity-40 hover:rounded-xl cursor-default";
    } else {
        className += " hover:bg-white hover:bg-opacity-40 hover:rounded-xl cursor-pointer";
    }

    return (
        <div className={className} onClick={onClick}>
            {icon && <span className="mr-4">{icon}</span>}
            {children}
        </div>
    );
}

export default Sidebar;
