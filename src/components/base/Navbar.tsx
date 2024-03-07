import { Link, Outlet } from "react-router-dom" ;

const Navbar = () => {

    return (
        <>
            <nav>
                <div className="h-10vh flex justify-between z-50 text-white lg:py-8 px-20 flex-1">
                    <div className="flex items-center flex-1">
                        <span className="text-xl font-inter font-bold">Logo/web name</span>
                    </div>
                    <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-inter hidden">
                        <div className="flex-10 font-semibold">
                            <ul className="flex gap-8 mr-1">
                                <Link to="/">
                                    <li className="bg-gradient-to-b bg-clip-text hover:from-color-2 hover:to-color-3 transition border-b-2 
                                    border-transparent hover:border-color-3 cursor-pointer text-[24px] mx-5 hover:text-transparent">Beranda</li>
                                </Link>
                                <Link to="../catalog">
                                    <li className="bg-gradient-to-b bg-clip-text hover:from-color-2 hover:to-color-3 transition border-b-2 
                                    border-transparent hover:border-color-3 cursor-pointer text-[24px] mx-5 hover:text-transparent">Katalog</li>
                                </Link>
                                <Link to="../bantuan">
                                    <li className="bg-gradient-to-b bg-clip-text hover:from-color-2 hover:to-color-3 transition border-b-2 
                                    border-transparent hover:border-color-3 cursor-pointer text-[24px] mx-5 hover:text-transparent">Bantuan</li>
                                </Link>
                            </ul>
                        </div> 
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default Navbar