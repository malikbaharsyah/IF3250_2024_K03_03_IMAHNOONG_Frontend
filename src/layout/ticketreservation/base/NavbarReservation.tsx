import { Link, Outlet } from "react-router-dom" ;
import { StepperProps } from "../../../interfaces/TicketReservation";
import Stepper from "../stepper/Stepper";
import { AnimatePresence, motion } from "framer-motion";

const NavbarReservation: React.FC<StepperProps> = ({steps, currentStep}) => {
    
    return (
        <>
            <nav>
                <div className="relative flex z-50 text-white flex-1 bg-color-5 drop-shadow-[0_8px_4px_rgba(0,0,0,1)]">
                    <div className="flex items-center flex-1 px-20 py-8">
                        <span className="text-xl font-inter font-bold">Logo/web name</span>
                    </div>
                    <div className={`relative flex flex-1 items-center justify-end font-inter h-full pl-20 pr-10 ${currentStep === 1  ? "py-8" : "py-7"}`}>
                    <AnimatePresence>
                        {currentStep === 1 && (
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}>
                            <div className=" font-semibold">
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
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                    {currentStep !== 1 && (
                            <motion.div className="w-full flex absolute mt-5" 
                                initial={{opacity: 0}}
                                animate={{opacity: 1, transition: {delay: 0.5}}}
                                exit={{opacity: 0}}>
                                <div className="flex justify-between w-full">
                                <Stepper
                                steps = {steps}
                                currentStep={currentStep}/>
                            </div>   
                            </motion.div>
                        )}
                    </AnimatePresence>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default NavbarReservation