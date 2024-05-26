import { useNavigate } from "react-router-dom";
import { StepperControlProps } from "../../../interfaces/TicketReservation";

const StepperControl: React.FC<StepperControlProps> = ({handleClick, currentStep, steps, type, finalDataReg, finalDataReq, condition, idTiket, setIdTiket}) => {

    const navigate = useNavigate(); 
    const routeChange = () =>{ 
        const path = `/`; 
        navigate(path);
    }

    return (
        <div className="flex justify-around my-2 gap-4 transition">
            {currentStep === steps.length /*|| currentStep === steps.length-1*/ ? <></> : <button onClick={() => handleClick("")}
            className={`transition duration-200 ease-in-out w-[202px] h-[69px] rounded-full bg-gradient-to-b bg-opacity-40 hover:from-red-600 hover:to-red-400 hover:transition bg-color-4
                            font-inter font-medium text-[24px] ${currentStep === steps.length || (currentStep === 2 && type === 0) ? "hidden" : ""}`}>
                Batal
            </button>}
            <button onClick={() => {
                console.log("number" + currentStep);
                console.log(type)
                switch(currentStep){
                    case 1:
                        //fill out all form before continue;
                        if (condition.isFormValid) { 
                            if (type === 0){
                                //TODO: integrasi kirim ke backend permintaan jadwalnya
                            }
                            handleClick("next"); 
                        }
                        else { 
                            alert("Tolong isi semua formulir terlebih dahulu dengan benar" ); 
                        }
                        break;
                    case 2:
                        if (type === 0){
                            routeChange();
                        } else if (condition.paymentMethod) {
                            handleClick("next");
                        } else {
                            alert("Pilih metode pembayaran!") 
                        }
                        break;
                    case 3:
                        if (condition.paymentMethod || type === 1) {
                            handleClick("next");
                            // bikin tiket
                        }
                        else { 
                            alert("Pilih metode pembayaran!") 
                        }
                        break;
                    case steps.length:
                        if (type === 0){
                            console.log(finalDataReq)
                            //TODO: Integrasi request
                        } else {
                            console.log(finalDataReg)
                            //TODO: Integrasi registrasi
                        }
                        routeChange();
                        break;
                    default:
                }
            }}
            className={`transition duration-200 ease-in-out w-[202px] h-[69px] rounded-full bg-gradient-to-b hover:from-green-600 hover:to-blue-600 hover:transition from-color-2 to-color-3
                            font-inter font-medium text-[24px] ${currentStep === 2 && type === 0 ? "" : ""}`}>
                {
                    currentStep !== steps.length ? (type === 0 && currentStep === 1 ? "Kirim Permintaan" : (currentStep === 2 ? "Halaman Utama" : "Selanjutnya")) : "Selesai"
                }
            </button>
        </div>
    );
}

export default StepperControl;