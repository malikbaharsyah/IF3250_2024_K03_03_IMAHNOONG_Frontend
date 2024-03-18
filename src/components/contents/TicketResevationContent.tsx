import { useState } from "react";
import ConfirmPage from "../../layout/ticketreservation/subcontents/ConfirmPage";
import PaymentPage from "../../layout/ticketreservation/subcontents/PaymentPage";
import RegistrationPage from "../../layout/ticketreservation/subcontents/RegistrationPage";
import { StepperContext } from "../../context/StepperContext";
import TicketInformation from "../../layout/ticketreservation/ticketinformation/TicketInformation";
import Stepper from "../../layout/ticketreservation/stepper/Stepper";
import StepperControl from "../../layout/ticketreservation/stepper/StepperControl";
import NavbarReservation from "../../layout/ticketreservation/base/NavbarReservation";
import { motion, AnimatePresence } from "framer-motion"
import PaymentMethod from "../../layout/ticketreservation/subcontents/PaymentMethod";
const TicketReservationContent = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState('');
    const [finalData, setFinalData] = useState([]);
    const steps = [
        "Data Pesanan",
        "Metode Pembayaran",
        "Pembayaran",
        "Konfirmasi"
    ]

    const handleClick = (direction: string) => {
        let newStep = currentStep;
        direction === "next" ? newStep++ : newStep--;
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    }

    function setComponent(currentStep: number){
        switch (currentStep) {
            case 1:
                return <RegistrationPage/>
            case 2:
                return <PaymentMethod/>
            case 3:
                return <PaymentPage/>
            case 4:
                return <ConfirmPage/>
            default:
        }
    }

    return (
        <>
            <header>
                <NavbarReservation currentStep={currentStep}
                                   steps={steps}/>
            </header>
            <body className="mt-8">
                <div className="relative flex flex-col justify-center">
                    <AnimatePresence>
                        {currentStep === 1 && (
                            <motion.div className="flex justify-center"
                                initial={{opacity: 0}}
                                animate={{opacity: 1, transition: {delay: 0.3}}}
                                exit={{opacity: 0}}>
                                <Stepper
                                steps = {steps}
                                currentStep={currentStep}/>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div className="relative flex flex-row justify-center gap-4 transition mt-6">
                        <StepperContext.Provider value={{
                            userData,
                            setUserData,
                            finalData,
                            setFinalData
                        }}>
                        {setComponent(currentStep)}
                        </StepperContext.Provider>
                        <div className="flex flex-col justify-start size-fit bg-color-4 bg-opacity-20 rounded-[20px] p-8 text-color-4 font-inter gap-4">
                            <TicketInformation/>
                            <StepperControl
                                handleClick={handleClick}
                                currentStep={currentStep}
                                steps={steps}
                            />
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}

export default TicketReservationContent;