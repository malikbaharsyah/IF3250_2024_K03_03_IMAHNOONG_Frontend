import { useState } from "react";
import ConfirmPage from "../../layout/ticketreservation/ConfirmPage";
import PaymentPage from "../../layout/ticketreservation/PaymentPage";
import RegistrationPage from "../../layout/ticketreservation/RegistrationPage";
import Stepper from "../../layout/ticketreservation/stepper/Stepper";
import StepperControl from "../../layout/ticketreservation/stepper/StepperControl";
import { StepperContext } from "../../context/StepperContext";
import TicketInformation from "../../layout/ticketreservation/ticketinformation/TicketInformation";

const TicketReservationContent = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState('');
    const [finalData, setFinalData] = useState([]);


    const steps = [
        "Data Pesanan",
        "Pembayaran",
        "Konfirmasi"
    ];
    
    const displaySteps = (step: number) => {
        switch (step) {
            case 1:
                return <RegistrationPage/>
            case 2:
                return <PaymentPage/>
            case 3:
                return <ConfirmPage/>
            default:
        }
    }

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
            <div className="flex justify-center gap-4">
                <StepperContext.Provider value={{
                    userData,
                    setUserData,
                    finalData,
                    setFinalData
                }}>
                    {displaySteps(currentStep)}
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