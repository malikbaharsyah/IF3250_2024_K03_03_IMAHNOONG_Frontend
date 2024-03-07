import { useState } from "react";
import PhoneInput from "react-phone-number-input/input";
import { Link } from "react-router-dom";


const TicketReservationContent = () => {
    const [fullname, setFullname] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [phoneNumber, setPhoneNumber] = useState<string>();
    const [numberOfTickets, setNumberOfTickets] = useState<number>();

    return (
        <div className="flex flex-col items-center">
            <div className="my-12 text-color-4 font-inter font-semibold text-2xl size-fit">
                Data Pesanan-Pembayaran-Konfirmasi
            </div>
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
                
                <div className="flex flex-col justify-start size-fit bg-color-4 bg-opacity-20 rounded-[20px] p-8 text-color-4 font-inter gap-4">
                    <h2 className="font-semibold text-2xl">Ringkasan Pesanan</h2>
                    <div className="border-color-4 border-[1px] rounded-xl p-4 flex flex-col gap-6 place-content-between">
                        <div className="grid grid-flow-col gap-5">
                            <div className="flex flex-col gap-1">
                                <h2 className="font-semibold text-xs">Tanggal</h2>
                                <p className="font-bold text-base">Minggu, 3 Maret 2024</p>
                            </div>
                            <div className="border-color-4 max-h-full w-[1px] border-[1px]"/>
                            <div className="grid flex-col gap-1 place-content-end">
                                <h2 className="font-semibold text-xs">Pukul</h2>
                                <p className="font-bold text-base">08.00-12.00 WIB</p>
                            </div>
                        </div>
                        <div className="gap-1 flex flex-col">
                            <h2 className="font-semibold text-xs">Jumlah Tiket</h2>
                            <p className="font-bold text-base">2</p>
                        </div>
                    </div>
                    <h1 className="font-semibold text-xl">Ringkasan Harga</h1>
                    <div className="flex flex-col gap-[2px]">
                        <div className="grid grid-flow-col place-content-between font-medium text-base">
                            <h3>Harga Tiket</h3>
                            <p>Rp100.000,00,-</p>
                        </div>
                        <div className="grid grid-flow-col place-content-between font-bold text-base">
                            <h3>Total harga (2 tiket)</h3>
                            <p>Rp200.000,00,-</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Link to={"#"}>
                            <button className="w-[202px] h-[69px] rounded-full bg-gradient-to-b hover:from-green-600 hover:to-blue-600 hover:transition from-color-2 to-color-3
                                            font-inter font-medium text-[24px]">
                                Konfirmasi
                            </button>
                        </Link>
                        <Link to={"#"}>
                            <button className="w-[202px] h-[69px] rounded-full bg-gradient-to-b bg-opacity-40 hover:from-red-600 hover:to-red-400 hover:transition bg-color-4
                                            font-inter font-medium text-[24px]">
                                Batal
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TicketReservationContent;