import { NavLink } from 'react-router-dom';

const PemesananAll = () => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-center rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase">
                    <tr className='bg-white border-b-2'>
                        <th scope="col" className="px-4 py-3">
                            No.
                        </th>
                        <th scope="col" className="px-4 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Jenis Pemesanan
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Waktu Pemesanan
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Nama Pemesan
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Acara / Kunjungan  
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Waktu & Tanggal Kunjungan
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Lihat Pemesanan
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-white even:bg-gray-50 border-b">
                        <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">
                            1
                        </th>
                        <td className="px-4 py-4">
                            123456
                        </td>
                        <td className="px-4 py-4">
                            Regular
                        </td>
                        <td className="px-4 py-4">
                            18:46
                        </td>
                        <td className="px-4 py-4">
                            Veveel
                        </td>
                        <td className="px-4 py-4">
                            iloveppl@gmail.com
                        </td>
                        <td className="px-4 py-4">
                            Acara
                        </td>
                        <td className="px-4 py-4">
                            <p>18:09</p>
                            <p>2024-04-11</p>
                        </td>
                        <td className="px-4 py-4">
                            <div className="px-4 py-1 bg-color-2 w-fit rounded-full text-white">
                                Lunas
                            </div>
                            {/* <div className="px-4 py-1 bg-color-11 w-fit rounded-full text-white">
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
                            </div> */}
                        </td>
                        <td className="px-4 py-4">
                            <a href="/detailpemesanan" className="font-medium text-blue-600 dark:text-green-500 hover:underline">Lihat</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PemesananAll;
