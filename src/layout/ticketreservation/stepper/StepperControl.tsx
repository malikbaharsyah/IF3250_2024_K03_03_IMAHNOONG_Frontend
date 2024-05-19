import { useNavigate } from "react-router-dom";
import { StepperControlProps } from "../../../interfaces/TicketReservation";

const StepperControl: React.FC<StepperControlProps> = ({handleClick, currentStep, steps, type, condition}) => {

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
                console.log("number" + currentStep);
                switch(currentStep){
                    case 1:
                        //fill out all form before continue;
                        if (condition.isFormValid) { handleClick("next"); }
                        else { alert("Tolong isi semua formulir terlebih dahulu" ); }
                        break;
                    case 2:
                        handleClick("next");
                        break;
                    case 3:
                        handleClick("next");
                        break;
                    case steps.length:
                        routeChange();
                        break;
                    default:
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