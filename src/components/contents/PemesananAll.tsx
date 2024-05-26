import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Pesanan } from "../../interfaces/Pesanan";
import api from "../../services/api";

const PemesananAll = () => {
  const [pesananData, setPesananData] = useState<Pesanan[]>([]);

  useEffect(() => {
    api.get(`/api/pesanan/listPesanan/${localStorage.getItem("idPlanetarium")}/all`)
      .then((response) => {
        setPesananData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function getStatusDiv(status: string) {
    switch (status) {
      case "Lunas":
        return (
          <div className="px-4 py-1 bg-color-2 w-fit rounded-full text-white">
            {status}
          </div>
        );
      case "Proses Bayar":
        return (
          <div className="px-4 py-1 bg-color-11 w-fit rounded-full text-white">
            {status}
          </div>
        );
      case "Perlu Konfirmasi":
        return (
          <div className="px-4 py-1 bg-color-8 w-fit rounded-2xl text-white">
            {status}
          </div>
        );
      case "Pembayaran gagal":
        return (
          <div className="px-4 py-1 bg-color-10 w-fit rounded-2xl text-white">
            {status}
          </div>
        );
      case "Permintaan Diterima":
        return (
          <div className="px-4 py-1 bg-color-7 w-fit rounded-2xl text-white">
            {status}
          </div>
        );
      case "Permintaan Ditolak":
        return (
          <div className="px-4 py-1 bg-color-9 w-fit rounded-2xl text-white">
            {status}
          </div>
        );
      default:
        return "";
    }
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-center rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase">
          <tr className="bg-white border-b-2">
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
              Lihat Detail
            </th>
          </tr>
        </thead>
        <tbody>
        {pesananData.map((item, index) => (
            <tr className="odd:bg-white even:bg-gray-50 border-b">
              <th
                scope="row"
                className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {index+1}
              </th>
              <td className="px-4 py-4">{item.id}</td>
              <td className="px-4 py-4">{item.jenis === "Request" ? item.jenis : "Reguler"}</td>
              <td className="px-4 py-4">{item.waktuDipesan[2] + " " + item.waktuDipesan[1]}</td>
              <td className="px-4 py-4">{item.namaPemesan}</td>
              <td className="px-4 py-4">{item.email}</td>
              <td className="px-4 py-4">{item.jenis}</td>
              <td className="px-4 py-4">
                <p>{item.waktuAcara[2]}</p>
                <p>{item.waktuAcara[1]}</p>
              </td>
              <td className="px-4 py-4">
                {getStatusDiv(item.statusTiket)}
              </td>
              <td className="px-4 py-4">
                <a
                  href={"/detailpemesanan?id="+item.id}
                  className="font-medium text-blue-600 dark:text-green-500 hover:underline"
                >
                  Lihat
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PemesananAll;
