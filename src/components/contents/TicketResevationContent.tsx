import { useEffect, useMemo, useState } from "react";
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
    const [finalData, setFinalData] = useState<[string, string, string | undefined, number, string]>(['', '', '', 0, '']);
    const [isFormValid, setIsFormValid] = useState(false);
    const [payment, setPayment] = useState("");
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
                return <RegistrationPage
                    finalData={finalData}
                    setFinalData={setFinalData}
                    setIsFormValid = {setIsFormValid}
                />
            case 2:
                return <PaymentMethod
                    setPaymentMethod = {setPayment}
                />
            case 3:
                return <PaymentPage/>
            case 4:
                return <ConfirmPage/>
            default:
        }
    }

    const condition = useMemo(() => {
        return {
            isFormValid: isFormValid,
            paymentMethod: payment,
        }
    }, [isFormValid, payment]);

    useEffect(() => {
        condition.isFormValid = isFormValid;
        condition.paymentMethod = payment;
    },[condition, payment, isFormValid]);

    return (
        <>
            <header>
                <NavbarReservation currentStep={currentStep}
                                   steps={steps}/>
            </header>
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
                                type={1}
                                finalDataReg={finalData}
                                finalDataReq={['','','','','','',0,'']}
                                condition={condition}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TicketReservationContent;