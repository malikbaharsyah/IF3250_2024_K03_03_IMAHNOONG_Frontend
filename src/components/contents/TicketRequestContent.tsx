import { useState } from "react";
import ConfirmPage from "../../layout/ticketreservation/subcontents/ConfirmPage";
import PaymentPage from "../../layout/ticketreservation/subcontents/PaymentPage";
import { StepperContext } from "../../context/StepperContext";
import TicketInformation from "../../layout/ticketreservation/ticketinformation/TicketInformation";
import Stepper from "../../layout/ticketreservation/stepper/Stepper";
import StepperControl from "../../layout/ticketreservation/stepper/StepperControl";
import NavbarReservation from "../../layout/ticketreservation/base/NavbarReservation";
import { motion, AnimatePresence } from "framer-motion"
import PaymentMethod from "../../layout/ticketreservation/subcontents/PaymentMethod";
import RequestPage from "../../layout/ticketreservation/subcontents/RequestPage";
import ConfirmationPending from "../../layout/ticketreservation/subcontents/ConfirmationPending";
const TicketRequestContent = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState('');
    const [finalData, setFinalData] = useState([]);
    const steps = [
        "Data Pesanan",
        "Tunggu Konfirmasi",
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
                return <RequestPage/>
            case 2:
                return <ConfirmationPending/>
            case 3:
                return <PaymentMethod/>
            case 4:
                return <PaymentPage/>
            case 5:
                return <ConfirmPage/>
            default:
        }
    }

    return (
        <>
            <div>
                <NavbarReservation currentStep={currentStep}
                                   steps={steps}/>
            </div>
            <div className="mt-8">
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
                                type={0}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TicketRequestContent;