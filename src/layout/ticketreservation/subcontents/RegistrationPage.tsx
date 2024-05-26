import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input/input";
import { RegistrationProps } from "../../../interfaces/TicketReservation";

const RegistrationPage: React.FC<RegistrationProps> = ({finalData, setFinalData, setIsFormValid, setJumlahTiket}) => {
    const [fullname, setFullname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>();
    const [numberOfTickets, setNumberOfTickets] = useState<number>(1);
    const [notes, setNotes] = useState<string>('');
    useEffect(() => {
        // Check form validity and update parent component
        if (fullname && email && phoneNumber && numberOfTickets > 0)
            { setIsFormValid(true); }
        else
            { setIsFormValid(false); }
        setFullname(finalData[0])
        setEmail(finalData[1])
        setPhoneNumber(finalData[2])
        setNumberOfTickets(finalData[3])
        setNotes(finalData[4])
    }, [fullname, email, phoneNumber, numberOfTickets, setIsFormValid, setFinalData, notes, finalData]);
      
    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center gap-4">
                <div className="size-fit rounded-3xl bg-color-2 bg-opacity-50 p-8 h-[493px] w-[733px]">
                    <h2 className="text-color-4 font-inter font-semibold text-2xl">
                        Data Pesanan
                    </h2>
                    <form className="grid grid-flow-row grid-rows-2 justify-stretch place-content-start text-opacity-60 text-color-4 gap-4 h-[90%] w-full mt-3">
                        <div className="flex mt-4 gap-7">
                            <div className="flex flex-col justify-end gap-3 w-full">
                                <label className="grid grid-flow-row  font-inter font-medium text-base">
                                    Nama Lengkap*
                                    <input className="my-2 w-full h-[40px] bg-[#0A061D] bg-opacity-20 border-color-4 border-[1px] rounded-xl p-3"
                                    type="text"
                                    value={fullname}
                                    onChange={(e) => {
                                        setFullname(e.target.value)
                                        setFinalData([e.target.value,email,phoneNumber,numberOfTickets,notes])
                                    }
                                    }/>
                                </label>
                                <label className="grid grid-flow-row font-inter font-medium text-base">
                                    No Telepon*
                                    <PhoneInput className="my-2 w-full h-[40px] bg-[#0A061D] bg-opacity-20 border-color-4 border-[1px] rounded-xl p-3"
                                    country="ID"
                                    value={phoneNumber}
                                    onChange={(e) => {
                                        setPhoneNumber(e)
                                        setFinalData([fullname,email,e,numberOfTickets,notes])
                                    }}/>
                                </label>    
                            </div>
                            <div className="flex flex-col justify-end gap-3">
                                <label className="grid grid-flow-row font-inter font-medium text-base">
                                    Email*
                                    <input className="my-2 w-[352px] h-[40px] bg-[#0A061D] bg-opacity-20 border-color-4 border-[1px] rounded-xl p-3"
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        setFinalData([fullname,e.target.value,phoneNumber,numberOfTickets,notes])
                                    }}/>
                                </label>
                                <label className="grid grid-flow-row font-inter font-medium text-base">
                                    Jumlah Tiket*
                                    <input className="my-2 w-[120px] h-[40px] bg-[#0A061D] bg-opacity-20 border-color-4 border-[1px] rounded-xl p-3"
                                    type="number"
                                    value={numberOfTickets}
                                    onChange={(e) => {
                                        setNumberOfTickets(e.target.valueAsNumber)
                                        setFinalData([fullname,email,phoneNumber,e.target.valueAsNumber,notes])
                                        setJumlahTiket(e.target.valueAsNumber)
                                    }}/>
                                </label>
                            </div>
                        </div>
                        
                        <div className="flex flex-col h-full gap-3 row-span-2">
                            Catatan
                            <textarea className="w-full h-full bg-[#0A061D] bg-opacity-20 border-color-4 border-[1px] rounded-xl p-3"
                            value={notes}
                            onChange={(e) => {
                                setNotes(e.target.value)
                                setFinalData([fullname,email,phoneNumber,numberOfTickets,e.target.value])
                            }}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;