
import { Link } from "react-scroll" ;
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import notifOff from "../../../public/Notification_off.svg"
import notifOn from "../../../public/notification_on.svg"
import profile from "../../../public/Profile.svg";
import logout from "../../../public/Logout.svg";


function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }

const Navbar = () => {

    return (
        <nav>
            <div className="h-[5vw] flex justify-end z-50 bg-white text-black">
                <div className="flex items-center justify-end font-inter px-[5vw]">
                    <div className="flex-10 font-semibold">
                        <Menu as="div" className="">
                            <ul className="flex gap-[2vw] mr-1">
                                <Link spy={true} smooth={true} to="/" className="cursor-pointer">
                                    <img src={notifOff} alt="notif" />
                                </Link>
                                <Link spy={true} smooth={true} to="Catalog">
                                    <Menu.Button className="flex cursor-pointer gap-[0.5vw]">
                                    <img src={profile} alt="profile" />
                                        <li className="text-black text-[1.2vw]">Admin</li>

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
                                            <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900 flex gap-5' : 'text-gray-700',
                                                'block px-4 py-2 text-sm flex gap-5'
                                            )}
                                            >
                                            <img src={logout} alt="logout" />
                                            Keluar Akun
                                            </a>
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