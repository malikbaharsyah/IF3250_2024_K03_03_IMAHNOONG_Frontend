import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoHome } from "react-icons/go";
import { LuTicket } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menus = [
    { name: "Dashboard", link: "/", icon: GoHome },
    { name: "Pemesanan", link: "/DetailPemesanan", icon: LuTicket },
    { name: "Jadwal", link: "/", icon: LuCalendar },
    { name: "Ulasan", link: "/", icon: FaRegStar},
    { name: "Edit Profil", link: "/", icon: FaRegEdit }

  ];
  const [open, setOpen] = useState(true);
  return (

      <div
        className={`bg-stars min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
            <RxHamburgerMenu
                size={26}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
            />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
                to={menu?.link}
                key={i}
                className="group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
  );
};

export default Sidebar;