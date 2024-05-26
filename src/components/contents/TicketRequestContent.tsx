import { useMemo, useState } from "react";
import { StepperContextReq } from "../../context/StepperContext";
import Stepper from "../../layout/ticketreservation/stepper/Stepper";
import StepperControl from "../../layout/ticketreservation/stepper/StepperControl";
import NavbarReservation from "../../layout/ticketreservation/base/NavbarReservation";
import { motion, AnimatePresence } from "framer-motion"
import RequestPage from "../../layout/ticketreservation/subcontents/RequestPage";
import ConfirmationPending from "../../layout/ticketreservation/subcontents/ConfirmationPending";
const TicketRequestContent = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState('');
    const [finalData, setFinalData] = useState<[string, string, string, string, string, string | undefined, number, string]>(['', '', '', '', '', '', 0, '']);
    const [isFormValid, setIsFormValid] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [payment, setPayment] = useState("");
    const [idTiket, setIdTiket] = useState('');
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

    const condition = useMemo(() => {
        return {
            isFormValid: isFormValid,
            paymentMethod: payment,
        }
    }, [isFormValid, payment]);

    function setComponent(currentStep: number){
        switch (currentStep) {
            case 1:
                return <RequestPage
                    finalData={finalData}
                    setFinalData={setFinalData}
                    setIsFormValid={setIsFormValid}
                />
            case 2:
                return <ConfirmationPending/>
        }
    }

    return (
        <>
            <div>
                <NavbarReservation currentStep={currentStep}
                                   steps={steps}/>
            </div>
            <div className="mt-8">
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
                <div className="relative flex flex-col justify-center items-center">
                    <div>
                        <div className="size-fit rounded-3xl bg-color-2 bg-opacity-50 p-8 relative flex flex-col justify-center items-center gap-4 transition mt-6">
                            <StepperContextReq.Provider value={{
                                userData,
                                setUserData,
                                finalData,
                                setFinalData
                            }}>
                            {setComponent(currentStep)}
                            <div className="justify-center size-fit rounded-[20px] text-color-4 font-inter">
                                <StepperControl
                                    handleClick={handleClick}
                                    currentStep={currentStep}
                                    steps={steps}
                                    type={0}
                                    finalDataReg={['','','',0,'']}
                                    finalDataReq={finalData}
                                    condition={condition}
                                    idTiket={idTiket}
                                    setIdTiket={setIdTiket}
                                />
                            </div>
                            </StepperContextReq.Provider>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default TicketRequestContent;