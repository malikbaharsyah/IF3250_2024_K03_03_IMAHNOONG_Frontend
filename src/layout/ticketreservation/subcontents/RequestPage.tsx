import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input/input";
import { RequestProps } from "../../../interfaces/TicketReservation";

const RequestPage: React.FC<RequestProps> = ({finalData, setFinalData, setIsFormValid}) => {
    const [fullname, setFullname] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [timeStart, setTimeStart] = useState<string>('');
    const [timeEnd, setTimeEnd] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>();
    const [numberOfTickets, setNumberOfTickets] = useState<number>(0);
    const [notes, setNotes] = useState<string>('');
    useEffect(() => {
        // Check form validity and update parent component
        if (fullname && email && date && timeStart && timeEnd && phoneNumber && numberOfTickets > 0)
            { setIsFormValid(true); }
        else
            { setIsFormValid(false); }
        setFullname(finalData[0])
        setDate(finalData[1])
        setTimeStart(finalData[2])
        setTimeEnd(finalData[3])
        setEmail(finalData[4])
        setPhoneNumber(finalData[5])
        setNumberOfTickets(finalData[6])
        setNotes(finalData[7])
    }, [fullname, email, phoneNumber, numberOfTickets, setIsFormValid, setFinalData, notes, finalData, date, timeStart, timeEnd]);
      
    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center gap-4">
                <div className="h-fit w-[733px]">
                    <h2 className="text-color-4 font-inter font-semibold text-2xl">
                        Data Permintaan Pesanan
                    </h2>
                    <form className="grid grid-flow-row grid-rows-1 justify-stretch place-content-start text-opacity-60 text-color-4 gap-4 w-full mt-3 h-fit">
                        <div className="flex mt-2 gap-7 h-full">
                            <div className="flex flex-col justify-end gap-3 w-full">
                                <label className="grid grid-flow-row  font-inter font-medium text-base">
                                    Nama Lengkap*
                                    <input className="my-2 w-full h-[40px] bg-[#0A061D] bg-opacity-20 border-color-4 border-[1px] rounded-xl p-3"
                                    type="text"
                                    value={fullname}
                                    onChange={(e) => {
                                        setFullname(e.target.value)
                                        setFinalData([e.target.value,date,timeStart,timeEnd,email,phoneNumber,numberOfTickets,notes])
                                    }
                                    }/>
                                </label>
                                <label className="grid grid-flow-row  font-inter font-medium text-base">
                                    Tanggal Kunjungan*
                                    <input className="my-2 w-full h-[40px] bg-[#0A061D] bg-opacity-20 border-color-4 border-[1px] rounded-xl p-3"
                                    type="date"
                                    value={date}
                                    onChange={(e) => {
                                        setDate(e.target.value)
                                        setFinalData([fullname,e.target.value,timeStart,timeEnd,email,phoneNumber,numberOfTickets,notes])
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
                                        setFinalData([fullname,date,timeStart,timeEnd,email,e,numberOfTickets,notes])
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
                                        setFinalData([fullname,date,timeStart,timeEnd,e.target.value,phoneNumber,numberOfTickets,notes])
                                    }}/>
                                </label>
                                <label className="grid grid-flow-row  font-inter font-medium text-base">
                                Waktu Kunjungan (jam mulai-jam akhir)*
                                    <div className="flex flex-row gap-4">
                                        <input className="my-2 w-[45%] h-[40px] bg-[#0A061D] bg-opacity-20 border-color-4 border-[1px] rounded-xl p-3"
                                        type="time"
                                        value={timeStart}
                                        onChange={(e) => {
                                            setTimeStart(e.target.value)
                                            setFinalData([fullname,date,e.target.value,timeEnd,email,phoneNumber,numberOfTickets,notes])
                                        }
                                        }/>
                                        <input className="my-2 w-[45%] h-[40px] bg-[#0A061D] bg-opacity-20 border-color-4 border-[1px] rounded-xl p-3"
                                        type="time"
                                        value={timeEnd}
                                        onChange={(e) => {
                                            setTimeEnd(e.target.value)
                                            setFinalData([fullname,date,timeStart,e.target.value,email,phoneNumber,numberOfTickets,notes])
                                        }
                                        }/>
                                    </div>
                                </label>
                                <label className="grid grid-flow-row font-inter font-medium text-base">
                                    Jumlah Tiket*
                                    <input className="my-2 w-[120px] h-[40px] bg-[#0A061D] bg-opacity-20 border-color-4 border-[1px] rounded-xl p-3"
                                    type="number"
                                    value={numberOfTickets}
                                    onChange={(e) => {
                                        setNumberOfTickets(e.target.valueAsNumber)
                                        setFinalData([fullname,date,timeStart,timeEnd,email,phoneNumber,e.target.valueAsNumber,notes])
                                        }}/>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col h-fit gap-3 row-span-1">
                            Catatan
                            <textarea className="w-full h-fit bg-[#0A061D] bg-opacity-20 border-color-4 border-[1px] rounded-xl p-3"
                            value={notes}
                            onChange={(e) => {
                                setNotes(e.target.value)
                                setFinalData([fullname,date,timeStart,timeEnd,email,phoneNumber,numberOfTickets,e.target.value])
                            }}
                            />
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RequestPage;