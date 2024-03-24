const Reschedule = () => {
    return (
        <div className="flex flex-col w-full h-fit rounded-3xl font-inter">
            <div className="flex flex-col bg-white p-8 w-full h-fit rounded-3xl">
                <div className="flex flex-row justify-between border-b-4 pb-4">
                    <div className="font-bold text-xl">
                        Penjadwalan Ulang
                    </div>
                    <div className="font-semibold text-lg">
                        Jenis : Acara
                        {/* Jenis : Kunjungan
                        Jenis : Permintaan Kunjungan */}
                    </div>
                </div>
                <div className="text-sm py-2">
                    <table>
                        <tbody>
                            <tr>
                                <td className="font-semibold" style={{ verticalAlign: 'top' }}>Order ID</td>
                                <td style={{ verticalAlign: 'top' }}>:</td>
                                <td style={{ verticalAlign: 'top' }}>123123</td>
                            </tr>
                            <tr>
                                <td className="font-semibold" style={{ verticalAlign: 'top' }}>Waktu Pemesanan</td>
                                <td style={{ verticalAlign: 'top' }}>:</td>
                                <td style={{ verticalAlign: 'top' }}>2024-03-24 15:30 WIB</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className="flex flex-row">
                    <div className="flex flex-col pr-8">
                        <div className="text-lg font-semibold">
                            Data Pesanan
                        </div>
                        <div className="font-medium text-md mt-2">
                            <table>
                                <tbody>
                                    <tr>
                                        <td style={{ verticalAlign: 'top' }}>Nama Acara/Show</td>
                                        <td style={{ verticalAlign: 'top' }}>:</td>
                                        <td style={{ verticalAlign: 'top' }}>Lorem Ipsum</td>
                                    </tr>
                                        <tr>
                                        <td style={{ verticalAlign: 'top' }}>
                                            <div className="mb-4">
                                                Tanggal Kunjungan
                                            </div>
                                        </td>
                                        <td style={{ verticalAlign: 'top' }}>:</td>
                                        <td style={{ verticalAlign: 'top' }}>
                                            <input type="date" className=" border border-color-2 rounded-md px-2" />  
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ verticalAlign: 'top' }}>
                                            <div className="mb-4">
                                                Waktu Kunjungan
                                            </div>
                                        </td>
                                        <td style={{ verticalAlign: 'top' }}>:</td>
                                        <td style={{ verticalAlign: 'top' }}>
                                            <input type="time" className="border border-color-2 rounded-md px-2" />
                                        </td>
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
                                            <div className="px-4 py-1 bg-color-2 w-fit rounded-full text-white">
                                                Lunas
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex flex-col" >
                        <div className="text-lg font-semibold">
                            Data Pemesan
                        </div>
                        <div className="font-medium text-md mt-2">
                            <table>
                                <tbody >
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
                <div className="font-medium text-lg">
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
                <div className="flex justify-end">
                    <button className="bg-color-7 w-fit text-white font-inter font-regular text-xl py-2 px-8 rounded-3xl hover:scale-105">
                        Simpan
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Reschedule;