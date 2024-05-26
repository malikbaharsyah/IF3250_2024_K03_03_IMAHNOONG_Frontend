import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { LuTicket, LuCalendar } from "react-icons/lu";
import { FaRegStar, FaRegEdit } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import NavbarAdmin from './Navbar_Admin';


const Sidebar = ({children}: {children: React.ReactNode}) => {
    const location = useLocation();
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<GoHome/>
        },
        {
            path:"/pemesanan",
            name:"Pemesanan",
            icon:<LuTicket/>
        },
        {
            path:"/jadwal",
            name:"Jadwal",
            icon:<LuCalendar/>
        },
        {
            path:"/rating",
            name:"Ulasan",
            icon:<FaRegStar/>
        },
        {
            path:"/profile",
            name:"Edit Profil",
            icon:<FaRegEdit/>
        }
    ]
    return (
        <div className="flex">
           <div style={{width: isOpen ? "200px" : "70px"}} className="bg-stars text-white h-screen w-fit transition-all duration-500 fixed">
                <div className={`flex items-center py-5 pl-6 ${isOpen ? 'justify-between' : 'justify-end'}`}>
                   <h1 style={{display: isOpen ? "block" : "none"}} className="text-2xl">JOPI</h1>
                   <div style={{marginLeft: isOpen ? "w-fit" : "w-fit"}} className="flex text-xl justify-end">
                        {isOpen ? <IoIosArrowBack className="h-fit text-md py-2 border-y border-l rounded-l-md" onClick={toggle} /> : <IoIosArrowForward className="h-fit text-md py-2 border-y border-l rounded-l-md" onClick={toggle} />}
                   </div>
               </div>
            {
                menuItem.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        className={`${location.pathname === item.path ? 'bg-white bg-opacity-40' : ''} flex items-center text-white px-2 py-2 my-2 mx-4 space-x-4 rounded-md hover:bg-white hover:bg-opacity-40 cursor-pointer transition-colors duration-300 ${!isOpen ? 'pl-1' : ''}`}>
                        <div className={`text-3xl ${isOpen ? 'text-2xl' : 'text-2xl'}`}>{item.icon}</div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="text-lg">{item.name}</div>
                    </NavLink>
                ))
            }
            </div>
                <div className="w-full">
                    <NavbarAdmin/>
                    <div className={`pl-[200px] transition-all duration-500 ${isOpen ? 'pl-[200px]' : 'pl-[70px]'}`}>
                    {children}
                    </div>
                </div>
        </div>
    );
};

export default Sidebar;