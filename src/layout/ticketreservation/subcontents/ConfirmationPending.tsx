import { ConfirmationProps } from "../../../interfaces/TicketReservation";


const ConfirmationPending: React.FC<ConfirmationProps> = ({finalData}) => {
    return(
        <div className="font-inter flex flex-col gap-4 size-fit rounded-3 p-8 text-color-4 h-full">
            <h3 className="font-bold text-[28px]">Menunggu Konfirmasi dari Admin</h3>
            <span className="bg-transparent resize-none font-regular text-[20px] w-[44vw] overflow-y-auto text">
            Terkait permintaan pesanan Anda akan kami kirim konfirmasi persetujuan pengajuan jadwal melalui email anda yaitu {finalData[4]}. Harap periksa email Anda secara berkala, Terima Kasih.
            </span>
            <h2 className="font-semibold text-[24px] flex">Detail Permintaan:</h2>
            <div className="grid grid-flow-col bg-color-4 bg-opacity-20 rounded-2xl p-6 items-center resize-y font-regular text-[20px] h-max w-full">
                <div>
                    <p>Nama Lengkap </p> 
                    <p>Email </p> 
                    <p>No Telepon </p> 
                    <p>Tanggal Kunjungan </p> 
                    <p>Jam Mulai </p> 
                    <p>Jam Selesai </p> 
                    <p>Jumlah Pengunjung </p> 
                    <p>Catatan </p> 
                </div>
                <div>
                    <p>: {finalData[0]}</p>
                    <p>: {finalData[4]}</p>
                    <p>: {finalData[5]}</p>
                    <p>: {finalData[1]}</p>
                    <p>: {finalData[2]}</p>
                    <p>: {finalData[3]}</p>
                    <p>: {finalData[6]}</p>
                    <p>: {finalData[7]}</p>
                </div>
            </div>
            
        </div>
    )
}

export default ConfirmationPending;