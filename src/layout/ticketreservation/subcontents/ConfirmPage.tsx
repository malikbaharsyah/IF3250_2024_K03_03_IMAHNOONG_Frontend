

const ConfirmPage = () => {
    return (
        <div className="font-inter text-color-4 flex flex-col justify-start items-center gap-4">
            <h1 className="font-medium text-[24px]">Terima Kasih!</h1>
            <h2 className="font-semibold text-[32px]">Transaksi anda telah berhasil.</h2>
            <div className="rounded-[20px] bg-color-2 bg-opacity-50 p-6 gap-4 flex flex-col">
                <h3 className="font-semibold text-[28px]">Detail Pembelian</h3>
                <div className="bg-white h-px w-full xl:w-[40vw]"/>
                <div className="grid grid-cols-2 justify-between gap-6 font-medium text-[24px] items-center">
                    <h4>
                        ID Pemesanan
                    </h4>
                    <p className="text-[20px] font-bold">
                        1239e0w32i
                    </p>
                    <h4>
                        Status Transaksi
                    </h4>
                    <div className="rounded-[8px] bg-color-7 w-min">
                        <p className="px-11 py-2 font-regular text-[24px]">
                            Success
                        </p>
                    </div>
                    <h4>
                        Status Pembayaran
                    </h4>
                    <div className="rounded-[8px] bg-color-7 w-min">
                        <p className="px-11 py-2 font-regular text-[24px]">
                            Paid
                        </p>
                    </div>
                    <h4>
                        Pesan
                    </h4>
                    <textarea disabled className="bg-transparent resize-none font-regular text-[16px]"
                              defaultValue={"Transaksi berhasil pada 2/03/2024\n17:08 WIB"}/>
                </div>
                <div className="flex flex-col gap-4 font-medium text-[24px]">
                    <h4>
                        Metode Pembayaran
                    </h4>
                    <div className="flex flex-row items-center gap-6">
                        <img className="rounded-lg" src={`./PaymentLogo/LogoMandiri.svg`} alt={`logomandiri`}/>
                        <p className="text-[20px]">Mandiri Virtual Account</p>
                    </div>
                    <h4>
                        Total Pembayaran
                    </h4>
                    <div className="flex items-center justify-between rounded-[8px] bg-color-4 bg-opacity-20 px-4 py-4">
                        <p className="px-2 font-medium text-2xl">Rp1.000.000,00.-</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmPage;