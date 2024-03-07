import { useState } from "react";
import PhoneInput from "react-phone-number-input/input";

const RegistrationPage = () => {
    const [fullname, setFullname] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [phoneNumber, setPhoneNumber] = useState<string>();
    const [numberOfTickets, setNumberOfTickets] = useState<number>();

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center gap-4">
                <div className="size-fit rounded-3xl bg-color-2 bg-opacity-50 p-8">
                    <div className="flex items-center gap-8 border-color-4 border-opacity-50 border-[1px] rounded-3xl p-2">
                        <img src="Mask group.png" className="rounded-3xl size-fit m-2"/>
                        <div className="grid grid-rows-2 items-center size-fit">
                            <h2 className="text-color-4 font-inter font-semibold text-2xl size-fit w-[418px]">
                                Nama Planetarium atau Observatorium
                            </h2>
                            <p className="text-color-4 font-inter font-normal size-fit w-[418px]">
                                Jl. Lokasi Planetarium atau Observatorium No. 99, 
                                Kecamatan Lembang, Kota Bandung, Jawa Barat 
                            </p>
                        </div>
                    </div>
                    <h2 className="text-color-4 font-inter font-semibold text-2xl mt-8">
                        Data Pesanan
                    </h2>
                    <div className="grid grid-cols-2 mt-4">
                        <div className="grid grid-flow-row">
                            <form>
                                <label className="grid grid-flow-row text-color-4 font-inter font-medium text-base">
                                    Nama Lengkap*
                                    <input className="my-2 w-[352px] h-[40px] bg-[#0A061D] bg-opacity-20 border-color-4 border-[1px] rounded-xl p-3"
                                    type="text"
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}/>
                                </label>
                            </form>
                            <form>
                                <label className="grid grid-flow-row text-color-4 font-inter font-medium text-base">
                                    No Telepon*
                                    <PhoneInput className="my-2 w-[300px] h-[40px] bg-[#0A061D] bg-opacity-20 border-color-4 border-[1px] rounded-xl p-3"
                                    country="ID"
                                    value={phoneNumber}
                                    onChange={(val) => setPhoneNumber(val)}/>
                                </label>
                            </form>
                        </div>
                        <div className="flex justify-end">
                            <form>
                                <label className="grid grid-flow-row text-color-4 font-inter font-medium text-base">
                                    Email*
                                    <input className="my-2 w-[352px] h-[40px] bg-[#0A061D] bg-opacity-20 border-color-4 border-[1px] rounded-xl p-3"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}/>
                                </label>
                                <label className="grid grid-flow-row text-color-4 font-inter font-medium text-base">
                                    Jumlah Tiket*
                                    <input className="my-2 w-[120px] h-[40px] bg-[#0A061D] bg-opacity-20 border-color-4 border-[1px] rounded-xl p-3"
                                    type="number"
                                    value={numberOfTickets}
                                    onChange={(e) => setNumberOfTickets(e.target.valueAsNumber)}/>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;