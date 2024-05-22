import { Link, Outlet } from "react-router-dom" ;

const Navbar = () => {

    return (
        <>
            <nav>
                <div className="flex justify-between z-50 text-white py-4 px-20 flex-1 bg-color-5 drop-shadow-[0_8px_4px_rgba(0,0,0,1)]">
                    <div className="flex items-center flex-1">
                        <span className="text-xl font-inter font-bold">Logo/web name</span>
                    </div>
                    <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-inter hidden">
                        <div className="flex-10 font-semibold">
                            <ul className="flex gap-8 mr-1">
                                <Link to="/">
                                    <li className="bg-gradient-to-b bg-clip-text font-semibold hover:font-bold hover:bg-white transition border-b-2 
                                    border-transparent hover:border-white cursor-pointer text-lg mx-2">Beranda</li>
                                </Link>
                                <Link to="../catalog">
                                    <li className="bg-gradient-to-b bg-clip-text font-semibold hover:font-bold hover:bg-white transition border-b-2 
                                    border-transparent hover:border-white cursor-pointer text-lg mx-2">Katalog</li>
                                </Link>
                                <Link to="../bantuan">
                                    <li className="bg-gradient-to-b bg-clip-text font-semibold hover:font-bold hover:bg-white transition border-b-2 
                                    border-transparent hover:border-white cursor-pointer text-lg mx-2">Bantuan</li>
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