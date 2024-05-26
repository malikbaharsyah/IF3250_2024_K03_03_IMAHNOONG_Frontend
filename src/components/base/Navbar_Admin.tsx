
import { Link } from "react-scroll" ;
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import notifOff from "../../../public/Notification_off.svg"
import notifOn from "../../../public/notification_on.svg"
import profile from "../../../public/Profile.svg";
import logout from "../../../public/Logout.svg";
import { useNavigate } from 'react-router-dom';


function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('idPlanetarium');
        navigate('/login'); 
    };

    return (
        <nav>
            <div className="h-fit flex justify-end z-50 bg-white text-black border-b-4 border-black-900">
                <div className="flex items-center justify-end font-inter px-8 py-4">
                    <div className="flex-10 font-semibold">
                        <Menu as="div">
                            <ul className="flex space-x-6 mr-1">
                                <Link spy={true} smooth={true} to="/" className="cursor-pointer">
                                    <img src={notifOff} alt="notif" />
                                </Link>
                                <Link spy={true} smooth={true} to="Catalog">
                                    <Menu.Button className="flex items-center justify-center cursor-pointer gap-[0.5vw]">
                                    <img src={profile} alt="profile" />
                                        <li className="text-black text-sm">{localStorage.getItem("username")}</li>

                                    </Menu.Button>
                                </Link>
                            </ul>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                                >
                                <Menu.Items className="absolute right-[1vw] z-10 mt-[2vw] origin-top-right rounded-[1vw] bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-2">
                                        <Menu.Item>
                                        {({ active }) => (
                                            <button
                                            onClick={handleLogout}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900 flex gap-5' : 'text-gray-700',
                                                'block px-4 py-2 text-sm flex gap-5'
                                            )}
                                            >
                                            <img src={logout} alt="logout" />
                                            Keluar Akun
                                            </button>
                                        )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div> 
                </div>
            </div>
        </nav>
    )
}

export default Navbar