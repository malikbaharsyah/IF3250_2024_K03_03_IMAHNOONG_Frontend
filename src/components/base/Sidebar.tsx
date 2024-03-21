import { Link } from "react-scroll" ;
import home from '../../../public/Home.svg';
import ticket from '../../../public/Ticket.svg';
import calendar from '../../../public/calendar.svg';
import star from "../../../public/Star.svg"
import editProfile from '../../../public/Edit Square.svg'

const Sidebar = () => {

    return (
        <nav>
            <div className="h-screen w-[20vw] flex flex-col justify-center z-50 text-white lg:py-8 bg-[url('../../public/Bg_Sidebar.svg')] ">
                <div className="flex items-center justify-center">
                    <span className="text-[2vw] font-inter font-semibold">Logo/web name</span>
                </div>
                <div className="flex-1 pt-[5vw] justify-start font-inter">
                    <div className="flex-10 font-semibold">
                        <ul className="flex flex-col gap-5 mr-1">
                            <Link spy={true} smooth={true} to="/" className="flex hover:bg-[url('../../public/bg_hover.svg')] transition cursor-pointer px-[2vw] py-[1vw]">
                                <img src={home} alt="home" />
                                <li className="bg-gradient-to-b bg-clip-text text-[1.5vw] font-normal mx-5">Dashboard</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Catalog" className="flex hover:bg-[url('../../public/bg_hover.svg')] transition cursor-pointer px-[2vw] py-[1vw]">
                                <img src={ticket} alt="ticket" />
                                <li className="bg-gradient-to-b bg-clip-text text-[1.5vw] font-normal mx-5">Pemesanan</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Bantuan" className="flex hover:bg-[url('../../public/bg_hover.svg')] transition cursor-pointer px-[2vw] py-[1vw]">
                                <img src={calendar} alt="calendar" />
                                <li className="bg-gradient-to-b bg-clip-text text-[1.5vw] font-normal mx-5">Jadwal</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Bantuan" className="flex hover:bg-[url('../../public/bg_hover.svg')] transition cursor-pointer px-[2vw] py-[1vw]">
                                <img src={star} alt="star" />
                                <li className="bg-gradient-to-b bg-clip-text text-[1.5vw] font-normal mx-5">Ulasan</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Bantuan" className="flex hover:bg-[url('../../public/bg_hover.svg')] transition cursor-pointer px-[2vw] py-[1vw]">
                                <img src={editProfile} alt="editProfile" />
                                <li className="bg-gradient-to-b bg-clip-text text-[1.5vw] font-normal mx-5">Edit Profil</li>
                            </Link>
                        </ul>
                    </div> 
                </div>
            </div>
        </nav>
    )
}

export default Sidebar