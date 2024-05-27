import React, { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { StepperControlProps } from "../../../interfaces/TicketReservation";

const StepperControl: React.FC<StepperControlProps> = ({
    handleClick,
    currentStep,
    steps,
    type,
    finalDataReg,
    finalDataReq,
    condition,
    idTiket,
    setIdTiket,
    jadwalInfo,
    planetariumId
  }) => {
    const navigate = useNavigate();
    
    function timeStringToMinutes(time: string): number {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    }
    
    function getDurationInMinutes(start: string, end: string): number {
        const startMinutes = timeStringToMinutes(start);
        const endMinutes = timeStringToMinutes(end);
        return endMinutes - startMinutes;
    }

    function parseDateTime(dateString: string, timeString: string): Date {
        // Combine the date and time strings
        const combinedString = `${dateString}T${timeString}:00`;
    
        // Create and return a new Date object
        const date = new Date(combinedString);
        
        // Check if the date is valid
        if (isNaN(date.getTime())) {
            throw new Error("Invalid date or time format");
        }
        
        return date;
    }
    
    const handleFetch = () => {
        let id = '';
        const requestData = {
          namaPemesan: finalDataReg[0],
          jumlahTiket: finalDataReg[3],
          noTelepon: finalDataReg[2],
          email: finalDataReg[1],
          idJadwal: jadwalInfo[0],
          idPlanetarium: jadwalInfo[1],
          note: finalDataReg[4],
        //   waktuDibayar: new Date(),
        //   tanggalTiket: jadwalInfo[3],
        };
    
        fetch("http://localhost:9000/api/pesanTiket/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            id = data;
          })
          .catch((error) => console.error("Error fetching jadwal data:", error));
        
        setIdTiket(id);
    }

    const handleRequest = () => {
        const requestData = {
            planetariumId: parseInt(planetariumId),
            namaPemesan: finalDataReq[0],
            jumlahTiket: finalDataReq[6],
            email: finalDataReq[4],
            note: finalDataReq[7],
            konfirmasi: false,
            noTelepon: finalDataReq[5],
            waktuKunjungan: parseDateTime(finalDataReq[1], finalDataReq[2]),
            durasi: getDurationInMinutes(finalDataReq[2], finalDataReq[3]), 
        }
        fetch("http://localhost:9000/api/requestTiket/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.error("Error:", error))

    }

    
    

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
                                handleRequest();
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
                            handleFetch();
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