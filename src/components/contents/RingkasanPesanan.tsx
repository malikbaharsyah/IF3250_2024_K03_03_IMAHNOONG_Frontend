import Reschedule from "./Reschedule";
const RingkasanPesanan = () => {
    return (
        <div className="flex flex-col w-full h-fit rounded-3xl font-inter">
            <div className="flex flex-col bg-white p-8 w-full h-fit rounded-3xl">
                
                <div className="flex flex-row justify-between border-b-4 pb-4">
                    <div className="font-bold text-4xl">
                        Ringkasan Pesanan
                    </div>
                    <div className="font-semibold text-2xl">
                        Jenis : Acara
                        {/* Jenis : Kunjungan
                        Jenis : Permintaan Kunjungan */}
                    </div>
                </div>
                <div className="font-semibold text-2xl py-4">
                    Order ID : 123123
                    {/* Request ID : 123123 */}
                </div>
                
                <div className="flex flex-row">
                    <div className="flex flex-col pr-8">
                        <div className="text-3xl font-semibold">
                            Data Pesanan
                        </div>
                        <div className="font-medium text-2xl">
                            <table>
                                <tbody>
                                    <tr>
                                        <td style={{ verticalAlign: 'top' }}>Nama Acara/Show</td>
                                        <td style={{ verticalAlign: 'top' }}>:</td>
                                        <td style={{ verticalAlign: 'top' }}>Lorem Ipsum</td>
                                    </tr>
                                    <tr>
                                        <td style={{ verticalAlign: 'top' }}>Tanggal</td>
                                        <td style={{ verticalAlign: 'top' }}>:</td>
                                        <td style={{ verticalAlign: 'top' }}>24/06/2024</td>
                                    </tr>
                                    <tr>
                                        <td style={{ verticalAlign: 'top' }}>Waktu</td>
                                        <td style={{ verticalAlign: 'top' }}>:</td>
                                        <td style={{ verticalAlign: 'top' }}>15:30 WIB</td>
                                    </tr>
                                    <tr>
                                        <td style={{ verticalAlign: 'top' }}>Jumlah Tiket</td>
                                        <td style={{ verticalAlign: 'top' }}>:</td>
                                        <td style={{ verticalAlign: 'top' }}>2</td>
                                    </tr>
                                    <tr>
                                        <td style={{ verticalAlign: 'top' }}>Harga Tiket</td>
                                        <td style={{ verticalAlign: 'top' }}>:</td>
                                        <td style={{ verticalAlign: 'top' }}>Rp100.000</td>
                                    </tr>
                                    <tr>
                                        <td style={{ verticalAlign: 'top' }}>Total Harga</td>
                                        <td style={{ verticalAlign: 'top' }}>:</td>
                                        <td style={{ verticalAlign: 'top' }}>Rp200.000</td>
                                    </tr>
                                    <tr>
                                        <td style={{ verticalAlign: 'top' }}>Metode Pembayaran     </td>
                                        <td style={{ verticalAlign: 'top' }}>:</td>
                                        <td style={{ verticalAlign: 'top' }}>Mandiri Virtual Account</td>
                                    </tr>
                                    <tr>
                                        <td style={{ verticalAlign: 'top' }}>Status</td>
                                        <td style={{ verticalAlign: 'top' }}>:</td>
                                        <td style={{ verticalAlign: 'top' }}>
                                            <div className="px-4 py-1 bg-color-2 w-fit rounded-2xl text-white">
                                                Lunas
                                            </div>
                                            <div className="px-4 py-1 bg-color-11 w-fit rounded-2xl text-white">
                                                Proses bayar
                                            </div>
                                            <div className="px-4 py-1 bg-color-8 w-fit rounded-2xl text-white">
                                                Perlu konfirmasi
                                            </div>
                                            <div className="px-4 py-1 bg-color-10 w-fit rounded-2xl text-white">
                                                Pembayaran gagal
                                            </div>
                                            <div className="px-4 py-1 bg-color-7 w-fit rounded-2xl text-white">
                                                Permintaan diterima
                                            </div>
                                            <div className="px-4 py-1 bg-color-9 w-fit rounded-2xl text-white">
                                                Permintaan ditolak
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex flex-col" >
                        <div className="text-3xl font-semibold">
                            Data Pemesan
                        </div>
                        <div className="font-medium text-2xl">
                            <table>
                                <tbody>
                                    <tr>
                                        <td style={{ verticalAlign: 'top' }}>Nama</td>
                                        <td style={{ verticalAlign: 'top' }}>:</td>
                                        <td style={{ verticalAlign: 'top' }}>Lorem Ipsum</td>
                                    </tr>
                                    <tr>
                                        <td style={{ verticalAlign: 'top' }}>Email</td>
                                        <td style={{ verticalAlign: 'top' }}>:</td>
                                        <td style={{ verticalAlign: 'top' }}>iloveppl@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td style={{ verticalAlign: 'top' }}>No Telepon     </td>
                                        <td style={{ verticalAlign: 'top' }}>:</td>
                                        <td style={{ verticalAlign: 'top' }}>080808080808</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col pb-4" >
                <div className="font-medium text-2xl">
                    <table>
                        <tbody>
                            <tr>
                                <td style={{ verticalAlign: 'top' }}>Catatan / Detail Permintaan :</td>
                            </tr>
                            <tr>
                                <td style={{ verticalAlign: 'top' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                {/* checkbox untuk reschedule */}
                <div className="flex justify-end"> 
                <input type="checkbox" className="h-8 w-8 cursor-pointer"/>
                    <label htmlFor="checkbox" className="ml-2 text-2xl font-medium">
                        Lakukan penjadwalan ulang
                    </label>
                </div>
                
                {/* button konfirmasi request */}
                <div className="flex flex-row justify-end">
                    <button className="bg-color-9 w-fit text-white font-inter font-medium text-xl py-2 px-8 mx-4 rounded-3xl hover:scale-105">
                        Tolak
                    </button>
                    <button className="bg-color-7 w-fit text-white font-inter font-regular text-xl py-2 px-8 rounded-3xl hover:scale-105">
                        Terima
                    </button>
                </div>
            </div>
            <div className="mt-8">
                <Reschedule/>
            </div>
        </div>
    );
}

export default RingkasanPesanan;