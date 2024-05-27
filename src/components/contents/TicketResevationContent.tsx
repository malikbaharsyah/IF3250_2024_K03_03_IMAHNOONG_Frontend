/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useMemo, useState } from "react";
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
import { Jadwal } from "../../interfaces/detailsData";
import { Planetarium } from '../../interfaces/Planetarium';


interface TicketReservationProps extends React.HTMLProps<HTMLDivElement>{
    planetariumId: string;
    id: string;
    date: string;
}

const TicketReservationContent: React.FC<TicketReservationProps> = ({planetariumId, id, date}) => {

    if (planetariumId === null || id === null) {
        return
    }
    const [ticketData, setTicketData] = useState<Jadwal>();
    const [planetariumData, setPlanetarium] = useState<Planetarium>();
    const [jumlahTiket, setJumlahTiket] = useState(1);
    const [idTiket, setIdTiket] = useState('');
    

    console.log(planetariumId, id)
    useEffect(() => {
        fetch("http://localhost:9000/api/pesanTiket/"+planetariumId+"/"+id)
            .then((response) => response.json())
            .then((data) => {
                setTicketData(data);
            })
        
            .catch((error) => console.error("Error fetching review data:", error));
    }, []);

    console.log(ticketData)

    useEffect(() => {
        fetch("http://localhost:9000/api/details/"+planetariumId)
            .then((response) => response.json())
            .then((data) => {
                setPlanetarium(data);
            })
        
            .catch((error) => console.error("Error fetching review data:", error));
    }, []);

    const [jadwalInfo, setJadwalInfo] = useState<[number, number, Date, string]>([parseInt(id), parseInt(planetariumId), new Date(), date]);

    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState('');
    // const [finalData, setFinalData] = useState<[string, string, string | undefined, number, string, number, number, ]>(['', '', '', 1, '']);
    const [finalData, setFinalData] = useState<[string, string, string | undefined, number, string]>(['', '', '', 1, '']);
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
                    setJumlahTiket= {setJumlahTiket}
                />
            case 2:
                return <PaymentMethod
                    setPaymentMethod = {setPayment}
                />
            case 3:
                return <PaymentPage totalPembayaran={finalData[3]*ticketData?.hargaTiket!!}/>
            case 4:
                return <ConfirmPage idTiket={idTiket} totalPembayaran={finalData[3]*ticketData?.hargaTiket!!}/>
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
                            <TicketInformation namaPlanetarium={planetariumData?.namaPlanetarium!!} namaShow={ticketData?.namaJadwal!!} tanggal={date} waktu={ticketData?.waktuKunjungan[0]!!} jumlahTiket={jumlahTiket} hargaTiket={ticketData?.hargaTiket!!}/>
                            {/* <TicketInformation/> */}
                            <StepperControl
                                handleClick={handleClick}
                                currentStep={currentStep}
                                steps={steps}
                                type={1}
                                finalDataReg={finalData}
                                finalDataReq={['', '', '', '', '', '', 0, '']}
                                condition={condition}
                                idTiket={idTiket}
                                setIdTiket={setIdTiket}
                                jadwalInfo={jadwalInfo} 
                                planetariumId={planetariumId}                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TicketReservationContent;