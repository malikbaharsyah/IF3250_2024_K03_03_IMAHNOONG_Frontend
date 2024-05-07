import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { JadwalAdmin } from "../../interfaces/JadwalAdmin";
import axios from "axios";
import api from "../../services/api";

const JadwalAcara = () => {
  const [jadwalData, setJadwalData] = useState<JadwalAdmin[]>([]);

  useEffect(() => {
    api.get(`/api/jadwalAdmin/Acara/${localStorage.getItem("idPlanetarium")}`)
      .then((response) => {
        setJadwalData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDeleteClick = async (id: string) => {
  
    try {
        const response = await api.post('/api/jadwal/deleteJadwal', {
            jadwalId : parseInt(id),
        });
        console.log('jadwal delete successfully:', response.data);
    } catch (error) {
        console.error('Error delete jadwal :', error);
    }
    setJadwalData(prevJadwalData => prevJadwalData.filter(item => item.id.toString() !== id));
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-center rtl:text-right text-gray-500">
        <thead className="text-xs text-black uppercase">
          <tr className="bg-white border-b-2">
            <th scope="col" className="px-4 py-3">
              No.
            </th>
            <th scope="col" className="px-4 py-3">
              Foto
            </th>
            <th scope="col" className="px-4 py-3">
              Nama Acara
            </th>
            <th scope="col" className="px-4 py-3">
              Deskripsi
            </th>
            <th scope="col" className="px-4 py-3">
              Harga Tiket
            </th>
            <th scope="col" className="px-4 py-3">
              Kapasitas
            </th>
            <th scope="col" className="px-4 py-3">
              Tanggal
            </th>
            <th scope="col" className="px-4 py-3">
              Pukul
            </th>
            <th scope="col" className="px-4 py-3">
              Durasi
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
                {index+1}
              </th>
              <td className="px-4 py-4">
                <img src={`${item.imagePath[0]}`} alt={`Acara ${index}`} className="w-8 h-8" />
              </td>
              <td className="px-4 py-4">
                <p className="line-clamp-3">
                  {item.namaJadwal}
                </p>
              </td>
              <td className="px-4 py-4">
                <p className="line-clamp-3">
                  {item.deskripsiJadwal}
                </p>
              </td>
              <td className="px-4 py-4">Rp20.000</td>
              <td className="px-4 py-4">{item.kapasitas}</td>
              <td className="px-4 py-4">{item.tanggal}</td>
              <td className="px-4 py-4">{item.waktu}</td>
              <td className="px-4 py-4">2 jam</td>
              <td className="px-4 py-4">
                <NavLink
                  to={"/editAcara/" + item.id.toString()}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </NavLink>
              </td>
              <td className="px-4 py-4">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-red-500 hover:underline"
                onClick={() => handleDeleteClick(item.id.toString())}
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
          {/* Tambah baris jadwal acara lainnya di sini */}
        </tbody>
      </table>
    </div>
  );
};

export default JadwalAcara;
