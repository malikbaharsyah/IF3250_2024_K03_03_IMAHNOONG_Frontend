import { useNavigate } from "react-router-dom";
import { StepperControlProps } from "../../../interfaces/TicketReservation";

const StepperControl: React.FC<StepperControlProps> = ({handleClick, currentStep, steps, type}) => {

    const navigate = useNavigate(); 
    const routeChange = () =>{ 
        const path = `/`; 
        navigate(path);
    }

    return (
        <div className="flex justify-around my-2 gap-4 transition">
            {currentStep === steps.length ? <></> : <button onClick={() => handleClick("")}
            className={`transition duration-200 ease-in-out w-[202px] h-[69px] rounded-full bg-gradient-to-b bg-opacity-40 hover:from-red-600 hover:to-red-400 hover:transition bg-color-4
                            font-inter font-medium text-[24px] ${currentStep === steps.length ? "w-0" : ""}`}>
                Batal
            </button>}
            <button onClick={() => {
                if (currentStep !== steps.length){
                    {/*TODO: Backend to send finished ticket process*/}
                    handleClick("next");
                } else if (currentStep === steps.length-2) {
                    {/*TODO: Payment gateway prcess here*/}
                    console.log("Bayar!")
                    handleClick("next");
                } else {    
                    routeChange();
                }
                
                }}
             className={`transition duration-200 ease-in-out w-[202px] h-[69px] rounded-full bg-gradient-to-b hover:from-green-600 hover:to-blue-600 hover:transition from-color-2 to-color-3
                            font-inter font-medium text-[24px]`}>
                {currentStep !== steps.length ? (type === 0 ? "Kirim Permintaan" : "Lanjut Bayar") : "Selesai"}
            </button>
        </div>
    );
}

export default StepperControl;