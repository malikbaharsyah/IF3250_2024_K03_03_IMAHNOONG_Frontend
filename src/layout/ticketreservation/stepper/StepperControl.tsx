import { StepperControlProps } from "../../../interfaces/TicketReservation";

const StepperControl: React.FC<StepperControlProps> = ({handleClick, currentStep, steps}) => {
    const test = 0
    return (
        <div className="flex justify-around my-2 gap-4 transition">
            {currentStep === steps.length ? <></> : <button onClick={() => handleClick("")}
            className={`transition duration-200 ease-in-out w-[202px] h-[69px] rounded-full bg-gradient-to-b bg-opacity-40 hover:from-red-600 hover:to-red-400 hover:transition bg-color-4
                            font-inter font-medium text-[24px] ${currentStep === steps.length ? "w-0" : ""}`}>
                Batal
            </button>}
            <button onClick={() => handleClick("next")}
             className={`transition duration-200 ease-in-out w-[202px] h-[69px] rounded-full bg-gradient-to-b hover:from-green-600 hover:to-blue-600 hover:transition from-color-2 to-color-3
                            font-inter font-medium text-[24px]`}>
                {currentStep !== steps.length ? (test === null ? "Kirim Permintaan" : "Bayar") : "Selesai"}
            </button>
        </div>
    );
}

export default StepperControl;