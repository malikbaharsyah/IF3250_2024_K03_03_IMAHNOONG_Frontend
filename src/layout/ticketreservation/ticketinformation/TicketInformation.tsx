

const TicketInformation = () =>{
    return (
        <div className="transition flex flex-col gap-2">
            <h2 className="font-medium text-base font-inter">Order ID: 453509318</h2>
            <h2 className="font-semibold text-2xl font-inter">Ringkasan Pesanan</h2>
            <div className="border-color-4 border-[1px] rounded-xl p-4 flex flex-col gap-3 place-content-between">
                <h2 className="font-bold text-base">Nama Planetarium atau Observatorium</h2>
                <h2 className="font-semibold text-base">Nama Show</h2>
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
        </div>
    )
}

export default TicketInformation;