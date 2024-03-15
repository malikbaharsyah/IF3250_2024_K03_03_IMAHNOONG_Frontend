import { useState } from "react";
import ConfirmPage from "../../layout/ticketreservation/ConfirmPage";
import PaymentPage from "../../layout/ticketreservation/PaymentPage";
import RegistrationPage from "../../layout/ticketreservation/RegistrationPage";
import { StepperContext } from "../../context/StepperContext";
import TicketInformation from "../../layout/ticketreservation/ticketinformation/TicketInformation";
import Stepper from "../../layout/ticketreservation/stepper/Stepper";
import StepperControl from "../../layout/ticketreservation/stepper/StepperControl";
import { Transition } from "@headlessui/react";
const transitionClasses = {
    enter: 'ease-out duration-300 delay-300',
    enterFrom: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
    enterTo: 'opacity-100 translate-y-0 sm:scale-100',
    leave: 'ease-in duration-200',
    leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
    leaveTo: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
};

const TicketReservationContent = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState('');
    const [finalData, setFinalData] = useState([]);
    const steps = [
        "Data Pesanan",
        "Tunggu Konfirmasi",
        "Pembayaran",
        "Konfirmasi"
    ]

    const handleClick = (direction: string) => {
        let newStep = currentStep;
        direction === "next" ? newStep++ : newStep--;
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    }

    return (
        <div className="flex flex-col justify-center">
            <div className="flex justify-center">
                <Stepper
                steps = {steps}
                currentStep={currentStep}/>
                
            </div>
            <div className="flex justify-center gap-4 transition mt-6">
                <StepperContext.Provider value={{
                    userData,
                    setUserData,
                    finalData,
                    setFinalData
                }}>
                    <Transition show={currentStep===1 ? true : false}
                    {...transitionClasses}>
                        <RegistrationPage/>
                    </Transition>
                    <Transition show={currentStep===2 ? true : false}
                    {...transitionClasses}>
                        <PaymentPage/>
                    </Transition>
                    <Transition show={currentStep===3 ? true : false}
                    {...transitionClasses}>
                        <ConfirmPage/>
                    </Transition>
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
    );
}

export default TicketReservationContent;