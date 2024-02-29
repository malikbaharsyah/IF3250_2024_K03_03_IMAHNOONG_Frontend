import { useState } from "react";
import { Link } from "react-scroll" ;
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci"

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () =>{
        setClick(!click);
    }
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to="Home">
                    <li className="my-4 py-4 border-b border-slate-800 hover:rounded">Home</li>
                </Link>
                <Link spy={true} smooth={true} to="Tes">
                    <li className="my-4 py-4 border-b border-slate-800 hover:rounded">Home</li>
                </Link>
                <Link spy={true} smooth={true} to="">
                    <li className="my-4 py-4 border-b border-slate-800 hover:rounded">Home</li>
                </Link>
            </ul>
        </div>
    </>
    
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-8 px-20 flex-1">
                <div className="flex items-center flex-1">
                    <span className="text-xl font-inter font-bold">Logo/web name</span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-inter hidden">
                    <div className="flex-10 font-semibold">
                        <ul className="flex gap-8 mr-1">
                            <Link spy={true} smooth={true} to="Home">
                                <li className="bg-gradient-to-b bg-clip-text hover:from-color-2 hover:to-color-3 transition border-b-2 
                                border-transparent hover:border-color-3 cursor-pointer text-[24px] mx-5 hover:text-transparent">Home</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Tes">
                                <li className="bg-gradient-to-b bg-clip-text hover:from-color-2 hover:to-color-3 transition border-b-2 
                                border-transparent hover:border-color-3 cursor-pointer text-[24px] mx-5 hover:text-transparent">Help</li>
                            </Link>
                        </ul>
                    </div> 
                </div>
                <div>
                    {click && content}
                </div>
                <button className="block sm:hidden transition" onClick={handleClick}>
                    {click ? <FaTimes/> : <CiMenuFries/>}
                </button>
            </div>
        </nav>
    )
}

export default Navbar