import Reschedule from "./Reschedule";
import { useState, useEffect } from "react";
import { DetailPesanan } from "../../interfaces/DetailPesanan";
import axios from "axios";

const RingkasanPesanan = ({ id }: { id: string }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsChecked(event.target.checked);
  };

  const [pesananData, setPesananData] = useState<DetailPesanan>();

  useEffect(() => {
    fetch("http://localhost:9000/api/pesanan/detailPesanan/" + id.toString())
      .then((response) => response.json())
      .then((data) => {
        setPesananData(data);
      })

      .catch((error) => console.error("Error fetching pesanan data:", error));
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

  const rescheduleProp: DetailPesanan & {
    statusDiv: string | JSX.Element;
  } = {
    ...pesananData!!,
    statusDiv: getStatusDiv(pesananData?.statusTiket || ""),
  };

  let rescheduleDiv = null;
  if (pesananData != null) {
    rescheduleDiv = (
      <div className="mt-8">
        <Reschedule {...rescheduleProp} />
      </div>
    );
  }

  const Tolak = async () => {
    console.log("tolak");
    console.log(pesananData?.email);
    try {
      const response = await axios.post(
        "http://localhost:9000/api/email/sendMail",
        {
          isTerima: false,
          email: pesananData?.email,
        }
      );
      console.log("Email sent successfully:", response.data);
    } catch (error) {
      console.error("Error sent email :", error);
    }
  };

  const Terima = async () => {
    console.log("terima");
    try {
      const response = await axios.post(
        "http://localhost:9000/api/email/terima",
        {
          id: parseInt(id),
        }
      );
      console.log("Pesanan diterima:", response.data);
    } catch (error) {
      console.error("Error terima pesanan:", error);
    }

    try {
      const response = await axios.post(
        "http://localhost:9000/api/email/sendMail",
        {
          isTerima: true,
          email: pesananData?.email,
          // id : id,
        }
      );
      console.log("Email sent successfully:", response.data);
    } catch (error) {
      console.error("Error sent email :", error);
    }
  };

  return (
    <div className="flex flex-col w-full h-fit rounded-3xl font-inter">
      <div className="flex flex-col bg-white p-8 w-full h-fit rounded-3xl">
        <div className="flex flex-row justify-between border-b-4 pb-4">
          <div className="font-bold text-xl">Ringkasan Pesanan</div>
          <div className="font-semibold text-lg">
            Jenis: {pesananData?.jenis}
          </div>
        </div>
        <div className="text-sm py-2">
          <table>
            <tbody>
              <tr>
                <td className="font-semibold" style={{ verticalAlign: "top" }}>
                  Order ID
                </td>
                <td style={{ verticalAlign: "top" }}>:</td>
                <td style={{ verticalAlign: "top" }}>{pesananData?.id}</td>
              </tr>
              <tr>
                <td className="font-semibold" style={{ verticalAlign: "top" }}>
                  Waktu Pemesanan
                </td>
                <td style={{ verticalAlign: "top" }}>:</td>
                <td style={{ verticalAlign: "top" }}>
                  {(pesananData?.waktuDibuat[2] || "") +
                    (pesananData?.waktuDibuat[1] || "")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col pr-8">
            <div className="text-lg font-semibold">Data Pesanan</div>
            <div className="font-medium text-md">
              <table>
                <tbody>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>Nama Acara/Show</td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>
                      {pesananData?.namaJadwal}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>Tanggal Kunjungan</td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>
                      {pesananData?.waktuKunjungan[2]}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>Waktu Kunjungan</td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>
                      {pesananData?.waktuKunjungan[1]}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>Jumlah Tiket</td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>
                      {pesananData?.jumlahTiket}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>Harga Tiket</td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>
                      {pesananData?.jenis === "Permintaan Kunjungan"
                        ? "-"
                        : "Rp" + (pesananData?.hargaTiket || "")}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>Total Harga</td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>
                      {pesananData?.jenis === "Permintaan Kunjungan"
                        ? "-"
                        : "Rp" +
                          ((pesananData?.hargaTiket || 0) *
                            (pesananData?.jumlahTiket || 0) || "")}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>Metode Pembayaran </td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>
                      Mandiri Virtual Account
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>Status</td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>
                      {getStatusDiv(pesananData?.statusTiket || "")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-semibold">Data Pemesan</div>
            <div className="font-medium text-md">
              <table>
                <tbody>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>Nama</td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>
                      {pesananData?.namaPemesan}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>Email</td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>
                      {pesananData?.email}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>No Telepon </td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>
                      {pesananData?.noTelepon}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-4">
          <div className="font-medium text-md">
            <table>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "top" }}>
                    Catatan / Detail Permintaan :
                  </td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "top" }}>{pesananData?.note}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* checkbox untuk reschedule */}
        <div className="flex justify-end">
          <input
            type="checkbox"
            className="h-6 w-6 cursor-pointer"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="checkbox" className="ml-2 text-xl font-medium">
            Lakukan penjadwalan ulang
          </label>
        </div>

        {/* button konfirmasi request */}
        <div className="flex flex-row justify-end">
          <button
            className="bg-color-9 w-fit text-white font-inter font-medium text-xl py-2 px-8 mx-4 rounded-3xl hover:scale-105"
            onClick={Tolak}
          >
            Tolak
          </button>
          <button
            className="bg-color-7 w-fit text-white font-inter font-regular text-xl py-2 px-8 rounded-3xl hover:scale-105"
            onClick={Terima}
          >
            Terima
          </button>
        </div>
      </div>
      {isChecked && rescheduleDiv}
    </div>
  );
};

export default RingkasanPesanan;
