

const ConfirmationPending = () => {
    return(
        <div className="font-inter flex flex-col gap-4 size-fit rounded-3xl bg-color-2 bg-opacity-50 p-8 text-color-4 h-full">
            <h2 className="font-semibold text-[24px]">Status Pesanan:</h2>
            <h3 className="font-bold text-[28px]">Menunggu Konfirmasi dari Admin</h3>
            <textarea disabled className="bg-transparent resize-none font-regular text-[20px] w-[44vw] overflow-y-auto"
                defaultValue={"Terkait konfirmasi pesanan Anda akan Kami kirim melalui email. Harap cek email Anda secara berkala (ini kalo ada susunan kata yg lebih bagus ganti aja)"}/>
            <h2 className="font-semibold text-[24px]">Data Pesanan:</h2>
            <div>
                <p>Jennie Kim</p>
                <p>JennieKim@gmail.com / 081267459812</p>
            </div>
            <h2 className="font-semibold text-[24px]">Detail Permintaan:</h2>
            <span className="bg-transparent resize-y font-regular text-[20px] w-[44vw] h-max text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            </span>
            
        </div>
    )
}

export default ConfirmationPending;