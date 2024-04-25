import { Fragment } from 'react';

const JadwalKunjungan = () => {
    return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-center rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-white">
                <tr>
                    <th scope="col" className="px-4 py-3">
                        No.
                    </th>
                    <th scope="col" className="px-4 py-3">
                        Nama Show
                    </th>
                    <th scope="col" className="px-4 py-3">
                        Tanggal
                    </th>
                    <th scope="col" className="px-4 py-3">
                        Pukul
                    </th>
                    <th scope="col" className="px-4 py-3">
                        Kapasitas
                    </th>
                    <th scope="col" className="px-4 py-3">
                        Harga Tiket
                    </th>
                    <th scope="col" className="px-4 py-3">
                        Edit
                    </th>
                    <th scope="col" className="px-4 py-3">
                        Hapus
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
                            <p className="line-clamp-3">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum</p>
                    </td>
                    <td className="px-4 py-4">
                        24/04/2024
                    </td>
                    <td className="px-4 py-4">
                        12:06
                    </td>
                    <td className="px-4 py-4">
                        200/200
                    </td>
                    <td className="px-4 py-4">
                        Rp20.000
                    </td>
                    <td className="px-4 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                    <td className="px-4 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-red-500 hover:underline">Hapus</a>
                    </td>
                    <td className="px-4 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-green-500 hover:underline">Lihat</a>
                    </td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50 border-b">
                    <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">
                        2
                    </th>
                    <td className="px-4 py-4">
                            <p className="line-clamp-3">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum</p>
                    </td>
                    <td className="px-4 py-4">
                        24/04/2024
                    </td>
                    <td className="px-4 py-4">
                        12:06
                    </td>
                    <td className="px-4 py-4">
                        200/200
                    </td>
                    <td className="px-4 py-4">
                        Rp20.000
                    </td>
                    <td className="px-4 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                    <td className="px-4 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-red-500 hover:underline">Hapus</a>
                    </td>
                    <td className="px-4 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-green-500 hover:underline">Lihat</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    );
}

export default JadwalKunjungan;
