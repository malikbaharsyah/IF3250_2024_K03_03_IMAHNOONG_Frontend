import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { JadwalAdmin } from "../../interfaces/JadwalAdmin";

const JadwalKunjungan = () => {
  const [jadwalData, setJadwalData] = useState<JadwalAdmin[]>([]);

  useEffect(() => {
    fetch("http://localhost:9000/api/jadwalAdmin/Kunjungan/1")
      .then((response) => response.json())
      .then((data) => {
        setJadwalData(data);
      })

      .catch((error) => console.error("Error fetching jadwal data:", error));
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-center rtl:text-right text-gray-500">
        <thead className="text-xs text-black uppercase">
          <tr className="bg-white border-b-2">
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
          {jadwalData.map((item, index) => (
            <tr className="odd:bg-white even:bg-gray-50 border-b">
              <th
                scope="row"
                className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {index + 1}
              </th>
              <td className="px-4 py-4">
                <p className="line-clamp-3">
                  {item.namaJadwal}
                </p>
              </td>
              <td className="px-4 py-4">{item.tanggal}</td>
              <td className="px-4 py-4">{item.waktu}</td>
              <td className="px-4 py-4">{item.kapasitas}</td>
              <td className="px-4 py-4">Rp20.000</td>
              <td className="px-4 py-4">
                <NavLink
                  to="/editkunjungan"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </NavLink>
              </td>
              <td className="px-4 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-red-500 hover:underline"
                >
                  Hapus
                </a>
              </td>
              <td className="px-4 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-green-500 hover:underline"
                >
                  Lihat
                </a>
              </td>
            </tr>
          ))}
          {/* Tambah baris jadwal kunjungan lainnya di sini */}
        </tbody>
      </table>
    </div>
  );
};

export default JadwalKunjungan;
